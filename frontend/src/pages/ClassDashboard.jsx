import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import api from '../services/api';
import ClassHeader from '../components/ClassHeader';
import StatCard from '../components/StatCard';
import AttendanceTrendChart from '../components/AttendanceTrendChart';
import InsightsPanel from '../components/InsightsPanel';
import StudentCard from '../components/StudentCard';
import DoubtsPanel from '../components/DoubtsPanel';
import ScheduleCard from '../components/ScheduleCard';
import AttendanceModal from '../components/AttendanceModal';

const ClassDashboard = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [classData, setClassData] = useState(null);
    const [students, setStudents] = useState([]);
    const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Fallback ID if params are missing for demo purposes
                const classId = id || '65c2a1f9e2b4d32a1c8f1234';

                // Mock data fallback if API fails (for pure UI demo)
                const mockStudents = Array(6).fill(null).map((_, i) => ({
                    _id: `st-${i}`,
                    name: ['Ethan Brooks', 'Lydia Vance', 'Marcus Wright', 'Sarah Chen', 'James Doe', 'Emily Wu'][i],
                    rollNo: `2024-00${i + 1}`,
                    attendancePercentage: [98, 62, 76, 92, 85, 45][i],
                    profilePhoto: `https://i.pravatar.cc/150?u=${i + 1}`
                }));

                const mockClassData = {
                    className: 'Advanced Algorithms',
                    subjectCode: 'CS-402',
                    totalStudents: 64,
                    room: 'Room 302, Block B'
                };

                try {
                    const [classRes, studentsRes] = await Promise.all([
                        api.get(`/classes/${classId}`),
                        api.get(`/students?classId=${classId}`)
                    ]);
                    setClassData(classRes.data.data);
                    setStudents(studentsRes.data.data);
                } catch (err) {
                    console.warn("API Fetch failed, using mock data for UI demo");
                    setClassData(mockClassData);
                    setStudents(mockStudents);
                }

            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <div className="p-8 text-slate-500">Loading Dashboard...</div>;

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12">

            {/* HEADER SECTION */}
            <ClassHeader
                className={classData?.className}
                subjectCode={classData?.subjectCode}
                enrolled={classData?.totalStudents || students.length}
                room={classData?.room || "Room 302, Block B"} // Mock room if not in schema
                onAttendanceClick={() => setIsAttendanceModalOpen(true)}
            />

            {/* ANALYTICS STATS */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Students" value={classData?.totalStudents || 64} subValue="Active" subLabel="Active" type="standard" />
                <StatCard title="Avg. Attendance" value="92%" subValue="" subLabel="" type="progress" progress={92} />
            </section>

            {/* CHARTS & INSIGHTS */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <AttendanceTrendChart />
                </div>
                <div>
                    <InsightsPanel />
                </div>
            </section>

            {/* STUDENT DIRECTORY & SIDE PANELS */}
            <section className="grid grid-cols-1 xl:grid-cols-4 gap-8">

                {/* STUDENT GRID */}
                <div className="xl:col-span-3 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-800">Student Directory</h3>
                        <div className="flex gap-2">
                            <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-all">
                                <Search className="w-4 h-4" />
                            </button>
                            <input type="text" placeholder="Search by name or roll..." className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-100 outline-none w-64" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {students.map((student) => (
                            <StudentCard key={student._id} student={student} />
                        ))}
                    </div>
                </div>

                {/* SIDEBAR (DOUBTS & SCHEDULE) */}
                <div className="space-y-8">
                    <DoubtsPanel />
                    <ScheduleCard />
                </div>

            </section>

            <AttendanceModal
                isOpen={isAttendanceModalOpen}
                onClose={() => setIsAttendanceModalOpen(false)}
                students={students}
                classId={id}
            />
        </div>
    );
};

export default ClassDashboard;
