import Subject from '../models/Subject.js';
import asyncHandler from '../middleware/asyncHandler.js';

const createSubject = asyncHandler(async (req, res) => {
    const subject = await Subject.create(req.body);
    res.status(201).json({ success: true, data: subject });
});

const getSubjects = asyncHandler(async (req, res) => {
    const subjects = await Subject.find();
    res.status(200).json({ success: true, count: subjects.length, data: subjects });
});

const getSubjectById = asyncHandler(async (req, res) => {
    const subject = await Subject.findById(req.params.id);
    if (!subject) {
        res.status(404);
        throw new Error('Subject not found');
    }
    res.status(200).json({ success: true, data: subject });
});

const updateSubject = asyncHandler(async (req, res) => {
    const subject = await Subject.findById(req.params.id);
    if (!subject) {
        res.status(404);
        throw new Error('Subject not found');
    }
    Object.assign(subject, req.body);
    await subject.save();
    res.status(200).json({ success: true, data: subject });
});

const deleteSubject = asyncHandler(async (req, res) => {
    const subject = await Subject.findById(req.params.id);
    if (!subject) {
        res.status(404);
        throw new Error('Subject not found');
    }
    await subject.deleteOne();
    res.status(200).json({ success: true, data: {} });
});

export {
    createSubject,
    getSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject
};
