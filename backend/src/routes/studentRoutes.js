import express from 'express';
import {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    markAttendance,
    addRemark,
    addQuizMarks,
    raiseDoubt,
    incrementAssignment
} from '../controllers/studentController.js';

const router = express.Router();

router.route('/')
    .post(createStudent)
    .get(getAllStudents);

router.route('/:id')
    .get(getStudentById)
    .put(updateStudent)
    .delete(deleteStudent);

router.route('/:id/attendance').post(markAttendance);
router.route('/:id/remark').post(addRemark);
router.route('/:id/quiz').post(addQuizMarks);
router.route('/:id/doubt').post(raiseDoubt);
router.route('/:id/assignment').post(incrementAssignment);

export default router;
