'use client';

import { useState } from 'react';
import { Timer } from '../../store/types';
import TimerDisplay from '../timer/TimerDisplay';

interface CompletedTimersProps {
  timers: Timer[];
}

export default function CompletedTimers({ timers }: CompletedTimersProps) {
  const [expandedTimers, setExpandedTimers] = useState<Set<string>>(new Set());

  const toggleExpanded = (timerId: string) => {
    const newExpanded = new Set(expandedTimers);
    if (newExpanded.has(timerId)) {
      newExpanded.delete(timerId);
    } else {
      newExpanded.add(timerId);
    }
    setExpandedTimers(newExpanded);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (timers.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          No completed timers yet
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {timers.map((timer) => {
        const isExpanded = expandedTimers.has(timer.id);
        
        return (
          <div
            key={timer.id}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-1">
                    <TimerDisplay timer={timer} />
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                      Completed
                    </span>
                    {timer.isFavorite && (
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                    {timer.description}
                  </p>
                  
                  {timer.completedAt && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Completed: {formatDate(timer.completedAt)}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => toggleExpanded(timer.id)}
                  className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                  title={isExpanded ? 'Collapse' : 'Expand'}
                >
                  <svg 
                    className={`w-4 h-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <dl className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="font-medium text-gray-500 dark:text-gray-400">Created</dt>
                      <dd className="text-gray-900 dark:text-white">
                        {formatDate(timer.createdAt)}
                      </dd>
                    </div>
                    
                    {timer.completedAt && (
                      <div>
                        <dt className="font-medium text-gray-500 dark:text-gray-400">Completed</dt>
                        <dd className="text-gray-900 dark:text-white">
                          {formatDate(timer.completedAt)}
                        </dd>
                      </div>
                    )}
                    
                    <div className="col-span-2">
                      <dt className="font-medium text-gray-500 dark:text-gray-400 mb-1">Description</dt>
                      <dd className="text-gray-900 dark:text-white">
                        {timer.description}
                      </dd>
                    </div>
                  </dl>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}