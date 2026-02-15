import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, CheckCircle2, Shield, BarChart3, Radio, MessageCircle, BookOpen, Users } from 'lucide-react';

const LandingPage = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogin = () => {
        navigate('/dashboard/class/65c2a1f9e2b4d32a1c8f1234');
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation hook for numbers and elements
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">

            {/* Navbar */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-extrabold">E</div>
                        EduDash
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Features', 'Modules', 'Testimonials', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                                {item}
                            </a>
                        ))}
                        <button onClick={handleLogin} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 hover:shadow-blue-600/30">
                            Login Platform
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-6`}>
                <div className="flex flex-col gap-6 text-lg font-medium">
                    {['Features', 'Modules', 'Testimonials', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-slate-700">
                            {item}
                        </a>
                    ))}
                    <button onClick={handleLogin} className="bg-blue-600 text-white py-3 rounded-xl font-bold mt-4">
                        Login Platform
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Shapes */}
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                    <div className="text-center lg:text-left reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            The Smartest Way to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Manage Your Campus</span>
                        </h1>
                        <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Streamline attendance, track academic performance, and foster better communication with EduDash's intuitive platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button onClick={handleLogin} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1">
                                Get Started
                            </button>
                            <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-3.5 rounded-xl font-bold text-lg transition-all">
                                View Demo
                            </button>
                        </div>
                    </div>

                    {/* 3D Mockup */}
                    <div className="relative [perspective:2000px] reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out">
                        <div className="relative bg-white rounded-3xl shadow-2xl [transform:rotateY(-12deg)_rotateX(6deg)] hover:[transform:rotateY(-6deg)_rotateX(3deg)] transition-transform duration-500 border-4 border-slate-900/10 h-[400px] overflow-hidden flex [transform-style:preserve-3d]">
                            {/* Mockup Sidebar */}
                            <div className="w-48 bg-slate-900 p-4 flex flex-col hidden sm:flex">
                                <div className="flex items-center gap-2 mb-8 text-white font-bold text-xl">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">E</div>
                                    EduDash
                                </div>
                                <div className="space-y-1">
                                    {['Dashboard', 'Students', 'Grades', 'Announce'].map((item, i) => (
                                        <div key={item} className={`flex items-center gap-3 p-2 rounded-lg text-sm font-medium ${i === 1 ? 'bg-white/10 text-white' : 'text-slate-400'}`}>
                                            <div className="w-4 h-4 border-2 border-current rounded opacity-50"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto bg-slate-800 p-3 rounded-xl flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
                                    <div>
                                        <div className="text-xs font-bold text-white">Dr. Sarah</div>
                                        <div className="text-[10px] text-slate-400">HOD Comp Sci</div>
                                    </div>
                                </div>
                            </div>

                            {/* Mockup Content */}
                            <div className="flex-1 bg-white p-6 flex flex-col gap-4 overflow-hidden">
                                <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                                    <span>Class Select &gt; Advanced Algorithms</span>
                                    <div className="w-4 h-4 border-2 border-slate-300 rounded-full"></div>
                                </div>

                                <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-slate-800">CS-402: Advanced Algorithms</h3>
                                        <div className="flex gap-4 text-xs text-slate-500 mt-1">
                                            <span>64 Students</span>
                                            <span>Room 302, Block B</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-24 h-8 bg-blue-600 rounded-lg"></div>
                                        <div className="w-24 h-8 border border-slate-200 rounded-lg"></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4">
                                        <div className="text-xs text-slate-500 mb-1">Total Students</div>
                                        <div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                            64 <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full">Active</span>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4">
                                        <div className="text-xs text-slate-500 mb-1">Avg. Attendance</div>
                                        <div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                            92% <div className="w-12 h-1.5 bg-blue-600 rounded-full ml-auto"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 flex-1">
                                    <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 relative overflow-hidden">
                                        <div className="text-xs font-bold text-slate-800 mb-2">Attendance</div>
                                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
                                    </div>
                                    <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4">
                                        <div className="text-xs font-bold text-slate-800 mb-2">Academic</div>
                                        <div className="space-y-2">
                                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="w-3/4 h-full bg-indigo-500"></div></div>
                                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="w-5/6 h-full bg-emerald-500"></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Powerful Features</h2>
                        <p className="text-lg text-slate-500">Everything you need to manage your campus efficiently, wrapped in a beautiful interface.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: CheckCircle2, title: 'Smart Attendance', desc: 'Automated tracking with biometric integration and instant absentee alerts.' },
                            { icon: Shield, title: 'Behavior Alerts', desc: 'Real-time notifications for student disciplinary actions and merits.' },
                            { icon: BarChart3, title: 'Performance Analytics', desc: 'Visualize academic trends across subjects and semesters.' },
                            { icon: Radio, title: 'Broadcast System', desc: 'Send instant, trackable announcements to students and faculty.' },
                            { icon: MessageCircle, title: 'Doubt Resolution', desc: 'Dedicated Q&A panels for students to ask questions instantly.' },
                            { icon: BookOpen, title: 'Professor Insights', desc: 'Tools for teachers to track syllabus completion and engagement.' },
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 reveal-on-scroll opacity-0 translate-y-8">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12 text-center">
                    {[
                        { label: 'Institutions', val: '150+' },
                        { label: 'Students Tracked', val: '25k+' },
                        { label: 'Accuracy', val: '99%' },
                        { label: 'Uptime', val: '100%' },
                    ].map((stat, i) => (
                        <div key={i} className="flex-1 min-w-[150px]">
                            <div className="text-5xl font-extrabold mb-2">{stat.val}</div>
                            <div className="text-slate-400 font-medium tracking-wider uppercase text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modules */}
            <section id="modules" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Modules</h2>
                        <p className="text-slate-500">Tailored interfaces for every user role.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Student', 'Professor', 'Admin', 'Parent'].map((role, i) => (
                            <div key={role} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all h-80 flex flex-col justify-end relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                <div className="w-12 h-12 bg-slate-50 rounded-xl mb-auto flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{role}</h3>
                                <p className="text-slate-500 text-sm">Dedicated dashboard and tools tailored for {role.toLowerCase()}s.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Ready to modernize your campus?</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Join over 150 institutions enhancing education through technology.</p>
                    <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95">
                        Schedule a Demo
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">E</div>
                                EduDash
                            </div>
                            <p className="text-sm text-slate-500">Advanced class management for the future of education.</p>
                        </div>
                        {[
                            { title: 'Product', links: ['Features', 'Pricing', 'Integrations'] },
                            { title: 'Company', links: ['About Us', 'Careers', 'Contact'] },
                            { title: 'Social', links: ['Twitter', 'LinkedIn', 'Instagram'] },
                        ].map((col) => (
                            <div key={col.title}>
                                <h4 className="text-white font-bold mb-4">{col.title}</h4>
                                <ul className="space-y-2 text-sm">
                                    {col.links.map(link => (
                                        <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                        &copy; 2026 EduDash Systems. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
