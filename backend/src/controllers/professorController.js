import Professor from '../models/Professor.js';
import asyncHandler from '../middleware/asyncHandler.js';

const createProfessor = asyncHandler(async (req, res) => {
    const professor = await Professor.create(req.body);
    res.status(201).json({ success: true, data: professor });
});

const getProfessors = asyncHandler(async (req, res) => {
    const professors = await Professor.find();
    res.status(200).json({ success: true, count: professors.length, data: professors });
});

const getProfessorById = asyncHandler(async (req, res) => {
    const professor = await Professor.findById(req.params.id);
    if (!professor) {
        res.status(404);
        throw new Error('Professor not found');
    }
    res.status(200).json({ success: true, data: professor });
});

const updateProfessor = asyncHandler(async (req, res) => {
    const professor = await Professor.findById(req.params.id);
    if (!professor) {
        res.status(404);
        throw new Error('Professor not found');
    }
    Object.assign(professor, req.body);
    await professor.save();
    res.status(200).json({ success: true, data: professor });
});

const deleteProfessor = asyncHandler(async (req, res) => {
    const professor = await Professor.findById(req.params.id);
    if (!professor) {
        res.status(404);
        throw new Error('Professor not found');
    }
    await professor.deleteOne();
    res.status(200).json({ success: true, data: {} });
});

export {
    createProfessor,
    getProfessors,
    getProfessorById,
    updateProfessor,
    deleteProfessor
};
