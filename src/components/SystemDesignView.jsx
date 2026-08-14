import React, { useState } from 'react';
import { 
    SD_SECTIONS, 
    SD_QUESTIONS, 
    SD_FRAMEWORK_STEPS, 
    SD_MATH_CHEAT_SHEET, 
    SD_BUILDING_BLOCKS, 
    SD_INTERVIEW_TIPS 
} from '../data/systemDesignData';
import { 
    Cpu, 
    Search, 
    Calculator, 
    Clock, 
    Layers, 
    Check, 
    HelpCircle, 
    AlertTriangle, 
    Sparkles, 
    ChevronDown, 
    ChevronRight, 
    CheckCircle2, 
    X,
    Server,
    Database,
    Zap
} from 'lucide-react';

export default function SystemDesignView({ masteredSdQuestions, toggleSdQuestionMastery }) {
    const [activeSection, setActiveSection] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [subTab, setSubTab] = useState('questions'); // 'questions' | 'playbook' | 'math' | 'blocks' | 'tips'
    const [expandedQId, setExpandedQId] = useState(1);

    // Interactive Math Calculator state
    const [dauInput, setDauInput] = useState(10); // Millions
    const [actionsPerDay, setActionsPerDay] = useState(10); // Actions/user/day
    const [readWriteRatio, setReadWriteRatio] = useState(100); // 100:1
    const [payloadKb, setPayloadKb] = useState(2); // 2 KB per record

    // Derived Math calculations
    const totalDailyActions = dauInput * 1_000_000 * actionsPerDay;
    const avgQps = Math.round(totalDailyActions / 86400);
    const peakQps = avgQps * 3; // 3x multiplier
    const writeQps = Math.round(avgQps / (readWriteRatio + 1));
    const readQps = avgQps - writeQps;
    const dailyStorageGb = ((writeQps * 86400 * payloadKb * 1024) / (1024 * 1024 * 1024)).toFixed(1);
    const yearlyStorageTb = ((dailyStorageGb * 365) / 1000).toFixed(1);
    const fiveYearStorageTb = (yearlyStorageTb * 5 * 1.3).toFixed(1); // 30% overhead

    // Filter questions
    const filteredQuestions = SD_QUESTIONS.filter(q => {
        const matchesSection = activeSection === 'all' || q.section === activeSection;
        const matchesSearch = 
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (q.tip && q.tip.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesSection && matchesSearch;
    });

    return (
        <div className="space-y-6 animate-fade-in pb-16">
            {/* Top Sub-Nav Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 glass-card p-4 rounded-2xl border border-slate-800/80 shadow-2xl">
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSubTab('questions')}
                        className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            subTab === 'questions'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                    >
                        <HelpCircle className="w-4 h-4" />
                        <span>Top 50 Q&As</span>
                    </button>
                    <button
                        onClick={() => setSubTab('playbook')}
                        className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            subTab === 'playbook'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                    >
                        <Clock className="w-4 h-4" />
                        <span>45-Min Playbook</span>
                    </button>
                    <button
                        onClick={() => setSubTab('math')}
                        className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            subTab === 'math'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                    >
                        <Calculator className="w-4 h-4" />
                        <span>Back-of-Envelope Math</span>
                    </button>
                    <button
                        onClick={() => setSubTab('blocks')}
                        className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            subTab === 'blocks'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                    >
                        <Layers className="w-4 h-4" />
                        <span>Building Blocks</span>
                    </button>
                    <button
                        onClick={() => setSubTab('tips')}
                        className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            subTab === 'tips'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Interview Tips & Traps</span>
                    </button>
                </div>

                <div className="flex items-center space-x-2">
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-xl font-bold">
                        {Object.keys(masteredSdQuestions || {}).length} / {SD_QUESTIONS.length} Questions Reviewed
                    </span>
                </div>
            </div>

            {/* SubTab 1: Top 50 Questions */}
            {subTab === 'questions' && (
                <div className="space-y-6">
                    {/* Search & Section Filter */}
                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search questions (e.g. 'CAP theorem', 'Sharding', 'Consistent Hashing', 'Rate Limiter')..."
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

                        {/* Section Pills */}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {SD_SECTIONS.map(sec => {
                                const count = sec.id === 'all' 
                                    ? SD_QUESTIONS.length 
                                    : SD_QUESTIONS.filter(q => q.section === sec.id).length;
                                return (
                                    <button
                                        key={sec.id}
                                        onClick={() => setActiveSection(sec.id)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 border ${
                                            activeSection === sec.id
                                                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-sm'
                                                : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                                        }`}
                                    >
                                        {sec.label} ({count})
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Questions Accordion / Cards */}
                    <div className="space-y-3">
                        {filteredQuestions.map(q => {
                            const isMastered = !!masteredSdQuestions[q.id];
                            const isOpen = expandedQId === q.id;
                            return (
                                <div
                                    key={q.id}
                                    className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                                        isMastered
                                            ? 'border-emerald-500/30 bg-emerald-950/5'
                                            : 'border-slate-800/80 hover:border-slate-700'
                                    }`}
                                >
                                    {/* Question Header */}
                                    <div 
                                        onClick={() => setExpandedQId(isOpen ? null : q.id)}
                                        className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                                    >
                                        <div className="flex items-center space-x-3.5 min-w-0">
                                            <span className="text-xs font-mono font-bold bg-slate-950 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-lg flex-shrink-0">
                                                Q{q.id}
                                            </span>
                                            <span className="font-display font-bold text-white text-sm sm:text-base">
                                                {q.question}
                                            </span>
                                        </div>

                                        <div className="flex items-center space-x-3 flex-shrink-0">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleSdQuestionMastery(q.id);
                                                }}
                                                title={isMastered ? "Reviewed" : "Mark as Reviewed"}
                                                className={`p-1.5 rounded-lg border transition-all duration-300 ${
                                                    isMastered
                                                        ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                                                        : 'bg-slate-900/80 text-slate-500 border-slate-800 hover:text-slate-300'
                                                }`}
                                            >
                                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                            </button>
                                            <div className="text-slate-400">
                                                {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Answer & Interview Tip Drawer */}
                                    {isOpen && (
                                        <div className="px-5 pb-5 pt-2 border-t border-slate-850/60 space-y-4 bg-slate-950/30 animate-fade-in">
                                            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2 whitespace-pre-line bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                                                {q.answer}
                                            </div>

                                            {q.tip && (
                                                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start space-x-2.5">
                                                    <span className="text-base flex-shrink-0">💡</span>
                                                    <div>
                                                        <span className="font-bold">Interview Pro-Tip: </span>
                                                        <span>{q.tip}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* SubTab 2: 45-Min Interview Playbook */}
            {subTab === 'playbook' && (
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl space-y-6">
                    <div>
                        <div className="flex items-center space-x-3">
                            <Clock className="w-6 h-6 text-emerald-400" />
                            <h2 className="text-xl font-display font-bold text-white">
                                The 45-Minute System Design Interview Playbook
                            </h2>
                        </div>
                        <p className="text-sm text-slate-400 mt-1">
                            Follow this structured 6-phase framework to pace your 45-minute whiteboarding session.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {SD_FRAMEWORK_STEPS.map((step, idx) => (
                            <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2.5">
                                <div className="flex items-center space-x-2.5">
                                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center justify-center font-mono">
                                        {step.step}
                                    </span>
                                    <h3 className="font-display font-bold text-white text-sm">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed pl-8">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* The Depth Ladder */}
                    <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                            The 4-Step Depth Ladder (Go deeper step-by-step)
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                                <span className="font-bold text-emerald-400">1. Happy Path</span>
                                <p className="text-slate-400 mt-1">Does it work at small scale?</p>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                                <span className="font-bold text-teal-400">2. Scale</span>
                                <p className="text-slate-400 mt-1">What breaks as users grow to 10M?</p>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                                <span className="font-bold text-indigo-400">3. Consistency</span>
                                <p className="text-slate-400 mt-1">What are the consistency choices & CAP?</p>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                                <span className="font-bold text-rose-400">4. Failure</span>
                                <p className="text-slate-400 mt-1">What can fail? How do we detect & recover?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* SubTab 3: Back-of-Envelope Math & Interactive Calculator */}
            {subTab === 'math' && (
                <div className="space-y-6">
                    {/* Interactive Calculator Card */}
                    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl space-y-6">
                        <div>
                            <div className="flex items-center space-x-3">
                                <Calculator className="w-6 h-6 text-emerald-400" />
                                <h2 className="text-xl font-display font-bold text-white">
                                    Interactive Capacity & QPS Estimator
                                </h2>
                            </div>
                            <p className="text-sm text-slate-400 mt-1">
                                Tweak daily active users and payload sizes to generate instant capacity numbers for your interview.
                            </p>
                        </div>

                        {/* Interactive Sliders / Inputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    Daily Active Users (DAU)
                                </label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="number"
                                        min="1"
                                        max="1000"
                                        value={dauInput}
                                        onChange={(e) => setDauInput(Number(e.target.value))}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-white font-mono"
                                    />
                                    <span className="text-xs font-bold text-emerald-400">Million</span>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    Actions / User / Day
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="500"
                                    value={actionsPerDay}
                                    onChange={(e) => setActionsPerDay(Number(e.target.value))}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-white font-mono"
                                />
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    Read : Write Ratio
                                </label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="number"
                                        min="1"
                                        max="1000"
                                        value={readWriteRatio}
                                        onChange={(e) => setReadWriteRatio(Number(e.target.value))}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-white font-mono"
                                    />
                                    <span className="text-xs font-bold text-slate-400">:1</span>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    Avg Payload Size
                                </label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="number"
                                        min="0.1"
                                        step="0.5"
                                        max="100"
                                        value={payloadKb}
                                        onChange={(e) => setPayloadKb(Number(e.target.value))}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-white font-mono"
                                    />
                                    <span className="text-xs font-bold text-indigo-400">KB</span>
                                </div>
                            </div>
                        </div>

                        {/* Calculated Output Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-center">
                                <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">Average QPS</p>
                                <p className="text-2xl font-mono font-extrabold text-white mt-1">{avgQps.toLocaleString()}</p>
                                <p className="text-[10px] text-slate-400 mt-1">requests / sec</p>
                            </div>

                            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-center">
                                <p className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">Peak QPS (3x)</p>
                                <p className="text-2xl font-mono font-extrabold text-white mt-1">{peakQps.toLocaleString()}</p>
                                <p className="text-[10px] text-slate-400 mt-1">during traffic spikes</p>
                            </div>

                            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-center">
                                <p className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400">Daily Storage</p>
                                <p className="text-2xl font-mono font-extrabold text-white mt-1">{dailyStorageGb} GB</p>
                                <p className="text-[10px] text-slate-400 mt-1">new data / day</p>
                            </div>

                            <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30 text-center">
                                <p className="text-[10px] font-extrabold uppercase tracking-wider text-teal-400">5-Year Storage</p>
                                <p className="text-2xl font-mono font-extrabold text-white mt-1">{fiveYearStorageTb} TB</p>
                                <p className="text-[10px] text-slate-400 mt-1">with 30% index overhead</p>
                            </div>
                        </div>
                    </div>

                    {/* Math Cheat Sheet & Time Constants */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-card rounded-2xl p-6 border border-slate-800/80 space-y-4">
                            <h3 className="font-display font-bold text-white text-base flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-emerald-400" />
                                <span>Time & Storage Cheat Sheet</span>
                            </h3>
                            <div className="space-y-2 text-xs">
                                {SD_MATH_CHEAT_SHEET.timeConstants.map((t, idx) => (
                                    <div key={idx} className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                                        <span className="text-slate-400">{t.label}</span>
                                        <span className="font-mono font-bold text-emerald-400">{t.value}</span>
                                    </div>
                                ))}
                                {SD_MATH_CHEAT_SHEET.units.map((u, idx) => (
                                    <div key={idx} className="flex justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                                        <span className="font-bold text-slate-200">{u.unit}</span>
                                        <span className="font-mono text-indigo-300">{u.bytes}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card rounded-2xl p-6 border border-slate-800/80 space-y-4">
                            <h3 className="font-display font-bold text-white text-base flex items-center space-x-2">
                                <Calculator className="w-4 h-4 text-emerald-400" />
                                <span>Core Estimating Formulas</span>
                            </h3>
                            <div className="space-y-2 text-xs">
                                {SD_MATH_CHEAT_SHEET.formulas.map((f, idx) => (
                                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                                        <span className="font-bold text-emerald-300">{f.name}</span>
                                        <p className="font-mono text-slate-300 text-[11px]">{f.formula}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* SubTab 4: Building Blocks */}
            {subTab === 'blocks' && (
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl space-y-6">
                    <div>
                        <div className="flex items-center space-x-3">
                            <Layers className="w-6 h-6 text-emerald-400" />
                            <h2 className="text-xl font-display font-bold text-white">
                                System Design Building Blocks
                            </h2>
                        </div>
                        <p className="text-sm text-slate-400 mt-1">
                            The standard architectural components you combine to solve scalability and reliability bottlenecks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {SD_BUILDING_BLOCKS.map((block, idx) => (
                            <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-display font-bold text-white text-sm">
                                        {block.name}
                                    </h3>
                                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-800 text-emerald-400 border border-slate-700">
                                        {block.type}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                    {block.when}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* SubTab 5: Interview Tips & Traps */}
            {subTab === 'tips' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Points Scoring Phrases */}
                    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl space-y-4">
                        <div className="flex items-center space-x-3">
                            <Sparkles className="w-6 h-6 text-emerald-400" />
                            <h3 className="text-lg font-display font-bold text-white">
                                Phrases That Score Points
                            </h3>
                        </div>
                        <div className="space-y-3">
                            {SD_INTERVIEW_TIPS.phrasesThatScorePoints.map((phrase, idx) => (
                                <div key={idx} className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200 leading-relaxed font-medium">
                                    {phrase}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Common Traps & Mistakes */}
                    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl space-y-4">
                        <div className="flex items-center space-x-3">
                            <AlertTriangle className="w-6 h-6 text-rose-400" />
                            <h3 className="text-lg font-display font-bold text-white">
                                Common Interview Traps
                            </h3>
                        </div>
                        <div className="space-y-3">
                            {SD_INTERVIEW_TIPS.commonMistakes.map((mistake, idx) => (
                                <div key={idx} className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-rose-200 leading-relaxed font-medium flex items-start space-x-2">
                                    <span className="text-rose-400 font-bold">❌</span>
                                    <span>{mistake}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
