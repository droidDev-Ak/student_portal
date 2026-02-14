import express from 'express';
import {
    createProfessor,
    getProfessors,
    getProfessorById,
    updateProfessor,
    deleteProfessor
} from '../controllers/professorController.js';

const router = express.Router();

router.route('/')
    .post(createProfessor)
    .get(getProfessors);

router.route('/:id')
    .get(getProfessorById)
    .put(updateProfessor)
    .delete(deleteProfessor);

export default router;
