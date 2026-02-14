import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AttendanceTrendChart = () => {
    const data = [
        { date: 'Jan 12', present: 54 },
        { date: 'Jan 14', present: 60 },
        { date: 'Jan 16', present: 58 },
        { date: 'Jan 19', present: 62 },
        { date: 'Jan 21', present: 59 },
        { date: 'Jan 23', present: 61 },
        { date: 'Today', present: 58 },
    ];

    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800">Attendance Trends</h3>
                <select className="text-sm bg-slate-50 border-none rounded-lg px-2 py-1 outline-none text-slate-500 cursor-pointer focus:ring-0">
                    <option>Last 14 Days</option>
                    <option>Last 30 Days</option>
                </select>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            domain={[50, 'auto']}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1e293b',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#fff',
                                padding: '12px'
                            }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{ stroke: '#2563eb', strokeWidth: 1, strokeDasharray: '4 4' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="present"
                            stroke="#2563eb"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorPresent)"
                            dot={{ r: 4, fill: '#fff', stroke: '#2563eb', strokeWidth: 2 }}
                            activeDot={{ r: 6, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AttendanceTrendChart;
