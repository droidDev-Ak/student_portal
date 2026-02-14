import { Megaphone, CheckSquare } from 'lucide-react';

const BannerCard = ({ className, subjectCode }) => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg shadow-blue-200 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-12 -translate-y-6">
                <div className="w-64 h-64 rounded-full bg-white blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2 opacity-90">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium tracking-wide backdrop-blur-sm">
                            {subjectCode}
                        </span>
                        <span className="text-sm font-medium">Ongoing Semester</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{className}</h1>
                    <p className="opacity-80 max-w-lg">Manage generic operations efficiently.</p>
                </div>

                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-medium transition-all text-sm border border-white/10">
                        <Megaphone className="w-4 h-4" />
                        Announcement
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 bg-white text-blue-600 hover:bg-gray-50 rounded-xl font-bold transition-all text-sm shadow-lg">
                        <CheckSquare className="w-4 h-4" />
                        Attendance
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;
