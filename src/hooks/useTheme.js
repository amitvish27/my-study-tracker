import { useState, useEffect } from 'react';

const THEME_STORAGE_KEY = 'study_tracker_theme';

export function useTheme() {
    // Helper to get system preferred theme
    const getSystemTheme = () => {
        if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    const [theme, setThemeState] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(THEME_STORAGE_KEY);
            if (saved === 'light' || saved === 'dark') return saved;
            // Default to system auto detection
            return getSystemTheme();
        }
        return 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
            root.setAttribute('data-theme', 'dark');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
            root.setAttribute('data-theme', 'light');
        }
    }, [theme]);

    // Listen to OS system theme changes if user hasn't explicitly saved a preference
    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemChange = (e) => {
            const saved = localStorage.getItem(THEME_STORAGE_KEY);
            if (!saved) {
                const newSystemTheme = e.matches ? 'dark' : 'light';
                setThemeState(newSystemTheme);
            }
        };

        mediaQuery.addEventListener('change', handleSystemChange);
        return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }, []);

    const setTheme = (newTheme) => {
        const val = newTheme === 'light' ? 'light' : 'dark';
        setThemeState(val);
        if (typeof window !== 'undefined') {
            localStorage.setItem(THEME_STORAGE_KEY, val);
        }
    };

    // Toggle directly between light and dark
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return { 
        theme, 
        setTheme, 
        toggleTheme, 
        isDark: theme === 'dark' 
    };
}
