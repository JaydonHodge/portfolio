import { useState, useEffect } from 'react';
import { blogService } from '../services/blogServices';
import type { BlogPost } from '../services/blogServices';

import '../styles/BlogList.css'

function BlogList() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const data = await blogService.getAllPosts();
                setPosts(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch posts');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='post-scroll-container'>
            {posts.map((post) => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <small>{post.created_at}</small>
                </article>
            ))}
        </div>
    );
}

export default BlogList
