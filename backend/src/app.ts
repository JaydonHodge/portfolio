import express from 'express';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes';

const app = express();

// Middleware  -- for production
const allowedOrigins = [
    'http://localhost:5173', // Local development (Docker port I think)
    'https://jaydonhodge.vercel.app',           //  Main Domain
    'https://portfolio-frontend-git-main-yajenios-projects.vercel.app', // Production Vercel domain
    'https://jaydonhodge.io',                   // Custom Domain
];

app.use(cors({  // Allowing requests from frontend
    origin: (origin, callback) => {
        // Allow requests with no origin
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));


app.use(express.json());

// Routes
app.use('/api', blogRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

export default app;
