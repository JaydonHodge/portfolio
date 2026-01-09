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
                setError(null);

                const data = await blogService.getAllPosts();

                // Ensuring data is an array before setting
                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    console.error('Expected array, got:', typeof data, data);
                    setError('Invalid data format from API');
                    setPosts([]);
                }
            } catch (err: any) {
                console.error('Fetch error:', err);
                console.error('Error response:', err.response?.data);
                setError(err.response?.data?.message || err.message || 'Failed to fetch posts');
                setPosts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
    if (posts.length === 0) return <div>No posts yet</div>;

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
