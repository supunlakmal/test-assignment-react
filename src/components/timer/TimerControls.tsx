'use client';

import { Timer } from '../../store/types';

interface TimerControlsProps {
  timer: Timer;
  onStart: (id: string) => void;
  onPause: (id: string) => void;
  onStop: (id: string) => void;
  size?: 'sm' | 'md';
}

export default function TimerControls({ 
  timer, 
  onStart, 
  onPause, 
  onStop, 
  size = 'sm' 
}: TimerControlsProps) {
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const buttonSize = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';

  return (
    <div className="flex items-center space-x-2">
      {timer.status === 'running' ? (
        <button
          onClick={() => onPause(timer.id)}
          className={`${buttonSize} inline-flex items-center justify-center rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600 transition-colors duration-200`}
          title="Pause Timer"
        >
          <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => onStart(timer.id)}
          className={`${buttonSize} inline-flex items-center justify-center rounded-full bg-green-100 hover:bg-green-200 text-green-600 transition-colors duration-200`}
          title="Start Timer"
          disabled={timer.status === 'completed'}
        >
          <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
      
      {(timer.status === 'running' || timer.status === 'paused') && (
        <button
          onClick={() => onStop(timer.id)}
          className={`${buttonSize} inline-flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition-colors duration-200`}
          title="Stop Timer"
        >
          <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>
      )}
    </div>
  );
}