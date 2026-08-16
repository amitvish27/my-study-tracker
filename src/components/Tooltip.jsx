import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Sparkles, Lightbulb, BookOpen, AlertCircle } from 'lucide-react';
import ConceptDiagram from './ConceptDiagram';

export default function Tooltip({ 
    children, 
    content, 
    analogy, 
    term, 
    staffSoundbite,
    interviewTrap,
    className = "" 
}) {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    const handleClose = (e) => {
        e?.stopPropagation();
        setIsOpen(false);
    };

    const handleToggle = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    // Close on escape key and lock body scroll
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <span
                onClick={handleToggle}
                className={`cursor-pointer inline-flex items-center select-none active:scale-95 transition-transform ${className}`}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
            >
                {children}
            </span>

            {isOpen && typeof document !== 'undefined' && createPortal(
                <div 
                    onClick={handleClose}
                    className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md transition-opacity duration-200"
                >
                    <div
                        ref={modalRef}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg rounded-2xl p-5 sm:p-7 text-left shadow-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-emerald-500/30 relative transform transition-all space-y-4 max-h-[90vh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg font-display font-extrabold text-slate-900 dark:text-white tracking-wide">
                                        {term || "ELI5 Breakdown"}
                                    </h4>
                                    <p className="text-[10px] uppercase font-mono tracking-wider text-emerald-700 dark:text-emerald-400 font-bold">
                                        Plain English • Visual Diagram • Intuition
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                                title="Close (Esc)"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Visual Infographic Diagram */}
                        <ConceptDiagram conceptKey={term} />

                        {/* Content Body */}
                        <div className="space-y-3.5 text-xs sm:text-sm">
                            {content && (
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                        <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> In Simple Terms:
                                    </span>
                                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-sans bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80">
                                        {content}
                                    </p>
                                </div>
                            )}
                            
                            {analogy && (
                                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/25 text-amber-900 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed space-y-1 shadow-sm">
                                    <span className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 text-xs">
                                        <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Real-World Analogy:
                                    </span>
                                    <p className="text-amber-950 dark:text-amber-100/90 leading-relaxed">
                                        {analogy}
                                    </p>
                                </div>
                            )}

                            {(staffSoundbite || interviewTrap) && (
                                <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-slate-900/90 border border-indigo-200 dark:border-indigo-500/30 space-y-2 text-xs">
                                    {staffSoundbite && (
                                        <div>
                                            <span className="text-[10px] font-mono font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-wider block">
                                                🎯 Staff Engineer Soundbite:
                                            </span>
                                            <p className="text-indigo-950 dark:text-slate-300 mt-0.5 leading-relaxed font-mono text-[11px]">
                                                "{staffSoundbite}"
                                            </p>
                                        </div>
                                    )}
                                    {interviewTrap && (
                                        <div className="pt-1.5 border-t border-indigo-200 dark:border-slate-800">
                                            <span className="text-[10px] font-mono font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3 text-rose-600 dark:text-rose-400" /> Common Candidate Trap:
                                            </span>
                                            <p className="text-rose-950 dark:text-rose-200/90 mt-0.5 leading-relaxed text-[11px]">
                                                {interviewTrap}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                            <span className="text-slate-400 font-mono text-[10px]">
                                Press <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300">Esc</kbd> to close
                            </span>
                            <button
                                onClick={handleClose}
                                className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-500/20 active:scale-95"
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
