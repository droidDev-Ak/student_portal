import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
    subjectName: { type: String, required: true, trim: true },
    subjectCode: { type: String, required: true, unique: true, trim: true },
    department: { type: String, required: true, trim: true },
    practicalBased: { type: Boolean, default: false }
}, {
    timestamps: true
});

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;
