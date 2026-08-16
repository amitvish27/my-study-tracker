import React, { useState, useEffect } from 'react';
import { 
    Calendar, 
    CheckSquare, 
    Download, 
    Upload, 
    Code2, 
    Layers, 
    BookOpen, 
    Cpu, 
    Menu, 
    X, 
    Sun, 
    Moon 
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar({ activeTab, setActiveTab, onExport, onImport }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const { theme, toggleTheme, isDark } = useTheme();

    const tabs = [
        { id: 'roadmap', label: 'Roadmap Checklist', icon: CheckSquare, count: '10 Wks' },
        { id: 'patterns', label: '50 DSA Patterns', icon: Layers, count: '50' },
        { id: 'dsa-handbook', label: 'DSA Handbook', icon: BookOpen, count: '10 Ch' },
        { id: 'system-design', label: 'System Design', icon: Cpu, count: '50 Qs' },
        { id: 'calendar', label: 'Calendar', icon: Calendar },
    ];

    // Close mobile menu on ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setMobileMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setMobileMenuOpen(false);
    };

    const handleThemeToggle = () => {
        setIsAnimating(true);
        toggleTheme();
        setTimeout(() => setIsAnimating(false), 800);
    };

    return (
        <>
            <nav className="bg-white/95 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 sticky top-0 z-50 transition-colors duration-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 gap-3">
                        {/* Brand / Logo */}
                        <div 
                            onClick={() => handleTabClick('roadmap')}
                            className="flex items-center space-x-2.5 group cursor-pointer flex-shrink-0 select-none"
                        >
                            <div className="bg-emerald-500/10 dark:bg-emerald-500/20 p-2 rounded-xl text-emerald-600 dark:text-emerald-400 shadow-md shadow-emerald-500/10 border border-emerald-500/30 group-hover:scale-105 transition-all duration-300">
                                <Code2 className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-black text-base tracking-tight text-slate-900 dark:text-white">
                                    Mastery Tracker
                                </span>
                                <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400/90 font-bold uppercase tracking-wider hidden sm:inline">
                                    FAANG & Staff Engineering
                                </span>
                            </div>
                        </div>

                        {/* Desktop Navigation Tabs (Hidden on mobile) */}
                        <div className="hidden lg:flex bg-slate-100 dark:bg-slate-900/80 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner">
                            {tabs.map(tab => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabClick(tab.id)}
                                        className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                                            isActive
                                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25 scale-[1.02]'
                                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
                                        }`}
                                    >
                                        <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-slate-950' : 'text-slate-500 dark:text-slate-400'}`} />
                                        <span>{tab.label}</span>
                                        {tab.count && (
                                            <span className={`text-[9px] px-1.5 py-0.2 rounded-md font-mono ${
                                                isActive 
                                                    ? 'bg-slate-950/20 text-slate-950 font-black' 
                                                    : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                                            }`}>
                                                {tab.count}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Controls: Tube-Light / Sunrise-Sunset Switch & Backups */}
                        <div className="flex items-center space-x-2">
                            {/* Sunrise / Sunset Tube-Light Switch */}
                            <button
                                onClick={handleThemeToggle}
                                title={isDark ? "Sunrise: Turn on Light Tube (Light Mode)" : "Sunset: Power down into Night (Dark Mode)"}
                                aria-label="Toggle light and dark mode with sunrise/sunset tube light transition"
                                className={`relative p-1 rounded-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 transition-all duration-500 overflow-hidden shadow-inner group ${
                                    isAnimating 
                                        ? isDark 
                                            ? 'sunset-down' 
                                            : 'tube-light-on' 
                                        : isDark 
                                            ? 'hover:border-indigo-500/50 hover:shadow-[0_0_12px_rgba(99,102,241,0.25)]' 
                                            : 'hover:border-amber-400/60 hover:shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                                }`}
                            >
                                <div className="flex items-center space-x-1.5 px-1 py-0.5">
                                    {/* Sun (Sunrise / Tube-Light Light Mode) */}
                                    <div className={`p-1.5 rounded-full transition-all duration-500 flex items-center justify-center ${
                                        !isDark 
                                            ? 'bg-amber-400 text-slate-950 shadow-[0_0_14px_rgba(251,191,36,0.8)] scale-110 rotate-0' 
                                            : 'text-slate-400 scale-90 -rotate-90 opacity-60'
                                    }`}>
                                        <Sun className={`w-3.5 h-3.5 transition-transform duration-700 ${!isDark ? 'animate-spin-slow' : ''}`} />
                                    </div>

                                    {/* Moon (Sunset / Twilight Dark Mode) */}
                                    <div className={`p-1.5 rounded-full transition-all duration-500 flex items-center justify-center ${
                                        isDark 
                                            ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[0_0_14px_rgba(99,102,241,0.7)] scale-110 rotate-0' 
                                            : 'text-slate-400 scale-90 rotate-90 opacity-60'
                                    }`}>
                                        <Moon className="w-3.5 h-3.5 transition-transform duration-700" />
                                    </div>
                                </div>
                            </button>

                            {/* Export / Import buttons (Desktop) */}
                            <div className="hidden sm:flex items-center space-x-1.5">
                                <button
                                    onClick={onExport}
                                    title="Backup Progress (Download JSON)"
                                    className="p-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                                >
                                    <Download className="w-4 h-4" />
                                </button>
                                <label
                                    title="Restore Progress Backup"
                                    className="p-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
                                >
                                    <Upload className="w-4 h-4" />
                                    <input type="file" accept=".json" onChange={onImport} className="hidden" />
                                </label>
                            </div>

                            {/* Mobile Hamburger Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                                aria-label="Toggle navigation menu"
                            >
                                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Full Overlay Drawer */}
            {mobileMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 z-[99999] bg-black/75 backdrop-blur-md animate-fade-in flex flex-col justify-start pt-16"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <div 
                        className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl p-5 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex items-center space-x-2">
                                <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Navigation Menu
                                </span>
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Navigation Items List */}
                        <div className="space-y-2">
                            {tabs.map(tab => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabClick(tab.id)}
                                        className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                                            isActive
                                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold shadow-md border-emerald-400'
                                                : 'bg-slate-50 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-emerald-600 dark:text-emerald-400'}`} />
                                            <span>{tab.label}</span>
                                        </div>
                                        {tab.count && (
                                            <span className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${
                                                isActive 
                                                    ? 'bg-slate-950/20 text-slate-950 font-black' 
                                                    : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                                            }`}>
                                                {tab.count}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Mobile Controls: Tube-Light Theme Switch & Backup actions */}
                        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                            <button
                                onClick={handleThemeToggle}
                                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300"
                            >
                                <span className="flex items-center space-x-2">
                                    <span>Atmosphere</span>
                                </span>
                                <div className="flex items-center space-x-2 font-mono">
                                    {isDark ? (
                                        <span className="flex items-center space-x-1.5 text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-500/30">
                                            <Moon className="w-3.5 h-3.5" />
                                            <span>Nightfall (Dark)</span>
                                        </span>
                                    ) : (
                                        <span className="flex items-center space-x-1.5 text-amber-700 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300">
                                            <Sun className="w-3.5 h-3.5 text-amber-600" />
                                            <span>Sunrise (Light)</span>
                                        </span>
                                    )}
                                </div>
                            </button>

                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => {
                                        onExport();
                                        setMobileMenuOpen(false);
                                    }}
                                    className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                    <Download className="w-4 h-4 text-emerald-500" />
                                    <span>Backup JSON</span>
                                </button>
                                <label className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                                    <Upload className="w-4 h-4 text-emerald-500" />
                                    <span>Restore JSON</span>
                                    <input 
                                        type="file" 
                                        accept=".json" 
                                        onChange={(e) => {
                                            onImport(e);
                                            setMobileMenuOpen(false);
                                        }} 
                                        className="hidden" 
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}