import { LayoutDashboard, Users, GraduationCap, Megaphone, LogOut } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const Sidebar = () => {
    const navigate = useNavigate();
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/class/65c2a1f9e2b4d32a1c8f1234' },
        { icon: Users, label: 'Students', path: '/dashboard/students' },
        { icon: GraduationCap, label: 'Grades', path: '/dashboard/grades' },
        { icon: Megaphone, label: 'Announcements', path: '/dashboard/announcements' },
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

            {/* User Profile */}
            <div className="p-4 border-t border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" className="w-10 h-10 rounded-full border border-slate-200" />
                    <div>
                        <h4 className="font-bold text-sm text-slate-800">Dr. Sarah Smith</h4>
                        <p className="text-xs text-slate-500">HOD Computer Science</p>
                    </div>
                </div>
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-3 px-4 py-2 w-full text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all font-medium text-sm"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
