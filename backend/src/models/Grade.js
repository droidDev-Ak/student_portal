import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    midsem: { type: Number, default: 0, min: 0 },
    endsem: { type: Number, default: 0, min: 0 },
    cws: { type: Number, default: 0, min: 0 },
    practical: { type: Number, default: 0, min: 0 },
    belowStrength: { type: Boolean, default: false }
}, {
    timestamps: true
});

const Grade = mongoose.model('Grade', gradeSchema);

export default Grade;
