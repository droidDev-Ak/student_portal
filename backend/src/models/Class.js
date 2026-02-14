import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
    className: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    section: { type: String, required: true, trim: true },
    totalStudents: { type: Number, required: true, min: 0 },
    totalProfessors: { type: Number, default: 0, min: 0 }
}, {
    timestamps: false
});

const Class = mongoose.model('Class', classSchema);

export default Class;
