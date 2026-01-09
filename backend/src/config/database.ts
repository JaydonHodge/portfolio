import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Using DATABASE_URL for production (Railway), individual vars for local development
const pool = new Pool(
    process.env.DATABASE_URL
        ? {
            // Production (Railway)
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        }
        : {
            // Local development (Docker)
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DB,
            password: process.env.POSTGRES_PASSWORD,
            port: parseInt(process.env.POSTGRES_PORT || '5432'),
        }
);

export default pool;
