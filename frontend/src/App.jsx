import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ClassDashboard from './pages/ClassDashboard';
import AnnouncementsPage from './pages/AnnouncementsPage';
import StudentsPage from './pages/StudentsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Navigate to="/class/65c2a1f9e2b4d32a1c8f1234" replace />} />
                    <Route path="class/:id" element={<ClassDashboard />} />
                    <Route path="students" element={<StudentsPage />} />
                    <Route path="announcements" element={<AnnouncementsPage />} />
                    <Route path="*" element={<div className="p-8">404 Not Found</div>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
