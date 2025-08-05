'use client';

import { Timer, Task } from '../../store/types';
import TimerControls from '../timer/TimerControls';
import TimerDisplay from '../timer/TimerDisplay';
import CompletedTimers from './CompletedTimers';

interface TimesheetsTabProps {
  task: Task;
  timers: Timer[];
  onStart: (id: string) => void;
  onPause: (id: string) => void;
  onStop: (id: string) => void;
}

export default function TimesheetsTab({ 
  task, 
  timers, 
  onStart, 
  onPause, 
  onStop 
}: TimesheetsTabProps) {
  const activeTimers = timers.filter(timer => timer.status !== 'completed');
  const completedTimers = timers.filter(timer => timer.status === 'completed');
  const runningTimer = timers.find(timer => timer.status === 'running');

  const totalTime = timers.reduce((total, timer) => {
    if (timer.status === 'running' && timer.startTime) {
      const elapsed = Math.floor((Date.now() - timer.startTime) / 1000);
      return total + timer.duration + elapsed;
    }
    return total + timer.duration;
  }, 0);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Time Summary
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {formatTime(totalTime)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Total Time
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {activeTimers.length}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Active Timers
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">
              {completedTimers.length}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Completed
            </div>
          </div>
        </div>
      </div>

      {/* Running Timer */}
      {runningTimer && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Currently Running
            </h3>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
              Running
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {runningTimer.description}
              </p>
              <TimerDisplay timer={runningTimer} className="text-2xl" />
            </div>
            
            <TimerControls
              timer={runningTimer}
              onStart={onStart}
              onPause={onPause}
              onStop={onStop}
              size="md"
            />
          </div>
        </div>
      )}

      {/* Active Timers */}
      {activeTimers.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Active Timers
          </h3>
          
          <div className="space-y-4">
            {activeTimers.map((timer) => (
              <div key={timer.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white font-medium mb-1">
                    {timer.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <TimerDisplay timer={timer} />
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      timer.status === 'running' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {timer.status}
                    </span>
                    {timer.isFavorite && (
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <TimerControls
                  timer={timer}
                  onStart={onStart}
                  onPause={onPause}
                  onStop={onStop}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Completed Timers */}
      {completedTimers.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Completed Timers
          </h3>
          
          <CompletedTimers timers={completedTimers} />
        </div>
      )}
    </div>
  );
}