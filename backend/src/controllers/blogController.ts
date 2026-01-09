import { Request, Response } from 'express';
import pool from '../config/database';
import { BlogPost } from '../types/blog.types';

// GET all blog posts
export const getAllPosts = async (req: Request, res: Response) => {
    try {
        // Formatting the dates using PostgreSQL builtin TO_CHAR() func otherwise JavaScript will add extra at the end of 'date' object
        const result = await pool.query(
            `SELECT 
                id,
                title,
                content,
                author,
                TO_CHAR(created_at, 'YYYY-MM-DD') as created_at,
                TO_CHAR(updated_at, 'YYYY-MM-DD') as updated_at
            FROM blog_posts`
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// GET single blog post
export const getPostById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            'SELECT * FROM blog_posts WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// CREATE new blog post
export const createPost = async (req: Request, res: Response) => {
    try {
        const { title, content, author }: BlogPost = req.body;

        const result = await pool.query(
            'INSERT INTO blog_posts (title, content, author) VALUES ($1, $2, $3) RETURNING *',
            [title, content, author]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// UPDATE blog post
export const updatePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, content, author }: BlogPost = req.body;

        const result = await pool.query(
            'UPDATE blog_posts SET title = $1, content = $2, author = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
            [title, content, author, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// DELETE blog post
export const deletePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            'DELETE FROM blog_posts WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
