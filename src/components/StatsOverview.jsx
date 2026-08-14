import React from 'react';
import { Trophy, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function StatsOverview({ stats, onNavigateTab }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Card 1: Checklist Progress */}
            <div className="glass-card glass-card-hover p-5 rounded-2xl flex items-center space-x-4 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500 pointer-events-none" />
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 shadow-md shadow-emerald-500/5">
                    <Trophy className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Roadmap Progress</p>
                    <div className="flex items-baseline space-x-2 mt-0.5">
                        <span className="text-2xl font-display font-extrabold text-white tracking-tight">
                            {stats.progressPercentage}%
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium truncate">
                            ({stats.completedCount}/{stats.totalTasks})
                        </span>
                    </div>
                    <div className="w-full bg-slate-950/80 h-1.5 rounded-full mt-2 overflow-hidden border border-slate-900 shadow-inner">
                        <div
                            className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 h-full rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                            style={{ width: `${stats.progressPercentage}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Card 2: 50 Patterns Mastered */}
            <div 
                onClick={() => onNavigateTab && onNavigateTab('patterns')}
                className="glass-card glass-card-hover p-5 rounded-2xl flex items-center space-x-4 shadow-2xl relative overflow-hidden group cursor-pointer"
            >
                <div className="absolute top-0 right-0 w-28 h-28 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-colors duration-500 pointer-events-none" />
                <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl border border-teal-500/20 shadow-md shadow-teal-500/5">
                    <Layers className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">50 Coding Patterns</p>
                    <div className="flex items-baseline space-x-2 mt-0.5">
                        <span className="text-2xl font-display font-extrabold text-white tracking-tight">
                            {stats.masteredPatternsCount}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium truncate">
                            of {stats.totalPatterns} Mastered
                        </span>
                    </div>
                    <p className="text-[10px] text-teal-400/80 font-semibold mt-1 flex items-center space-x-1">
                        <span>Browse Shapes</span>
                        <span>→</span>
                    </p>
                </div>
            </div>

            {/* Card 3: System Design 50 Q&As */}
            <div 
                onClick={() => onNavigateTab && onNavigateTab('system-design')}
                className="glass-card glass-card-hover p-5 rounded-2xl flex items-center space-x-4 shadow-2xl relative overflow-hidden group cursor-pointer"
            >
                <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500 pointer-events-none" />
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 shadow-md shadow-indigo-500/5">
                    <Cpu className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">System Design</p>
                    <div className="flex items-baseline space-x-2 mt-0.5">
                        <span className="text-2xl font-display font-extrabold text-white tracking-tight">
                            {stats.masteredSdCount}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium truncate">
                            of {stats.totalSdQuestions} Reviewed
                        </span>
                    </div>
                    <p className="text-[10px] text-indigo-400/80 font-semibold mt-1 flex items-center space-x-1">
                        <span>Interview Playbook</span>
                        <span>→</span>
                    </p>
                </div>
            </div>

            {/* Card 4: Storage & Sync Status */}
            <div className="glass-card glass-card-hover p-5 rounded-2xl flex items-center space-x-4 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500 pointer-events-none" />
                <div className="p-3 bg-slate-900 text-emerald-400 rounded-xl border border-slate-800 shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Storage & Sync</p>
                    <div className="flex items-center mt-0.5">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <p className="text-xs font-bold text-emerald-400">100% Offline Ready</p>
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium mt-1">Synced to LocalStorage</p>
                </div>
            </div>
        </div>
    );
}