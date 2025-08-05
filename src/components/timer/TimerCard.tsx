'use client';

import Link from 'next/link';
import { Timer, Project, Task } from '../../store/types';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';

interface TimerCardProps {
  timer: Timer;
  project: Project;
  task: Task;
  onStart: (id: string) => void;
  onPause: (id: string) => void;
  onStop: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export default function TimerCard({
  timer,
  project,
  task,
  onStart,
  onPause,
  onStop,
  onToggleFavorite,
}: TimerCardProps) {
  const getStatusBadge = () => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
    
    switch (timer.status) {
      case 'running':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'paused':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'completed':
        return `${baseClasses} bg-gray-100 text-gray-800`;
      default:
        return `${baseClasses} bg-blue-100 text-blue-800`;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <div 
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: project.color }}
            />
            <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {project.name}
            </span>
            <span className={getStatusBadge()}>
              {timer.status}
            </span>
          </div>
          
          <Link 
            href={`/task/${task.id}`}
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {task.name}
          </Link>
        </div>
        
        <button
          onClick={() => onToggleFavorite(timer.id)}
          className="flex-shrink-0 p-1 text-gray-400 hover:text-yellow-500 transition-colors duration-200"
          title={timer.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg className="w-4 h-4" fill={timer.isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {timer.description}
      </p>

      <div className="flex items-center justify-between">
        <TimerDisplay timer={timer} className="text-lg" />
        <TimerControls
          timer={timer}
          onStart={onStart}
          onPause={onPause}
          onStop={onStop}
        />
      </div>
    </div>
  );
}