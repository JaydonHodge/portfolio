import axiosInstance from '../api/axiosConfig';

export interface BlogPost {
    id?: number;
    title: string;
    content: string;
    author: string;
    created_at?: string;
    updated_at?: string;
}

export const blogService = {
    // GET all blog posts
    async getAllPosts(): Promise<BlogPost[]> {
        const response = await axiosInstance.get('/posts');
        return response.data;
    },

    // GET single blog post by ID
    async getPostById(id: number): Promise<BlogPost> {
        const response = await axiosInstance.get(`/posts/${id}`);
        return response.data;
    },

    // CREATE new blog post
    async createPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<BlogPost> {
        const response = await axiosInstance.post('/posts', post);
        return response.data;
    },

    // UPDATE existing blog post
    async updatePost(id: number, post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<BlogPost> {
        const response = await axiosInstance.put(`/posts/${id}`, post);
        return response.data;
    },

    // DELETE blog post
    async deletePost(id: number): Promise<void> {
        await axiosInstance.delete(`/posts/${id}`);
    },
};
