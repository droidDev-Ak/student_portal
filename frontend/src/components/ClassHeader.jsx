import { Users, MapPin, CheckSquare, Megaphone } from 'lucide-react';

const ClassHeader = ({ className, subjectCode, enrolled, room, onAttendanceClick }) => {
    return (
        <section className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">{subjectCode}: {className}</h2>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" /> {enrolled} Students Enrolled
                    </span>
                    <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {room}
                    </span>
                </div>
            </div>
            <div className="flex gap-3">
                <button
                    onClick={onAttendanceClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
                >
                    <CheckSquare className="w-5 h-5" /> Take Attendance
                </button>
                <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2">
                    <Megaphone className="w-5 h-5" /> Post Announcement
                </button>
            </div>
        </section>
    );
};

export default ClassHeader;
