import { useState, useEffect } from 'react';
import { INITIAL_ROADMAP_DATA } from '../data/roadmapData';
import { PATTERNS_LIST } from '../data/patternsData';
import { SD_QUESTIONS } from '../data/systemDesignData';

const STORAGE_KEY = 'interview_roadmap_v2';
const LEGACY_STORAGE_KEY = 'interview_roadmap_v1';

export function useTrackerState() {
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                return {
                    roadmap: parsed.roadmap || INITIAL_ROADMAP_DATA,
                    completedMap: parsed.completedMap || {},
                    masteredPatterns: parsed.masteredPatterns || {},
                    masteredSdQuestions: parsed.masteredSdQuestions || {}
                };
            } catch (e) {
                console.error("Failed to parse stored roadmap data", e);
            }
        }
        return {
            roadmap: INITIAL_ROADMAP_DATA,
            completedMap: {}, // taskId -> completion date string 'YYYY-MM-DD'
            masteredPatterns: {}, // patternId -> date
            masteredSdQuestions: {} // questionId -> date
        };
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, [data]);

    const toggleTask = (taskId) => {
        const today = new Date().toISOString().split('T')[0];
        setData(prev => {
            const newMap = { ...prev.completedMap };
            if (newMap[taskId]) {
                delete newMap[taskId];
            } else {
                newMap[taskId] = today;
            }
            return { ...prev, completedMap: newMap };
        });
    };

    const togglePatternMastery = (patternId) => {
        const today = new Date().toISOString().split('T')[0];
        setData(prev => {
            const newMap = { ...prev.masteredPatterns };
            if (newMap[patternId]) {
                delete newMap[patternId];
            } else {
                newMap[patternId] = today;
            }
            return { ...prev, masteredPatterns: newMap };
        });
    };

    const toggleSdQuestionMastery = (questionId) => {
        const today = new Date().toISOString().split('T')[0];
        setData(prev => {
            const newMap = { ...prev.masteredSdQuestions };
            if (newMap[questionId]) {
                delete newMap[questionId];
            } else {
                newMap[questionId] = today;
            }
            return { ...prev, masteredSdQuestions: newMap };
        });
    };

    const exportData = () => {
        const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(data, null, 2)
        )}`;
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute('href', jsonString);
        downloadAnchor.setAttribute('download', `study_tracker_backup_${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    };

    const importData = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsed = JSON.parse(e.target.result);
                if (parsed.roadmap && parsed.completedMap) {
                    setData({
                        roadmap: parsed.roadmap,
                        completedMap: parsed.completedMap,
                        masteredPatterns: parsed.masteredPatterns || {},
                        masteredSdQuestions: parsed.masteredSdQuestions || {}
                    });
                    alert('Progress successfully restored!');
                } else {
                    alert('Invalid backup file format.');
                }
            } catch (err) {
                alert('Failed to read JSON file.');
            }
        };
        reader.readAsText(file);
    };

    // Helper Stats
    let totalTasks = 0;
    let completedCount = 0;

    data.roadmap.forEach(phase => {
        phase.weeks.forEach(week => {
            week.tasks.forEach(task => {
                totalTasks++;
                if (data.completedMap[task.id]) {
                    completedCount++;
                }
            });
        });
    });

    const totalPatterns = PATTERNS_LIST.length;
    const masteredPatternsCount = Object.keys(data.masteredPatterns || {}).length;

    const totalSdQuestions = SD_QUESTIONS.length;
    const masteredSdCount = Object.keys(data.masteredSdQuestions || {}).length;

    const progressPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

    return {
        roadmap: data.roadmap,
        completedMap: data.completedMap,
        masteredPatterns: data.masteredPatterns || {},
        masteredSdQuestions: data.masteredSdQuestions || {},
        toggleTask,
        togglePatternMastery,
        toggleSdQuestionMastery,
        exportData,
        importData,
        stats: {
            totalTasks,
            completedCount,
            progressPercentage,
            totalPatterns,
            masteredPatternsCount,
            totalSdQuestions,
            masteredSdCount
        }
    };
}