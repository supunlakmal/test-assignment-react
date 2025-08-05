'use client';

import Link from 'next/link';

export default function AppBar() {
  return (
    <header className="bg-surface border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-xl font-semibold text-on-surface">
                Timer App
              </h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="/style-guide"
              className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Style Guide
            </Link>
            <Link
              href="/create-timer"
              className="inline-flex items-center justify-center w-8 h-8 bg-primary-40 hover:bg-primary-30 text-on-primary rounded-full transition-colors duration-200"
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