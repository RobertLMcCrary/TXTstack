// components/PostForm.tsx

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const authorId = 'user_id_here'; // You'll replace this with the actual user ID
        const res = await fetch('/api/post/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, authorId }),
        });
        if (res.ok) {
            router.push('/'); // Redirect to dashboard or posts page
        } else {
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;
