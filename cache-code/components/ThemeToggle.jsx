'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#15ff15] focus:ring-offset-2 dark:focus:ring-offset-black"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun Icon (Light Mode) */}
      <svg
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-yellow-500 transition-all duration-300 ${
          theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon Icon (Dark Mode) */}
      <svg
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-400 transition-all duration-300 ${
          theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
} 