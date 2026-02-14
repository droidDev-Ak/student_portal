import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './src/config/db.js';
import { errorHandler } from './src/middleware/errorMiddleware.js';
import studentRoutes from './src/routes/studentRoutes.js';
import classRoutes from './src/routes/classRoutes.js';
import professorRoutes from './src/routes/professorRoutes.js';
import subjectRoutes from './src/routes/subjectRoutes.js';
import gradeRoutes from './src/routes/gradeRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/students', studentRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/professors', professorRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/grades', gradeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
