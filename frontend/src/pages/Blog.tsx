import '../styles/Blog.css'

import BlogList from '../components/BlogList';
import CreatePost from '../components/CreatePost';

function Blog() {
    return (
        <div>
            <div className='content-padding' />
            <span className='blog-page'>
                <div className='list-container'>
                    <h1>Blog Posts</h1>
                    <BlogList />
                </div>
                <div className='create-post-container'>
                    <h1>Create New Post</h1>
                    <CreatePost />
                </div>
            </span>
            <div className='next-steps'>
                <h1>Things To Add</h1>
                <ul>
                    <li>User Authentication w/ password hashing to control who can post blogs</li>
                    <li>Ability to update and delete blogs</li>
                </ul>
            </div>
        </div>
    )
}

export default Blog
