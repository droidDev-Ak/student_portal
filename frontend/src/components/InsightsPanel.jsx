const InsightsPanel = () => {
    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
            <h3 className="font-bold text-slate-800 mb-6">Academic Performance</h3>
            <div className="space-y-6 flex-1">
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-500">Midsem Average</span>
                        <span className="font-bold text-slate-800">78.4%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full w-[78%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-500">Quiz Completion</span>
                        <span className="font-bold text-slate-800">94%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[94%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-500">Assignment Metric</span>
                        <span className="font-bold text-slate-800">12 Pending</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[45%]"></div>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-50">
                <button className="w-full py-3 text-blue-600 font-semibold text-sm hover:bg-blue-50 rounded-xl transition-all">
                    View Full Analytics Report
                </button>
            </div>
        </div>
    );
};

export default InsightsPanel;
