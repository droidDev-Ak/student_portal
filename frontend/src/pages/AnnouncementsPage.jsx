import { useState } from 'react';
import { Send, Paperclip, Mic, Image as ImageIcon, MoreVertical, Search, CheckCheck } from 'lucide-react';

const AnnouncementsPage = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Mid-semester exams will start from March 1st. Please check the complete schedule attached.",
            time: "10:30 AM",
            date: "Today",
            sender: "You",
            type: "text"
        },
        {
            id: 2,
            text: "Lab Manual.pdf",
            time: "Yesterday",
            sender: "You",
            type: "file",
            fileType: "pdf"
        },
        {
            id: 3,
            text: "Don't forget to submit your assignments by Friday!",
            time: "Yesterday",
            sender: "You",
            type: "text"
        }
    ]);

    const handleSend = () => {
        if (!message.trim()) return;
        setMessages(prev => [{
            id: Date.now(),
            text: message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            date: "Today",
            sender: "You",
            type: "text"
        }, ...prev]);
        setMessage('');
    };

    return (
        <div className="max-w-5xl mx-auto h-[calc(100vh-8rem)] flex bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">

            {/* Sidebar List */}
            <div className="w-80 border-r border-slate-200 flex flex-col bg-slate-50">
                <div className="p-4 border-b border-slate-200 bg-slate-50 sticky top-0 z-10">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-slate-800 text-lg">Announcements</h2>
                        <button className="p-2 hover:bg-slate-200 rounded-full transition-colors"><MoreVertical className="w-5 h-5 text-slate-500" /></button>
                    </div>
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                        <input type="text" placeholder="Search..." className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {['Advanced Algorithms', 'Software Engineering', 'Computer Networks'].map((cls, i) => (
                        <div key={i} className={`p-4 border-b border-slate-100 hover:bg-white cursor-pointer transition-colors ${i === 0 ? 'bg-white border-l-4 border-l-blue-500' : ''}`}>
                            <div className="flex justify-between mb-1">
                                <h4 className="font-bold text-slate-800 text-sm truncate">{cls}</h4>
                                <span className="text-[10px] text-slate-400">10:30 AM</span>
                            </div>
                            <p className="text-xs text-slate-500 truncate">You: Mid-semester exams will start...</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-[#e5ddd5] relative">
                {/* Chat Header */}
                <div className="p-4 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">AA</div>
                        <div>
                            <h3 className="font-bold text-slate-800">Advanced Algorithms (CS-402)</h3>
                            <p className="text-xs text-slate-500">64 Students</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-500"><Search className="w-5 h-5" /></button>
                        <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-500"><MoreVertical className="w-5 h-5" /></button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-slate-100/50" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    {messages.slice().reverse().map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[70%] p-3 rounded-2xl shadow-sm relative ${msg.sender === 'You' ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                                {msg.type === 'file' ? (
                                    <div className="flex items-center gap-3 p-2 bg-white/50 rounded-xl mb-1 border border-slate-100">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-500 font-bold text-xs uppercase">PDF</div>
                                        <span className="text-sm font-medium underline text-slate-800">{msg.text}</span>
                                    </div>
                                ) : (
                                    <p className="text-sm text-slate-800 leading-relaxed mb-1">{msg.text}</p>
                                )}
                                <div className="flex justify-end items-center gap-1 opacity-60">
                                    <span className="text-[10px] text-slate-500">{msg.time}</span>
                                    {msg.sender === 'You' && <CheckCheck className="w-3 h-3 text-blue-500" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-3 z-10">
                    <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"><ImageIcon className="w-6 h-6" /></button>
                    <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"><Paperclip className="w-6 h-6" /></button>

                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type an announcement..."
                            className="w-full bg-slate-100 border-none rounded-2xl pl-5 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    {message.trim() ? (
                        <button onClick={handleSend} className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-lg shadow-blue-200 transform hover:scale-105 active:scale-95">
                            <Send className="w-5 h-5 pl-0.5" />
                        </button>
                    ) : (
                        <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-lg shadow-blue-200">
                            <Mic className="w-5 h-5" />
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default AnnouncementsPage;
