import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // The Arrow Puzzle Dojo store pages are static files in public/. Next strips
  // the trailing slash, so /puzzle-dojo/terms/ would 404 without these; the
  // App Store listing uses the clean URLs as its Marketing and Support links.
  async rewrites() {
    return [
      { source: "/puzzle-dojo", destination: "/puzzle-dojo/index.html" },
      { source: "/puzzle-dojo/privacy", destination: "/puzzle-dojo/privacy/index.html" },
      { source: "/puzzle-dojo/terms", destination: "/puzzle-dojo/terms/index.html" },
      { source: "/puzzle-dojo/support", destination: "/puzzle-dojo/support/index.html" },
    ];
  },
};

export default nextConfig;
