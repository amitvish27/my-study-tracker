import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function CalendarView({ completedMap }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    // Count completions per date YYYY-MM-DD
    const completionsPerDate = {};
    Object.values(completedMap).forEach(dateStr => {
        completionsPerDate[dateStr] = (completionsPerDate[dateStr] || 0) + 1;
    });

    const todayStr = new Date().toISOString().split('T')[0];

    return (
        <div className="glass-card border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-xl animate-fade-in">
            {/* Calendar Header Controls */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-display font-bold text-slate-900 dark:text-white tracking-wide">
                    {monthNames[month]} {year}
                </h2>
                <div className="flex space-x-2">
                    <button
                        onClick={prevMonth}
                        className="p-2 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-850 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={nextMonth}
                        className="p-2 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-850 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Grid Header Days */}
            <div className="grid grid-cols-7 gap-2.5 mb-3 text-center text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
            </div>

            {/* Grid Days */}
            <div className="grid grid-cols-7 gap-2.5">
                {/* Padding for month start day */}
                {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-20 bg-slate-100/40 dark:bg-slate-950/10 rounded-xl border border-transparent" />
                ))}

                {/* Days of Month */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const dayNum = i + 1;
                    const monthStr = String(month + 1).padStart(2, '0');
                    const dayStr = String(dayNum).padStart(2, '0');
                    const dateKey = `${year}-${monthStr}-${dayStr}`;

                    const completionCount = completionsPerDate[dateKey] || 0;
                    const isToday = dateKey === todayStr;

                    // Compute dynamic classes based on today state & completion intensity
                    let cellClass = 'bg-white dark:bg-slate-900/30 border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-750/80 text-slate-700 dark:text-slate-400';
                    let badgeClass = '';
                    
                    if (isToday) {
                        cellClass = 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-md text-emerald-700 dark:text-emerald-400 font-bold';
                    } else if (completionCount > 0) {
                        if (completionCount === 1) {
                            cellClass = 'bg-emerald-50/60 dark:bg-emerald-950/15 border-emerald-300 dark:border-emerald-900/30 text-emerald-800 dark:text-emerald-400';
                            badgeClass = 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/20';
                        } else if (completionCount === 2) {
                            cellClass = 'bg-emerald-100/60 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-300';
                            badgeClass = 'bg-emerald-200/80 dark:bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 border border-emerald-400 dark:border-emerald-500/25';
                        } else {
                            cellClass = 'bg-emerald-200/60 dark:bg-emerald-900/15 border-emerald-500 dark:border-emerald-500/30 text-emerald-950 dark:text-white';
                            badgeClass = 'bg-emerald-500 text-slate-950 font-bold';
                        }
                    }

                    return (
                        <div
                            key={dayNum}
                            className={`h-20 p-3 rounded-xl border flex flex-col justify-between transition-all duration-200 group ${cellClass}`}
                        >
                            <span className="text-xs font-bold leading-none">
                                {dayNum}
                            </span>

                            {completionCount > 0 && (
                                <div className={`flex items-center space-x-1 px-1.5 py-0.5 rounded-md text-[9px] font-semibold self-start tracking-wide ${badgeClass}`}>
                                    <Check className="w-2.5 h-2.5 flex-shrink-0 stroke-[3]" />
                                    <span>{completionCount} done</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}