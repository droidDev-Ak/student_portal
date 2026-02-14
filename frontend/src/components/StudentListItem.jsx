import { User, Mail, FileText } from 'lucide-react';

const StudentListItem = ({ student }) => {
    const isAtRisk = student.attendancePercentage < 75;
    const statusColor = isAtRisk ? 'text-red-600 bg-red-50' : (student.attendancePercentage < 85 ? 'text-amber-600 bg-amber-50' : 'text-green-600 bg-green-50');

    return (
        <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center gap-4">
                <div className="relative">
                    {student.profilePhoto ? (
                        <img src={student.profilePhoto} alt={student.name} className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                            <User className="w-5 h-5 text-slate-400" />
                        </div>
                    )}
                    {/* Dot indicator */}
                    <div className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${isAtRisk ? 'bg-red-500' : 'bg-green-500'}`}></div>
                </div>

                <div>
                    <h4 className="font-bold text-slate-800 text-sm">{student.name}</h4>
                    <div className="flex items-center gap-2">
                        <p className="text-xs text-slate-500">#{student.rollNo}</p>
                        {isAtRisk && <span className="text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded-full">At Risk</span>}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6">
                {/* Attendance Stat */}
                <div className="hidden sm:flex flex-col items-end">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full mb-1 ${statusColor}`}>
                        {student.attendancePercentage}% Attendance
                    </span>
                    <div className="w-24 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${isAtRisk ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${student.attendancePercentage}%` }}></div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100" title="Profile">
                        <FileText className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100" title="Message">
                        <Mail className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentListItem;
