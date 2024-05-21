// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Extend the global object to include prisma
declare global {
    var prisma: PrismaClient | undefined;
}

// Initialize PrismaClient only once
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

export default prisma;
