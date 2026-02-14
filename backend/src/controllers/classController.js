import Class from '../models/Class.js';
import asyncHandler from '../middleware/asyncHandler.js';

const createClass = asyncHandler(async (req, res) => {
    const newClass = await Class.create(req.body);
    res.status(201).json({ success: true, data: newClass });
});

const getClasses = asyncHandler(async (req, res) => {
    const classes = await Class.find();
    res.status(200).json({ success: true, count: classes.length, data: classes });
});

const getClassById = asyncHandler(async (req, res) => {
    const classItem = await Class.findById(req.params.id);
    if (!classItem) {
        res.status(404);
        throw new Error('Class not found');
    }
    res.status(200).json({ success: true, data: classItem });
});

const updateClass = asyncHandler(async (req, res) => {
    const classItem = await Class.findById(req.params.id);
    if (!classItem) {
        res.status(404);
        throw new Error('Class not found');
    }

    Object.assign(classItem, req.body);
    await classItem.save();

    res.status(200).json({ success: true, data: classItem });
});

const deleteClass = asyncHandler(async (req, res) => {
    const classItem = await Class.findById(req.params.id);
    if (!classItem) {
        res.status(404);
        throw new Error('Class not found');
    }
    await classItem.deleteOne();
    res.status(200).json({ success: true, data: {} });
});

export {
    createClass,
    getClasses,
    getClassById,
    updateClass,
    deleteClass
};
