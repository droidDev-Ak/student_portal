import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AttendanceChart = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-96">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Attendance Overview</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                    />
                    <Tooltip
                        cursor={{ fill: '#F3F4F6' }}
                        contentStyle={{
                            backgroundColor: '#1F2937',
                            border: 'none',
                            borderRadius: '8px',
                            color: '#fff'
                        }}
                    />
                    <Bar
                        dataKey="present"
                        fill="url(#colorView)"
                        radius={[4, 4, 0, 0]}
                        barSize={32}
                    />
                    <defs>
                        <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
                            <stop offset="100%" stopColor="#60A5FA" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;
