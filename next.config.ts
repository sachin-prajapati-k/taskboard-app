// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is CRITICAL for Next.js 16 + Prisma 7
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-libsql"],
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
