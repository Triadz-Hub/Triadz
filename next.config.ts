import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for static hosting (GitHub Pages)
  output: "export",
  images: {
    unoptimized: true,
  },

  // Turbopack settings
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
