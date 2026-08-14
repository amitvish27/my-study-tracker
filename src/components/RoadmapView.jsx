import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ExternalLink, Video, Code, FileText, Layers, Search, Check } from 'lucide-react';

export default function RoadmapView({ roadmap, completedMap, toggleTask }) {
    const [expandedWeeks, setExpandedWeeks] = useState({ 1: true, 2: true });
    const [copiedTaskId, setCopiedTaskId] = useState(null);

    const toggleWeek = (weekNum) => {
        setExpandedWeeks(prev => ({ ...prev, [weekNum]: !prev[weekNum] }));
    };

    const getTaskUrl = (task) => {
        if (task.type === 'video') {
            if (task.link && task.link.includes('results?search_query=')) {
                return task.link;
            }
            return `https://www.youtube.com/results?search_query=${encodeURIComponent(task.label)}`;
        }
        return task.link;
    };

    const handleTaskLinkClick = (task) => {
        if (task.type === 'video') {
            try {
                navigator.clipboard.writeText(task.label);
                setCopiedTaskId(task.id);
                setTimeout(() => setCopiedTaskId(null), 2000);
            } catch (err) {
                console.error("Failed to copy to clipboard", err);
            }
        }
    };

    const getTaskIcon = (type) => {
        switch (type) {
            case 'video': return <Video className="w-4 h-4 text-purple-400" />;
            case 'code': return <Code className="w-4 h-4 text-emerald-400" />;
            case 'lld': return <Layers className="w-4 h-4 text-amber-400" />;
            case 'hld': return <FileText className="w-4 h-4 text-sky-400" />;
            default: return <FileText className="w-4 h-4 text-slate-400" />;
        }
    };

    const getTaskBadge = (type) => {
        const base = "text-[9px] font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wider border ";
        switch (type) {
            case 'video':
                return <span className={base + "bg-purple-500/10 text-purple-400 border-purple-500/15"}>Video</span>;
            case 'code':
                return <span className={base + "bg-emerald-500/10 text-emerald-400 border-emerald-500/15"}>Code</span>;
            case 'lld':
                return <span className={base + "bg-amber-500/10 text-amber-400 border-amber-500/15"}>LLD</span>;
            case 'hld':
                return <span className={base + "bg-sky-500/10 text-sky-400 border-sky-500/15"}>HLD</span>;
            default:
                return <span className={base + "bg-slate-500/10 text-slate-400 border-slate-500/15"}>Doc</span>;
        }
    };

    return (
        <div className="space-y-8 animate-fade-in">
            {roadmap.map((phase) => {
                // Compute progress statistics for this specific phase
                const phaseCompleted = phase.weeks.reduce((acc, w) => acc + w.tasks.filter(t => completedMap[t.id]).length, 0);
                const phaseTotal = phase.weeks.reduce((acc, w) => acc + w.tasks.length, 0);

                return (
                    <div key={phase.phaseId} className="glass-card rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80">
                        {/* Phase Header */}
                        <div className="px-6 py-4 bg-slate-950/40 border-b border-slate-850/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h2 className="font-display text-base font-bold text-white tracking-wide">{phase.title}</h2>
                            <span className="self-start text-[10px] bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800 text-slate-400 font-bold tracking-wide">
                                {phaseCompleted} / {phaseTotal} Tasks Done
                            </span>
                        </div>

                        {/* Weeks list */}
                        <div className="divide-y divide-slate-800/40">
                            {phase.weeks.map((week) => {
                                const isOpen = !!expandedWeeks[week.weekNum];
                                const weekCompletedCount = week.tasks.filter(t => completedMap[t.id]).length;
                                const weekTotal = week.tasks.length;
                                const isWeekDone = weekCompletedCount === weekTotal;

                                return (
                                    <div key={week.weekNum} className="transition-all duration-300">
                                        {/* Week header toggle button */}
                                        <button
                                            onClick={() => toggleWeek(week.weekNum)}
                                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/10 text-left transition duration-300 group"
                                        >
                                            <div className="flex items-center space-x-3 min-w-0 mr-4">
                                                <div className="text-slate-500 group-hover:text-slate-300 transition-colors">
                                                    {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 min-w-0">
                                                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 tracking-wider uppercase self-start sm:self-auto">
                                                        Week {week.weekNum}
                                                    </span>
                                                    <span className="font-semibold text-slate-200 group-hover:text-white transition-colors duration-250 text-sm truncate">
                                                        {week.title}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <span className={`text-xs px-3 py-1 rounded-full font-bold transition-all border ${
                                                    isWeekDone 
                                                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.05)]' 
                                                        : 'bg-slate-900/60 text-slate-400 border-slate-800'
                                                }`}>
                                                    {weekCompletedCount} / {weekTotal} Completed
                                                </span>
                                            </div>
                                        </button>

                                        {/* Week Tasks checklist */}
                                        {isOpen && (
                                            <div className="px-6 pb-5 pt-2 space-y-2.5 bg-slate-950/20">
                                                {week.tasks.map((task) => {
                                                    const isChecked = !!completedMap[task.id];
                                                    const resolvedLink = getTaskUrl(task);
                                                    const isVideo = task.type === 'video';
                                                    const isCopied = copiedTaskId === task.id;

                                                    return (
                                                        <div
                                                            key={task.id}
                                                            className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 ${
                                                                isChecked
                                                                    ? 'bg-emerald-950/5 border-emerald-500/15 text-slate-400 shadow-sm'
                                                                    : 'bg-slate-900/40 border-slate-800/80 text-slate-200 hover:border-slate-700/80 hover:bg-slate-900/60'
                                                            }`}
                                                        >
                                                            {/* Label wrapping custom-checkbox + info */}
                                                            <label className="flex items-center cursor-pointer flex-1 min-w-0 select-none">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={isChecked}
                                                                    onChange={() => toggleTask(task.id)}
                                                                    className="sr-only"
                                                                />
                                                                <div className={`custom-checkbox ${isChecked ? 'checked' : ''} mr-3.5 flex-shrink-0`}>
                                                                    <svg className="custom-checkbox-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                                        <polyline points="20 6 9 17 4 12" />
                                                                    </svg>
                                                                </div>
                                                                <div className="flex items-center space-x-3 min-w-0 flex-1">
                                                                    <div className="p-1.5 rounded-lg bg-slate-950/60 border border-slate-850">
                                                                        {getTaskIcon(task.type)}
                                                                    </div>
                                                                    <span className={`text-sm font-medium truncate pr-2 ${isChecked ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                                                                        {task.label}
                                                                    </span>
                                                                    <div className="flex-shrink-0 hidden sm:inline-block">
                                                                        {getTaskBadge(task.type)}
                                                                    </div>
                                                                </div>
                                                            </label>

                                                            {/* Action link */}
                                                            {resolvedLink && (
                                                                <a
                                                                    href={resolvedLink}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    onClick={() => handleTaskLinkClick(task)}
                                                                    title={isVideo ? `Open YouTube search for "${task.label}" (copies title to clipboard)` : `Open link`}
                                                                    className={`text-xs px-3 py-1.5 rounded-lg border flex items-center space-x-1.5 ml-4 transition-all duration-300 font-semibold flex-shrink-0 ${
                                                                        isVideo
                                                                            ? isCopied
                                                                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                                                                                : 'bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 hover:text-purple-100 border-purple-800/60 hover:border-purple-600/60 shadow-sm'
                                                                            : 'bg-slate-900/60 hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 border-slate-800 hover:border-emerald-500/20'
                                                                    }`}
                                                                >
                                                                    {isVideo ? (
                                                                        isCopied ? (
                                                                            <>
                                                                                <Check className="w-3 h-3 text-emerald-400" />
                                                                                <span>Copied!</span>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <Search className="w-3 h-3 text-purple-400" />
                                                                                <span>Search YT</span>
                                                                            </>
                                                                        )
                                                                    ) : (
                                                                        <>
                                                                            <span>Open</span>
                                                                            <ExternalLink className="w-3 h-3" />
                                                                        </>
                                                                    )}
                                                                </a>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}