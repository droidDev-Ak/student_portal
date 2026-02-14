import Student from '../models/Student.js';
import sendEmail from '../utils/sendEmail.js';
import asyncHandler from '../middleware/asyncHandler.js';

const createStudent = asyncHandler(async (req, res) => {
    const student = await Student.create(req.body);
    res.status(201).json({ success: true, data: student });
});

const getAllStudents = asyncHandler(async (req, res) => {
    const students = await Student.find();
    res.status(200).json({ success: true, count: students.length, data: students });
});

const getStudentById = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }
    res.status(200).json({ success: true, data: student });
});

const updateStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    Object.assign(student, req.body);
    await student.save();

    res.status(200).json({ success: true, data: student });
});

const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }
    await student.deleteOne();
    res.status(200).json({ success: true, data: {} });
});

const markAttendance = asyncHandler(async (req, res) => {
    const { date, teacherId, status } = req.body;
    const student = await Student.findById(req.params.id);

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    student.attendanceHistory.push({ date: date || new Date(), teacherId, status });

    const totalClasses = student.attendanceHistory.length;
    const totalPresent = student.attendanceHistory.filter(x => x.status === 'present').length;
    student.attendancePercentage = totalClasses === 0 ? 0 : (totalPresent / totalClasses) * 100;

    await student.save();

    if (student._automationTriggers && student._automationTriggers.length > 0) {
        await sendEmail({
            email: student.email,
            subject: 'Student Portal Alert',
            message: `Alerts Triggered:\n${student._automationTriggers.join('\n')}`
        });
    }

    res.status(200).json({ success: true, data: student });
});

const addRemark = asyncHandler(async (req, res) => {
    const { remark, severity, addedBy } = req.body;
    const student = await Student.findById(req.params.id);

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    student.remarks.push({ remark, severity, addedBy });
    await student.save();

    if (student._automationTriggers && student._automationTriggers.length > 0) {
        await sendEmail({
            email: student.email,
            subject: 'Student Portal Alert',
            message: `Alerts Triggered:\n${student._automationTriggers.join('\n')}`
        });
    }

    res.status(200).json({ success: true, data: student });
});

const addQuizMarks = asyncHandler(async (req, res) => {
    const { quizId, marks, maxMarks, date } = req.body;
    const student = await Student.findById(req.params.id);

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    student.quizMarks.push({ quizId, marks, maxMarks, date });
    student.quizzesAttended += 1;
    await student.save();

    res.status(200).json({ success: true, data: student });
});

const raiseDoubt = asyncHandler(async (req, res) => {
    const { question, image } = req.body;
    const student = await Student.findById(req.params.id);

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    student.doubts.push({ question, image });
    await student.save();

    res.status(200).json({ success: true, data: student });
});

const incrementAssignment = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id);

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    student.totalAssignmentsSubmitted += 1;
    await student.save();

    res.status(200).json({ success: true, data: student });
});

export {
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
};
