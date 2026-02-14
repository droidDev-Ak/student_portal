import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <Sidebar />
            <div className="ml-64 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1 p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
