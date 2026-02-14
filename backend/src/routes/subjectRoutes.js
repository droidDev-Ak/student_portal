import express from 'express';
import {
    createSubject,
    getSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject
} from '../controllers/subjectController.js';

const router = express.Router();

router.route('/')
    .post(createSubject)
    .get(getSubjects);

router.route('/:id')
    .get(getSubjectById)
    .put(updateSubject)
    .delete(deleteSubject);

export default router;
