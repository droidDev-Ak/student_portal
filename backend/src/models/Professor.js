import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
    subjectName: { type: String, required: true },
    subjectCode: { type: String, required: true },
    links: {
        googleScholar: { type: String, default: '' },
        linkedIn: { type: String, default: '' }
    }
}, { _id: false });

const professorSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    profilePhoto: { type: String, default: '' },
    department: { type: String, required: true, trim: true },
    subjects: [subjectSchema]
}, {
    timestamps: true
});

const Professor = mongoose.model('Professor', professorSchema);

export default Professor;
