import Grade from '../models/Grade.js';
import asyncHandler from '../middleware/asyncHandler.js';

const createGrade = asyncHandler(async (req, res) => {
    const grade = await Grade.create(req.body);
    res.status(201).json({ success: true, data: grade });
});

const getGrades = asyncHandler(async (req, res) => {
    const grades = await Grade.find().populate('student', 'name rollNo').populate('subject', 'subjectName subjectCode');
    res.status(200).json({ success: true, count: grades.length, data: grades });
});

const getGradeById = asyncHandler(async (req, res) => {
    const grade = await Grade.findById(req.params.id).populate('student', 'name rollNo').populate('subject', 'subjectName subjectCode');
    if (!grade) {
        res.status(404);
        throw new Error('Grade not found');
    }
    res.status(200).json({ success: true, data: grade });
});

const updateGrade = asyncHandler(async (req, res) => {
    const grade = await Grade.findById(req.params.id);
    if (!grade) {
        res.status(404);
        throw new Error('Grade not found');
    }
    Object.assign(grade, req.body);
    await grade.save();
    res.status(200).json({ success: true, data: grade });
});

const deleteGrade = asyncHandler(async (req, res) => {
    const grade = await Grade.findById(req.params.id);
    if (!grade) {
        res.status(404);
        throw new Error('Grade not found');
    }
    await grade.deleteOne();
    res.status(200).json({ success: true, data: {} });
});

export {
    createGrade,
    getGrades,
    getGradeById,
    updateGrade,
    deleteGrade
};
