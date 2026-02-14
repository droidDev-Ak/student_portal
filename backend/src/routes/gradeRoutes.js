import express from 'express';
import {
    createGrade,
    getGrades,
    getGradeById,
    updateGrade,
    deleteGrade
} from '../controllers/gradeController.js';

const router = express.Router();

router.route('/')
    .post(createGrade)
    .get(getGrades);

router.route('/:id')
    .get(getGradeById)
    .put(updateGrade)
    .delete(deleteGrade);

export default router;
