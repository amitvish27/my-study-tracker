import React from 'react';
import { Trophy, Layers, Cpu, Flame, ArrowUpRight } from 'lucide-react';

export default function StatsOverview({ stats, onNavigateTab }) {
    // Calculate overall interview readiness index
    const totalWeighted = (stats.totalTasks || 1) + (stats.totalPatterns || 1) + (stats.totalSdQuestions || 1);
    const completedWeighted = (stats.completedCount || 0) + (stats.masteredPatternsCount || 0) + (stats.masteredSdCount || 0);
    const readinessIndex = Math.round((completedWeighted / totalWeighted) * 100);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Card 1: Checklist Progress */}
            <div 
                onClick={() => onNavigateTab && onNavigateTab('roadmap')}
                className="glass-card glass-card-hover p-5 rounded-2xl flex items-center space-x-4 shadow-xl relative overflow-hidden group cursor-pointer border border-slate-200 dark:border-slate-800/80"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500 pointer-events-none" />
                <div className="p-3 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-500/30 shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform">
                    <Trophy className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">Roadmap Tasks</p>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <div className="flex items-baseline space-x-2 mt-0.5">
                        <span className="text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {stats.progressPercentage}%
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            {stats.completedCount}/{stats.totalTasks}
                        </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-950/90 h-1.5 rounded-full mt-2 overflow-hidden border border-slate-300 dark:border-slate-850 shadow-inner">
                        <div
                            className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 h-full rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                            style={{ width: `${stats.progressPercentage}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Card 2: 50 Patterns Mastered */}
            <div 
                onClick={() => onNavigateTab && onNavigateTab('patterns')}
                className="glass-card glass-card-hover p-5 rounded-2xl flex items-center space-x-4 shadow-xl relative overflow-hidden group cursor-pointer border border-slate-200 dark:border-slate-800/80"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all duration-500 pointer-events-none" />
                <div className="p-3 bg-teal-500/15 text-teal-600 dark:text-teal-300 rounded-xl border border-teal-500/30 shadow-md shadow-teal-500/10 group-hover:scale-105 transition-transform">
                    <Layers className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">50 Coding Patterns</p>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-500 transition-colors" />
                    </div>
                    <div className="flex items-baseline space-x-2 mt-0.5">
                        <span className="text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {stats.masteredPatternsCount}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            of {stats.totalPatterns} Mastered
                        </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-950/90 h-1.5 rounded-full mt-2 overflow-hidden border border-slate-300 dark:border-slate-850 shadow-inner">
                        <div
                            className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(20,184,166,0.5)]"
                            style={{ width: `${Math.round((stats.masteredPatternsCount / (stats.totalPatterns || 1)) * 100)}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Card 3: System Design 50 Q&As */}
            <div 
                onClick={() => onNavigateTab && onNavigateTab('system-design')}
                className="glass-card glass-card-hover p-5 rounded-2xl flex items-center space-x-4 shadow-xl relative overflow-hidden group cursor-pointer border border-slate-200 dark:border-slate-800/80"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500 pointer-events-none" />
                <div className="p-3 bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 rounded-xl border border-indigo-500/30 shadow-md shadow-indigo-500/10 group-hover:scale-105 transition-transform">
                    <Cpu className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">System Design Q&A</p>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <div className="flex items-baseline space-x-2 mt-0.5">
                        <span className="text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {stats.masteredSdCount}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            of {stats.totalSdQuestions} Prepared
                        </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-950/90 h-1.5 rounded-full mt-2 overflow-hidden border border-slate-300 dark:border-slate-850 shadow-inner">
                        <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-400 h-full rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                            style={{ width: `${Math.round((stats.masteredSdCount / (stats.totalSdQuestions || 1)) * 100)}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Card 4: Interview Readiness Index */}
            <div className="glass-card glass-card-hover p-5 rounded-2xl flex items-center space-x-4 shadow-xl relative overflow-hidden group border border-slate-200 dark:border-slate-800/80">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none" />
                <div className="p-3 bg-amber-500/15 text-amber-600 dark:text-amber-400 rounded-xl border border-amber-500/30 shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform">
                    <Flame className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">FAANG Readiness</p>
                        <div className="flex items-center space-x-1">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-2 mt-0.5">
                        <span className="text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {readinessIndex}%
                        </span>
                        <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
                            {readinessIndex > 80 ? 'Interview Ready 🔥' : readinessIndex > 40 ? 'On Track 🚀' : 'Starting Out 🌱'}
                        </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-950/90 h-1.5 rounded-full mt-2 overflow-hidden border border-slate-300 dark:border-slate-850 shadow-inner">
                        <div
                            className="bg-gradient-to-r from-amber-500 to-rose-400 h-full rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                            style={{ width: `${readinessIndex}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}