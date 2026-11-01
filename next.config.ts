import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* output: "export" removed to allow Server Actions and dynamic SSR */
  images: {
    unoptimized: true,
  },
  typescript: {
    // Allows production builds to successfully complete even if the project has type errors
    ignoreBuildErrors: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
