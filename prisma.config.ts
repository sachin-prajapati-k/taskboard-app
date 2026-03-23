// prisma.config.ts
import "dotenv/config"; // <--- ADD THIS LINE
import { defineConfig } from "@prisma/config";

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
  client: {
    output: "./node_modules/.prisma/client",
  },
});
