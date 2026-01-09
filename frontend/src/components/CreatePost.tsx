import { useState } from 'react';
import { blogService } from '../services/blogServices';

import '../styles/CreatePost.css'

function CreatePost() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(null);

            await blogService.createPost(formData);

            // Reset form
            // setFormData({ title: '', content: '', author: '' });

            alert('Post created successfully!');
            window.location.reload();
        } catch (err) {
            setError('Failed to create post');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                title=''
                type="text"
                placeholder="Title"
                className='title-input'
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
            />

            <textarea
                title=''
                placeholder="Content"
                value={formData.content}
                className='content-input'
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
            />

            <input
                title=''
                type="text"
                placeholder="Author"
                className='author-input'
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
            />

            <button type="submit" className='submit-input' disabled={loading}>
                {loading ? 'Posting...' : 'Create Post'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default CreatePost
