import app from './app';
import pool from './config/database';

const PORT = Number(process.env.PORT) || 5000;
const MAX_RETRIES = 5;
const RETRY_DELAY = 5000; // 5 seconds

// Function to test database connection with retries
async function connectWithRetry(retries = MAX_RETRIES): Promise<void> {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('Database connected successfully at:', result.rows[0].now);
    } catch (err) {
        console.error(`Error connecting to database (${MAX_RETRIES - retries + 1}/${MAX_RETRIES}):`, err instanceof Error ? err.message : err);

        if (retries > 0) {
            console.log(`Retrying in ${RETRY_DELAY / 1000} seconds...`);
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            return connectWithRetry(retries - 1);
        } else {
            console.error('Failed to connect to database after maximum retries');
            process.exit(1);
        }
    }
}

// Start server
async function startServer() {
    await connectWithRetry();

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
    });

}

startServer();
