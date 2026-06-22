import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray lockfile exists in $HOME).
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
