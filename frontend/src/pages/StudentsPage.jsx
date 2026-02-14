import { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Filter } from 'lucide-react';
import StudentListItem from '../components/StudentListItem';
import api from '../services/api';

// Simple Calendar Component
const SimpleCalendar = ({ selectedDate, onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const padding = Array.from({ length: firstDay }, (_, i) => i);

    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-blue-600" />
                    {currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
                </h3>
                <div className="flex gap-2">
                    <button onClick={handlePrevMonth} className="p-1 hover:bg-slate-50 rounded-lg text-slate-500"><ChevronLeft className="w-5 h-5" /></button>
                    <button onClick={handleNextMonth} className="p-1 hover:bg-slate-50 rounded-lg text-slate-500"><ChevronRight className="w-5 h-5" /></button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {padding.map(i => <div key={`pad-${i}`} className="aspect-square"></div>)}
                {days.map(day => {
                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                    const isToday = new Date().toDateString() === date.toDateString();

                    return (
                        <button
                            key={day}
                            onClick={() => onDateSelect(date)}
                            className={`aspect-square rounded-xl text-sm font-medium flex items-center justify-center transition-all ${isSelected ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' :
                                isToday ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'text-slate-700 hover:bg-slate-50'
                                }`}
                        >
                            {day}
                        </button>
                    )
                })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-50">
                <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Filter by date to view attendance</span>
                    <button onClick={() => onDateSelect(null)} className="text-blue-600 font-semibold hover:underline">Reset Filter</button>
                </div>
            </div>
        </div>
    );
};

const StudentsPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock Data Fetch
        const fetchStudents = async () => {
            // In real app: api.get('/students')
            const mockStudents = Array(12).fill(null).map((_, i) => ({
                _id: `st-${i}`,
                name: ['Ethan Brooks', 'Lydia Vance', 'Marcus Wright', 'Sarah Chen', 'James Doe', 'Emily Wu', 'Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Pam Beesly', 'Ryan Howard', 'Andy Bernard'][i],
                rollNo: `2024-00${i + 1}`,
                attendancePercentage: [98, 62, 76, 92, 85, 45, 88, 95, 70, 91, 55, 60][i],
                profilePhoto: `https://i.pravatar.cc/150?u=${i + 1}`,
                // Mock attendance history for filtering
                attendanceHistory: [
                    { date: new Date().toDateString(), status: i % 2 === 0 ? 'present' : 'absent' }
                ]
            }));

            setStudents(mockStudents);
            setFilteredStudents(mockStudents);
            setLoading(false);
        };
        fetchStudents();
    }, []);

    useEffect(() => {
        if (selectedDate) {
            // Filter logic: In real app, this might be an API call `GET /attendance?date=...`
            // Here we mock filter by deciding even index students are present on selected date for demo
            const dateStr = selectedDate.toDateString();
            const present = students.filter((s, i) => {
                // Mock logic: Deterministic pseudo-random based on day + index
                return (selectedDate.getDate() + i) % 2 !== 0;
            });
            setFilteredStudents(present);
        } else {
            setFilteredStudents(students);
        }
    }, [selectedDate, students]);

    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 pb-12">

            {/* Student List Section */}
            <div className="flex-1 space-y-6">
                <div className="flex justify-between items-center bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            {selectedDate ? `Present on ${selectedDate.toLocaleDateString()}` : 'All Students'}
                        </h2>
                        <p className="text-sm text-slate-500">{filteredStudents.length} Students found</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                            <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2.5 bg-slate-50 rounded-xl border-none text-sm outline-none focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-500">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-slate-400">Loading Students...</div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map(student => (
                                <StudentListItem key={student._id} student={student} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-slate-400 italic">No students found for this date.</div>
                        )}
                    </div>
                )}
            </div>

            {/* Right Sidebar - Calendar */}
            <div className="w-full lg:w-96 space-y-8">
                <SimpleCalendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white text-center">
                    <h4 className="text-2xl font-bold mb-2">92% Attendance</h4>
                    <p className="text-blue-100 mb-6 text-sm">Average attendance for this month is higher than usual.</p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-blue-50 transition-colors w-full">
                        Download Report
                    </button>
                </div>
            </div>

        </div>
    );
};

export default StudentsPage;
