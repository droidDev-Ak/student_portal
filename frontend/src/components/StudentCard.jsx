import { User, Flag } from 'lucide-react';

const StudentCard = ({ student }) => {
    const isAtRisk = student.attendancePercentage < 75;
    const statusColor = isAtRisk ? 'bg-red-500' : (student.attendancePercentage < 85 ? 'bg-amber-500' : 'bg-green-500');
    const textColor = isAtRisk ? 'text-red-600' : (student.attendancePercentage < 85 ? 'text-amber-600' : 'text-green-600');
    const borderColor = isAtRisk ? 'border-red-100' : 'border-slate-100';

    return (
        <div className={`bg-white p-5 rounded-2xl border ${borderColor} shadow-sm hover:shadow-md transition-all group`}>
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        {student.profilePhoto ? (
                            <img src={student.profilePhoto} alt={student.name} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                                <User className="w-6 h-6 text-slate-400" />
                            </div>
                        )}
                        <div className={`absolute bottom-0 right-0 w-3 h-3 ${statusColor} border-2 border-white rounded-full`}></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 line-clamp-1">{student.name}</h4>
                        <p className="text-xs text-slate-500">Roll: #{student.rollNo}</p>
                    </div>
                </div>
                {isAtRisk && (
                    <span className="bg-red-50 text-red-600 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tight flex items-center gap-1">
                        At Risk
                    </span>
                )}
            </div>
            <div className="space-y-3">
                <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Attendance</span>
                    <span className={`font-bold ${textColor}`}>{student.attendancePercentage}%</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full ${statusColor.replace('bg-', 'bg-')} w-[${student.attendancePercentage}%]`} style={{ width: `${student.attendancePercentage}%` }}></div>
                </div>
                <div className="flex gap-2 pt-2">
                    <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[11px] font-bold py-2 rounded-lg transition-all">Profile</button>
                    <button className={`flex-1 ${isAtRisk ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-100' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'} text-[11px] font-bold py-2 rounded-lg transition-all shadow-md`}>
                        {isAtRisk ? 'Warn Parent' : 'Message'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;
