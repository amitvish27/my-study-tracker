import React from 'react';
import { Calendar, CheckSquare, Download, Upload, Code2, Layers, BookOpen, Cpu } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onExport, onImport }) {
    const tabs = [
        { id: 'roadmap', label: 'Checklist', icon: CheckSquare },
        { id: 'patterns', label: '50 Patterns', icon: Layers },
        { id: 'dsa-handbook', label: 'DSA Handbook', icon: BookOpen },
        { id: 'system-design', label: 'System Design', icon: Cpu },
        { id: 'calendar', label: 'Calendar', icon: Calendar },
    ];

    return (
        <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 gap-2">
                    {/* Logo */}
                    <div 
                        onClick={() => setActiveTab('roadmap')}
                        className="flex items-center space-x-3 group cursor-pointer flex-shrink-0"
                    >
                        <div className="bg-emerald-500/10 p-2 rounded-xl text-emerald-400 shadow-lg shadow-emerald-500/5 border border-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <span className="font-display font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 hidden sm:inline">
                            Mastery Tracker
                        </span>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex bg-slate-900/60 p-1 rounded-xl border border-slate-800/80 shadow-inner overflow-x-auto max-w-full">
                        {tabs.map(tab => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                                        isActive
                                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20 scale-[1.02]'
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                                    }`}
                                >
                                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Import / Export Controls */}
                    <div className="flex items-center space-x-2 flex-shrink-0">
                        <button
                            onClick={onExport}
                            title="Backup All Progress & Notes"
                            className="p-2 text-slate-400 hover:text-emerald-400 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-850 hover:border-emerald-500/20 rounded-xl transition-all duration-300 hover:scale-105"
                        >
                            <Download className="w-4 h-4" />
                        </button>
                        <label
                            title="Restore Progress Backup"
                            className="p-2 text-slate-400 hover:text-emerald-400 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-850 hover:border-emerald-500/20 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
                        >
                            <Upload className="w-4 h-4" />
                            <input type="file" accept=".json" onChange={onImport} className="hidden" />
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}