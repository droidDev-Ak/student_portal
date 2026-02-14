const StatCard = ({ title, value, subValue, subLabel, type = 'standard', progress }) => {
    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-slate-500 text-sm mb-1">{title}</p>
            <div className="flex items-end justify-between">
                <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
                {type === 'standard' && (
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${subLabel === 'Active' ? 'bg-slate-100 text-slate-600' :
                            subLabel === 'Alert' ? 'bg-red-100 text-red-600' :
                                'bg-green-100 text-green-600'
                        }`}>
                        {subValue} {subLabel !== 'Active' && subLabel !== 'Alert' && '↑'} {subLabel}
                    </span>
                )}
                {type === 'progress' && (
                    <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatCard;
