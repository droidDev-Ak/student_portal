import { ChevronRight, Bell } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
                <span className="text-slate-400 flex items-center gap-2">Class Select <ChevronRight className="w-4 h-4" /></span>
                <span className="font-semibold text-slate-800">Advanced Algorithms (CS-402)</span>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                    {/* Search Icon Placeholder if needed, or other action */}
                </button>
                <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
