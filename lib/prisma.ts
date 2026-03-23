import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // This shows your SQL in the terminal (great for learning!)
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
