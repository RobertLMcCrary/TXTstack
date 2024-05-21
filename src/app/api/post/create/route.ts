import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const posts = await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        res.json(posts);
    } else if (req.method === 'POST') {
        const { title, content, authorId } = req.body;
        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId,
            },
        });
        res.json(post);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}