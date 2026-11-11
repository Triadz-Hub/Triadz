import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GoDaddy Node.js Hosting runs the full Next.js Node server.
  // Do not set output: "export": contact Route Handlers and Server Actions
  // require a Node.js runtime.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
