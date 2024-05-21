// pages/dashboard.tsx

import { GetServerSideProps } from 'next';
import prisma from '../../../lib/prisma';

type Post = {
    id: string;
    title: string;
    content: string;
    createdAt: string;
};

type DashboardProps = {
    posts: Post[];
};

const Dashboard = ({ posts }: DashboardProps) => {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<DashboardProps> = async () => {
    const posts = await prisma.post.findMany({
        where: {
            authorId: 'user_id_here', // Fetch posts for the logged-in user
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    return {
        props: {
            posts,
        },
    };
};

export default Dashboard;
