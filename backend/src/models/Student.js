import mongoose from 'mongoose';

const remarkSchema = new mongoose.Schema({
    remark: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
    severity: { type: String, enum: ['low', 'medium', 'high'], required: true, default: 'low' },
    addedBy: { type: String, required: true }
}, { _id: false });

const quizMarkSchema = new mongoose.Schema({
    quizId: { type: String, required: true },
    marks: { type: Number, required: true, min: 0 },
    maxMarks: { type: Number, required: true, min: 1 },
    date: { type: Date, default: Date.now }
}, { _id: false });

const doubtSchema = new mongoose.Schema({
    question: { type: String, required: true, trim: true },
    image: { type: String, trim: true },
    askedAt: { type: Date, default: Date.now },
    resolved: { type: Boolean, default: false }
}, { _id: true });

const attendanceEventSchema = new mongoose.Schema({
    date: { type: Date, required: true, default: Date.now },
    teacherId: { type: String, required: true },
    status: { type: String, enum: ['present', 'absent'], required: true }
}, { _id: false });

const studentSchema = new mongoose.Schema({
    rollNo: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    department: { type: String, required: true, trim: true },
    section: { type: String, required: true, trim: true },
    profilePhoto: { type: String, default: '' },
    attendancePercentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    attendanceHistory: [attendanceEventSchema],
    totalAssignmentsSubmitted: { type: Number, default: 0, min: 0 },
    quizzesAttended: { type: Number, default: 0, min: 0 },
    quizMarks: [quizMarkSchema],
    remarks: [remarkSchema],
    showAlertDuringAttendance: { type: Boolean, default: false },
    doubts: [doubtSchema]
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

studentSchema.index({ department: 1, section: 1 });

studentSchema.virtual('averageQuizScore').get(function () {
    if (!this.quizMarks || this.quizMarks.length === 0) return 0;
    const totalObtained = this.quizMarks.reduce((sum, q) => sum + q.marks, 0);
    const totalMax = this.quizMarks.reduce((sum, q) => sum + q.maxMarks, 0);
    return totalMax === 0 ? 0 : (totalObtained / totalMax) * 100;
});

studentSchema.methods.checkAutomationRules = function () {
    const triggers = [];

    const hasHighSeverity = this.remarks.some(r => r.severity === 'high');
    if (hasHighSeverity) {
        triggers.push('High severity remark found on profile.');
    }

    if (this.attendancePercentage < 75) {
        triggers.push(`Low attendance alert: ${this.attendancePercentage.toFixed(2)}%`);
    }

    if (this.attendanceHistory && this.attendanceHistory.length >= 2) {
        const teacherHistory = {};

        for (let i = this.attendanceHistory.length - 1; i >= 0; i--) {
            const entry = this.attendanceHistory[i];
            if (!teacherHistory[entry.teacherId]) {
                teacherHistory[entry.teacherId] = [];
            }
            teacherHistory[entry.teacherId].push(entry);
        }

        for (const [tid, records] of Object.entries(teacherHistory)) {
            if (records.length >= 2) {
                if (records[0].status === 'absent' && records[1].status === 'absent') {
                    triggers.push(`Consecutive absences detected for teacher ${tid}`);
                    break;
                }
            }
        }
    }

    return triggers;
};

studentSchema.pre('save', function (next) {
    if (this.isModified('remarks') || this.isModified('attendancePercentage') || this.isModified('attendanceHistory')) {
        const triggers = this.checkAutomationRules();
        if (triggers.length > 0) {
            this.showAlertDuringAttendance = true;
            this._automationTriggers = triggers;
        }
    }
    next();
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
