import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Use a separate output folder for `next dev` so running `next build`
  // never overwrites the dev server's files (which causes 404s & full reloads)
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  // Keep compiled pages active in memory during development to avoid recompilation delays
  onDemandEntries: {
    maxInactiveAge: 15 * 60 * 1000,
    pagesBufferLength: 10,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Use memory caching on Windows to prevent PackFileCacheStrategy ENOENT file-locking errors
      config.cache = {
        type: "memory",
      };
    }
    return config;
  },
});

export default nextConfig;

