import React, { useState, useRef } from 'react';
import { DSA_CHAPTERS } from '../data/dsaHandbookData';
import ConceptDiagram from './ConceptDiagram';
import { BookOpen, Search, ChevronRight, Hash, Layers, ArrowUpDown, Code, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DsaHandbookView() {
    const [selectedChapterId, setSelectedChapterId] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const contentRef = useRef(null);

    const currentChapter = DSA_CHAPTERS.find(c => c.id === selectedChapterId) || DSA_CHAPTERS[0];

    const handleSelectChapter = (chapterId) => {
        setSelectedChapterId(chapterId);
        // On mobile/tablet screens (where layout stacks vertically), smoothly scroll to content
        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
            setTimeout(() => {
                contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    };

    // Filter chapters if search query is provided
    const filteredChapters = DSA_CHAPTERS.filter(chap => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        const inTitle = chap.title.toLowerCase().includes(query);
        const inTagline = chap.tagline.toLowerCase().includes(query);
        const inSections = chap.sections.some(s => 
            s.heading.toLowerCase().includes(query) || 
            (s.content && s.content.toLowerCase().includes(query))
        );
        return inTitle || inTagline || inSections;
    });

    return (
        <div className="space-y-6 animate-fade-in pb-16">
            {/* Header & Global Handbook Search */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-xl border border-emerald-200 dark:border-emerald-500/20">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                                The Complete DSA Handbook
                            </h2>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                                10 core foundational chapters from Big-O to Bit Manipulation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative min-w-[280px]">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search concepts, sorting, trees..."
                        className="w-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                    />
                </div>
            </div>

            {/* Layout: Sidebar Chapters + Chapter Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Chapter List Sidebar (4 cols) */}
                <div className="lg:col-span-4 space-y-2">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2">
                        Chapters ({filteredChapters.length})
                    </p>
                    <div className="space-y-1.5 max-h-[700px] overflow-y-auto pr-1">
                        {filteredChapters.map(chapter => {
                            const isSelected = chapter.id === selectedChapterId;
                            return (
                                <button
                                    key={chapter.id}
                                    onClick={() => handleSelectChapter(chapter.id)}
                                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                                        isSelected
                                            ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-500/40 text-slate-950 dark:text-white shadow-sm font-bold'
                                            : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/30'
                                    }`}
                                >
                                    <div className="flex items-center space-x-3 min-w-0 pr-2">
                                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${
                                            isSelected 
                                                ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-extrabold' 
                                                : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 group-hover:text-slate-900 dark:group-hover:text-slate-200'
                                        }`}>
                                            {chapter.id < 10 ? `0${chapter.id}` : chapter.id}
                                        </span>
                                        <span className={`text-xs font-semibold truncate ${isSelected ? 'text-emerald-900 dark:text-white font-bold' : ''}`}>
                                            {chapter.title}
                                        </span>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isSelected ? 'text-emerald-600 dark:text-emerald-400 translate-x-0.5' : 'text-slate-400 dark:text-slate-600'}`} />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Chapter Content Main Area (8 cols) */}
                <div ref={contentRef} className="lg:col-span-8 scroll-mt-20">
                    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800/80 shadow-xl space-y-8">
                        {/* Chapter Title Banner */}
                        <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                            <div className="flex items-center space-x-2.5 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                                <span>CHAPTER {currentChapter.id}</span>
                            </div>
                            <h1 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                                {currentChapter.title}
                            </h1>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                {currentChapter.tagline}
                            </p>
                        </div>

                        {/* Chapter Visual Infographic Diagram */}
                        <ConceptDiagram conceptKey={currentChapter.title} />

                        {/* Chapter Sections */}
                        <div className="space-y-8">
                            {currentChapter.sections.map((sec, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h3 className="text-base font-display font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                        <span>{sec.heading}</span>
                                    </h3>

                                    {/* Standard Text Content */}
                                    {sec.content && (
                                        <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed space-y-2 whitespace-pre-line bg-slate-50 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-200 dark:border-slate-850 shadow-sm">
                                            {sec.content}
                                        </div>
                                    )}

                                    {/* Big-O Growth Order Chart */}
                                    {sec.type === 'growth_order' && (
                                        <div className="space-y-2">
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                                                    <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-800">
                                                        <tr>
                                                            <th className="p-3">Notation</th>
                                                            <th className="p-3">Name</th>
                                                            <th className="p-3">Example Operation</th>
                                                            <th className="p-3">Growth Order</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-850 bg-white dark:bg-slate-900/30">
                                                        {sec.growthList.map((item, gIdx) => (
                                                            <tr key={gIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/20">
                                                                <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">{item.notation}</td>
                                                                <td className="p-3 font-semibold text-slate-900 dark:text-slate-200">{item.name}</td>
                                                                <td className="p-3 text-slate-700 dark:text-slate-300">{item.example}</td>
                                                                <td className="p-3 font-mono text-indigo-700 dark:text-indigo-300">{item.growth}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center justify-center space-x-2 shadow-sm">
                                                <span className="text-emerald-700 dark:text-emerald-400 font-bold">O(1)</span>
                                                <span>&lt;</span>
                                                <span className="text-emerald-600 dark:text-emerald-300">O(log n)</span>
                                                <span>&lt;</span>
                                                <span className="text-teal-600 dark:text-teal-300">O(n)</span>
                                                <span>&lt;</span>
                                                <span className="text-indigo-600 dark:text-indigo-300">O(n log n)</span>
                                                <span>&lt;</span>
                                                <span className="text-amber-600 dark:text-amber-400">O(n²)</span>
                                                <span>&lt;</span>
                                                <span className="text-rose-600 dark:text-rose-400">O(2ⁿ)</span>
                                                <span>&lt;</span>
                                                <span className="text-red-600 dark:text-red-500 font-bold">O(n!)</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Tables for Comparisons */}
                                    {sec.type === 'table' && (
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                                                <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-800">
                                                    <tr>
                                                        {sec.columns.map((col, cIdx) => (
                                                            <th key={cIdx} className="p-3">{col}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-200 dark:divide-slate-850 bg-white dark:bg-slate-900/30">
                                                    {sec.rows.map((row, rIdx) => (
                                                        <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/20">
                                                            {row.map((cell, cellIdx) => (
                                                                <td key={cellIdx} className={`p-3 ${cellIdx === 0 ? 'font-semibold text-slate-900 dark:text-slate-200' : 'text-slate-700 dark:text-slate-300'}`}>
                                                                    {cell}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Chapter Navigation Footer */}
                        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <button
                                disabled={selectedChapterId <= 1}
                                onClick={() => handleSelectChapter(Math.max(1, selectedChapterId - 1))}
                                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors"
                            >
                                ← Previous Chapter
                            </button>
                            <span className="text-xs font-mono text-slate-500">
                                Chapter {currentChapter.id} of {DSA_CHAPTERS.length}
                            </span>
                            <button
                                disabled={selectedChapterId >= DSA_CHAPTERS.length}
                                onClick={() => handleSelectChapter(Math.min(DSA_CHAPTERS.length, selectedChapterId + 1))}
                                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors"
                            >
                                Next Chapter →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
