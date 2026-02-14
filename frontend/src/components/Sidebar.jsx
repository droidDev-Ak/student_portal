import { LayoutDashboard, Users, GraduationCap, Megaphone, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const Sidebar = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: Users, label: 'Students', path: '/students' },
        { icon: GraduationCap, label: 'Grades', path: '/grades' },
        { icon: Megaphone, label: 'Announcements', path: '/announcements' },
    ];

    return (
        <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col z-50">
            <div className="p-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">E</span>
                </div>
                <h1 className="text-xl font-bold text-slate-800">EduDash</h1>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            clsx(
                                'flex items-center gap-3 p-3 rounded-lg transition-all',
                                isActive
                                    ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                                    : 'text-slate-500 hover:bg-slate-50'
                            )
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 mt-auto">
                <div className="bg-slate-900 rounded-xl p-4 text-white">
                    <p className="text-xs text-slate-400 mb-2">Logged in as</p>
                    <div className="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/150?u=prof" className="w-8 h-8 rounded-full border border-slate-700" alt="Prof" />
                        <div>
                            <p className="text-sm font-semibold">Dr. Sarah Smith</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">HOD Computer Science</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
