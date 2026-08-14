import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
    PATTERN_CATEGORIES, 
    PATTERNS_LIST, 
    CONSTRAINT_GUIDE, 
    KEYWORD_DICTIONARY, 
    PATTERN_DECISION_TREE 
} from '../data/patternsData';
import { 
    Search, 
    Check, 
    ExternalLink, 
    Copy, 
    HelpCircle, 
    Zap, 
    Sliders, 
    X, 
    Layers, 
    AlertTriangle, 
    Sparkles, 
    Code2, 
    BookOpen 
} from 'lucide-react';

export default function PatternsView({ masteredPatterns, togglePatternMastery }) {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPattern, setSelectedPattern] = useState(null);
    const [subTab, setSubTab] = useState('patterns'); // 'patterns' | 'decision-tree' | 'constraints' | 'keywords'
    const [copied, setCopied] = useState(false);

    // Lock body scroll and allow ESC key to close modal
    useEffect(() => {
        if (!selectedPattern) return;
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedPattern(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedPattern]);

    // Filter patterns based on category and search query
    const filteredPatterns = PATTERNS_LIST.filter(p => {
        const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
        const matchesSearch = 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.classics.some(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getDifficultyBadge = (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
            case 'Medium':
                return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
            case 'Hard':
                return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
            default:
                return 'bg-slate-800 text-slate-300 border-slate-700';
        }
    };

    return (
        <div className="space-y-6 animate-fade-in pb-12">
            {/* Top Sub-Nav Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 glass-card p-4 rounded-2xl border border-slate-800/80 shadow-2xl">
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSubTab('patterns')}
                        className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            subTab === 'patterns'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                    >
                        <Layers className="w-4 h-4" />
                        <span>50 Patterns Catalog</span>
                    </button>
                    <button
                        onClick={() => setSubTab('decision-tree')}
                        className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            subTab === 'decision-tree'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                    >
                        <HelpCircle className="w-4 h-4" />
                        <span>How to Pick a Pattern</span>
                    </button>
                    <button
                        onClick={() => setSubTab('constraints')}
                        className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            subTab === 'constraints'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                    >
                        <Sliders className="w-4 h-4" />
                        <span>Constraints Guide</span>
                    </button>
                    <button
                        onClick={() => setSubTab('keywords')}
                        className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            subTab === 'keywords'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                    >
                        <Zap className="w-4 h-4" />
                        <span>Keyword Triggers</span>
                    </button>
                </div>

                <div className="flex items-center space-x-2">
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-xl font-bold">
                        {Object.keys(masteredPatterns || {}).length} / {PATTERNS_LIST.length} Patterns Mastered
                    </span>
                </div>
            </div>

            {/* SubTab 1: Patterns Catalog */}
            {subTab === 'patterns' && (
                <div className="space-y-6">
                    {/* Search & Categories Filter */}
                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by pattern name, description, or classic problem (e.g. 'Binary Search', 'Sliding Window', '3Sum')..."
                                className="w-full bg-slate-900/70 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors shadow-inner"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {PATTERN_CATEGORIES.map(cat => {
                                const count = cat.id === 'all' 
                                    ? PATTERNS_LIST.length 
                                    : PATTERNS_LIST.filter(p => p.category === cat.id).length;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 border ${
                                            activeCategory === cat.id
                                                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-sm'
                                                : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                                        }`}
                                    >
                                        {cat.label} ({count})
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Grid of Patterns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredPatterns.map(pattern => {
                            const isMastered = !!masteredPatterns[pattern.id];
                            return (
                                <div
                                    key={pattern.id}
                                    className={`glass-card glass-card-hover rounded-2xl p-5 border flex flex-col justify-between transition-all duration-300 relative group cursor-pointer ${
                                        isMastered
                                            ? 'border-emerald-500/30 bg-emerald-950/10 shadow-[0_0_15px_rgba(16,185,129,0.05)]'
                                            : 'border-slate-800/80 hover:border-slate-700'
                                    }`}
                                    onClick={() => setSelectedPattern(pattern)}
                                >
                                    <div>
                                        {/* Card Header */}
                                        <div className="flex items-start justify-between gap-3 mb-3">
                                            <div className="flex items-center space-x-2.5">
                                                <span className="text-[11px] font-mono font-bold bg-slate-900/90 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-lg">
                                                    #{pattern.id}
                                                </span>
                                                <span className="text-xs font-bold text-slate-400 capitalize">
                                                    {pattern.category.replace('-', ' ')}
                                                </span>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    togglePatternMastery(pattern.id);
                                                }}
                                                title={isMastered ? "Mastered" : "Mark as Mastered"}
                                                className={`p-1.5 rounded-lg border transition-all duration-300 ${
                                                    isMastered
                                                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                                                        : 'bg-slate-900/80 text-slate-500 border-slate-800 hover:text-slate-300'
                                                }`}
                                            >
                                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                            </button>
                                        </div>

                                        <h3 className="font-display font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                                            {pattern.name}
                                        </h3>
                                        <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                                            {pattern.summary}
                                        </p>
                                    </div>

                                    {/* Footer Classics count */}
                                    <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                                        <span className="text-slate-500 font-medium">
                                            {pattern.classics.length} Classic Problems
                                        </span>
                                        <span className="text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center space-x-1 font-semibold">
                                            <span>View Template</span>
                                            <span className="text-sm">→</span>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* SubTab 2: How to Pick a Pattern Decision Flow */}
            {subTab === 'decision-tree' && (
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl space-y-6">
                    <div>
                        <div className="flex items-center space-x-3">
                            <Sparkles className="w-6 h-6 text-emerald-400" />
                            <h2 className="text-xl font-display font-bold text-white">
                                How to Pick a Pattern in 30 Seconds
                            </h2>
                        </div>
                        <p className="text-sm text-slate-400 mt-1">
                            Follow this sequential decision hierarchy when looking at any interview problem statement.
                        </p>
                    </div>

                    <div className="divide-y divide-slate-800/60">
                        {PATTERN_DECISION_TREE.map((step, idx) => (
                            <div key={idx} className="py-4.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
                                <div className="flex items-start space-x-3.5">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-emerald-400 border border-emerald-500/20 text-xs font-bold flex items-center justify-center font-mono">
                                        {idx + 1}
                                    </span>
                                    <span className="text-sm font-semibold text-slate-200">
                                        {step.question}
                                    </span>
                                </div>
                                <div className="md:text-right pl-9 md:pl-0">
                                    <span className="inline-block bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs px-3 py-1 rounded-xl font-medium">
                                        👉 {step.yes}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* SubTab 3: Constraints Guide */}
            {subTab === 'constraints' && (
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl space-y-6">
                    <div>
                        <div className="flex items-center space-x-3">
                            <Sliders className="w-6 h-6 text-emerald-400" />
                            <h2 className="text-xl font-display font-bold text-white">
                                Constraint-to-Complexity Cheat Sheet
                            </h2>
                        </div>
                        <p className="text-sm text-slate-400 mt-1">
                            The input size <code className="text-emerald-400">n</code> in the problem constraints immediately dictates what algorithmic complexity will pass.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {CONSTRAINT_GUIDE.map((item, idx) => (
                            <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="font-mono font-bold text-sm bg-slate-950 px-3 py-1 rounded-lg text-emerald-400 border border-emerald-500/20">
                                        {item.constraint}
                                    </span>
                                    <span className="text-xs font-mono font-semibold text-indigo-300">
                                        {item.acceptableComplexity}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Viable Approaches</p>
                                    <p className="text-sm font-semibold text-slate-200 mt-0.5">{item.viableApproaches}</p>
                                </div>
                                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-850 text-xs text-slate-400">
                                    💡 {item.tip}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* SubTab 4: Keyword Triggers Dictionary */}
            {subTab === 'keywords' && (
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl space-y-6">
                    <div>
                        <div className="flex items-center space-x-3">
                            <Zap className="w-6 h-6 text-emerald-400" />
                            <h2 className="text-xl font-display font-bold text-white">
                                Keyword Pattern Recognition
                            </h2>
                        </div>
                        <p className="text-sm text-slate-400 mt-1">
                            Common keywords in interview problem descriptions and their mapped optimal algorithmic patterns.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {KEYWORD_DICTIONARY.map((item, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between space-y-3">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                        Problem Keywords
                                    </span>
                                    <p className="text-sm font-semibold text-white mt-1">
                                        "{item.keyword}"
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                                    <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                                        🎯 {item.pattern}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Pattern Detail Modal / Drawer via Portal */}
            {selectedPattern && typeof document !== 'undefined' && createPortal(
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
                    onClick={() => setSelectedPattern(null)}
                >
                    <div 
                        className="bg-slate-900 border border-slate-750 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                            <div>
                                <div className="flex items-center space-x-3 mb-1">
                                    <span className="text-xs font-mono font-bold bg-slate-950 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                                        Pattern #{selectedPattern.id}
                                    </span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                        {selectedPattern.category}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-display font-extrabold text-white">
                                    {selectedPattern.name}
                                </h2>
                            </div>
                            <button
                                onClick={() => setSelectedPattern(null)}
                                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* When to Use */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>When to Use (Triggers)</span>
                            </h4>
                            <ul className="space-y-1.5 text-sm text-slate-300">
                                {selectedPattern.whenToUse.map((reason, idx) => (
                                    <li key={idx} className="flex items-start space-x-2">
                                        <span className="text-emerald-400 font-bold">•</span>
                                        <span>{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Code Template with Copy */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Algorithm Template / Pseudocode</span>
                                </h4>
                                <button
                                    onClick={() => handleCopy(selectedPattern.template)}
                                    className="flex items-center space-x-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                                            <span className="text-emerald-400 font-semibold">Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-3.5 h-3.5" />
                                            <span>Copy Code</span>
                                        </>
                                    )}
                                </button>
                            </div>
                            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 overflow-x-auto">
                                <pre className="text-xs font-mono text-emerald-300 leading-relaxed">
                                    <code>{selectedPattern.template}</code>
                                </pre>
                            </div>
                        </div>

                        {/* Pitfalls & Edge Cases */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                <span>Common Pitfalls & Edge Cases</span>
                            </h4>
                            <ul className="space-y-1.5 text-sm text-slate-300">
                                {selectedPattern.pitfalls.map((pitfall, idx) => (
                                    <li key={idx} className="flex items-start space-x-2">
                                        <span className="text-amber-400 font-bold">⚠️</span>
                                        <span>{pitfall}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Classic Problems */}
                        <div className="space-y-2.5">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                                <span>Classic LeetCode Problems</span>
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {selectedPattern.classics.map((problem, idx) => (
                                    <a
                                        key={idx}
                                        href={problem.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-950 transition-all duration-200 group"
                                    >
                                        <div className="flex items-center space-x-2 min-w-0 pr-2">
                                            <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-300 truncate">
                                                {problem.name}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2 flex-shrink-0">
                                            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border ${getDifficultyBadge(problem.difficulty)}`}>
                                                {problem.difficulty}
                                            </span>
                                            <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Modal Action Bar */}
                        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                            <button
                                onClick={() => {
                                    togglePatternMastery(selectedPattern.id);
                                }}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
                                    masteredPatterns[selectedPattern.id]
                                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20'
                                        : 'bg-slate-800 text-white border-slate-700 hover:bg-emerald-600 hover:border-emerald-500'
                                }`}
                            >
                                <Check className="w-4 h-4 stroke-[3]" />
                                <span>{masteredPatterns[selectedPattern.id] ? 'Pattern Mastered!' : 'Mark as Mastered'}</span>
                            </button>

                            <button
                                onClick={() => setSelectedPattern(null)}
                                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
