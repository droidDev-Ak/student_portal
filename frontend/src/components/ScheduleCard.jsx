const ScheduleCard = () => {
    return (
        <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-lg shadow-indigo-100 relative overflow-hidden">
            <div className="relative z-10">
                <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-2">Next Lecture</p>
                <h4 className="text-xl font-bold mb-1 italic tracking-tight">Theory of Computation</h4>
                <p className="text-sm text-indigo-100 opacity-80">Monday, 10:30 AM • Room 405</p>
                <button className="mt-4 w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-2 rounded-xl text-sm font-semibold transition-all">
                    Prepare Materials
                </button>
            </div>
            {/* Abstract BG Shape */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500 rounded-full blur-2xl opacity-50"></div>
        </div>
    );
};

export default ScheduleCard;
