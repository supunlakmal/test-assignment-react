'use client';

import Link from 'next/link';

export default function AppBar() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Timer App
              </h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="/create-timer"
              className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
              title="Create New Timer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}