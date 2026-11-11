import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const pat = process.env.GODADDY_PAT;
const appId = process.env.GODADDY_APP_ID;
const archivePath = process.env.GODADDY_SOURCE_ZIP || "godaddy-source.zip";
const apiBase = "https://api.godaddy.com/v1/hosting";
const commitSha = process.env.GITHUB_SHA || "manual-deploy";

function idempotencyKey(operation) {
  const hex = createHash("sha256")
    .update(`${commitSha}:${operation}`)
    .digest("hex");
  const variant = ((Number.parseInt(hex[16], 16) & 0x3) | 0x8).toString(16);
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-4${hex.slice(13, 16)}-${variant}${hex.slice(17, 20)}-${hex.slice(20, 32)}`;
}
const maxWaitMs = 5 * 60 * 1000;
const pollEveryMs = 4000;

if (!pat || !appId) {
  console.log(
    "GoDaddy deployment skipped: configure GODADDY_PAT and GODADDY_APP_ID in GitHub Actions secrets. The production build has still been verified.",
  );
  process.exit(0);
}

const authHeaders = { Authorization: `Bearer ${pat}` };

function unwrap(payload) {
  return payload?.data ?? payload;
}

function findId(payload, keys) {
  const root = unwrap(payload);
  for (const key of keys) {
    if (typeof root?.[key] === "string" && root[key]) return root[key];
  }
  for (const key of ["import", "deployment", "operation", "result"]) {
    const value = root?.[key];
    if (value && typeof value === "object") {
      const found = findId(value, keys);
      if (found) return found;
    }
  }
  return null;
}

function findStatus(payload) {
  const root = unwrap(payload);
  for (const key of ["status", "state"]) {
    if (typeof root?.[key] === "string") return root[key].toUpperCase();
  }
  for (const key of ["import", "deployment", "operation", "result"]) {
    const value = root?.[key];
    if (value && typeof value === "object") {
      const found = findStatus(value);
      if (found) return found;
    }
  }
  return null;
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${apiBase}${path}`, {
    ...options,
    headers: { ...authHeaders, ...options.headers },
  });
  const responseText = await response.text();
  let payload = {};
  try {
    payload = responseText ? JSON.parse(responseText) : {};
  } catch {
    payload = { message: responseText.slice(0, 1500) };
  }

  if (!response.ok) {
    const detail =
      payload?.message || payload?.detail || payload?.title ||
      `GoDaddy API returned HTTP ${response.status}`;
    throw new Error(detail);
  }
  return payload;
}

async function pollUntilComplete(label, getPath) {
  const start = Date.now();
  let latest;
  while (Date.now() - start < maxWaitMs) {
    latest = await apiRequest(getPath);
    const status = findStatus(latest);

    if (status === "COMPLETED" || status === "SUCCEEDED" || status === "SUCCESS") {
      console.log(`${label}: ${status}`);
      return latest;
    }
    if (status === "FAILED" || status === "CANCELLED" || status === "ERROR") {
      throw new Error(`${label} failed. Inspect the GoDaddy Hosting deployment logs.`);
    }

    await new Promise((resolve) => setTimeout(resolve, pollEveryMs));
  }
  throw new Error(`${label} did not finish within five minutes.`);
}

async function main() {
  const zip = await readFile(archivePath);
  const form = new FormData();
  form.set(
    "file",
    new Blob([zip], { type: "application/zip" }),
    "triadz-source.zip",
  );

  console.log("Uploading application source to GoDaddy Preview…");
  const importResponse = await apiRequest(
    `/apps/${encodeURIComponent(appId)}/imports`,
    {
      method: "POST",
      headers: { "Idempotency-Key": idempotencyKey("source-import") },
      body: form,
    },
  );

  const importId = findId(importResponse, ["importId", "id"]);
  if (importId) {
    await pollUntilComplete(
      "GoDaddy source import",
      `/apps/${encodeURIComponent(appId)}/imports/${encodeURIComponent(importId)}`,
    );
  } else {
    const immediateStatus = findStatus(importResponse);
    if (!["COMPLETED", "SUCCEEDED", "SUCCESS"].includes(immediateStatus || "")) {
      throw new Error(
        "GoDaddy accepted the source request but did not return an import ID. Check the GoDaddy Hosting import status.",
      );
    }
  }

  console.log("Publishing the imported Preview version…");
  const deploymentResponse = await apiRequest(
    `/apps/${encodeURIComponent(appId)}/deployments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey("publish"),
      },
      body: JSON.stringify({}),
    },
  );

  const deploymentId = findId(deploymentResponse, ["deploymentId", "id"]);
  if (deploymentId) {
    await pollUntilComplete(
      "GoDaddy production deployment",
      `/apps/${encodeURIComponent(appId)}/deployments/${encodeURIComponent(deploymentId)}`,
    );
  } else {
    const immediateStatus = findStatus(deploymentResponse);
    if (!["COMPLETED", "SUCCEEDED", "SUCCESS"].includes(immediateStatus || "")) {
      throw new Error(
        "GoDaddy accepted the deployment request but did not return a deployment ID. Check the GoDaddy Hosting deployment status.",
      );
    }
  }

  console.log("GoDaddy deployment completed. Verify https://triadz.in and the contact form.");
}

main().catch((error) => {
  console.error("GoDaddy deployment failed:", error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
