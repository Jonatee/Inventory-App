import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from './routes/user.route';
import itemRoutes from './routes/item.route';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/items',itemRoutes)


const PORT = process.env.PORT || 5000;
const start = async () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

start();
