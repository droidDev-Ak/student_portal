import { ChevronRight } from 'lucide-react';

const DoubtsPanel = () => {
    return (
        <div className="bg-white border border-slate-100 shadow-sm rounded-3xl p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800">Pending Doubts</h3>
                <span className="bg-amber-100 text-amber-600 text-xs font-bold px-2 py-0.5 rounded-full">04</span>
            </div>
            <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                        <img src="https://i.pravatar.cc/150?u=1" className="w-5 h-5 rounded-full" alt="User" />
                        <span className="text-[11px] font-bold text-slate-600">Ethan Brooks</span>
                        <span className="text-[10px] text-slate-400 ml-auto">10m ago</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3 italic">"Confused about the space complexity of Dijkstra's with Fib-Heap..."</p>
                    <div className="flex gap-2">
                        <button className="flex-1 bg-blue-600 text-white text-[10px] py-1.5 rounded-lg">Reply</button>
                        <button className="px-2 bg-white border border-slate-200 text-slate-400 rounded-lg hover:text-green-500 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                        <img src="https://i.pravatar.cc/150?u=4" className="w-5 h-5 rounded-full" alt="User" />
                        <span className="text-[11px] font-bold text-slate-600">Sarah Chen</span>
                        <span className="text-[10px] text-slate-400 ml-auto">2h ago</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed mb-2 italic">"Is this the correct output for Assignment 3?"</p>
                    <div className="rounded-lg overflow-hidden border border-slate-200 mb-3 bg-white p-1">
                        <div className="w-full h-16 bg-slate-200 rounded animate-pulse"></div>
                        {/* Placeholder for image */}
                    </div>
                    <div className="flex gap-2">
                        <button className="flex-1 bg-blue-600 text-white text-[10px] py-1.5 rounded-lg">Open Thread</button>
                        <button className="px-2 bg-white border border-slate-200 text-slate-400 rounded-lg">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoubtsPanel;
