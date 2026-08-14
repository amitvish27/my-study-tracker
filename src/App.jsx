import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StatsOverview from './components/StatsOverview';
import RoadmapView from './components/RoadmapView';
import CalendarView from './components/CalendarView';
import PatternsView from './components/PatternsView';
import DsaHandbookView from './components/DsaHandbookView';
import SystemDesignView from './components/SystemDesignView';
import { useTrackerState } from './hooks/useTrackerState';

export default function App() {
    const [activeTab, setActiveTab] = useState('roadmap');
    const { 
        roadmap, 
        completedMap, 
        masteredPatterns, 
        masteredSdQuestions, 
        toggleTask, 
        togglePatternMastery, 
        toggleSdQuestionMastery, 
        exportData, 
        importData, 
        stats 
    } = useTrackerState();

    return (
        <div className="min-h-screen pb-16">
            <Navbar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onExport={exportData}
                onImport={importData}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <StatsOverview 
                    stats={stats} 
                    onNavigateTab={(tab) => setActiveTab(tab)} 
                />

                {activeTab === 'roadmap' && (
                    <RoadmapView
                        roadmap={roadmap}
                        completedMap={completedMap}
                        toggleTask={toggleTask}
                    />
                )}

                {activeTab === 'patterns' && (
                    <PatternsView
                        masteredPatterns={masteredPatterns}
                        togglePatternMastery={togglePatternMastery}
                    />
                )}

                {activeTab === 'dsa-handbook' && (
                    <DsaHandbookView />
                )}

                {activeTab === 'system-design' && (
                    <SystemDesignView
                        masteredSdQuestions={masteredSdQuestions}
                        toggleSdQuestionMastery={toggleSdQuestionMastery}
                    />
                )}

                {activeTab === 'calendar' && (
                    <CalendarView completedMap={completedMap} />
                )}
            </main>
        </div>
    );
}