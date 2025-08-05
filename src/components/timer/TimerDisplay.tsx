'use client';

import { useEffect, useState } from 'react';
import { Timer } from '../../store/types';

interface TimerDisplayProps {
  timer: Timer;
  className?: string;
}

export default function TimerDisplay({ timer, className = '' }: TimerDisplayProps) {
  const [currentDuration, setCurrentDuration] = useState(timer.duration);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timer.status === 'running' && timer.startTime) {
      interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - timer.startTime!) / 1000);
        setCurrentDuration(timer.duration + elapsed);
      }, 1000);
    } else {
      setCurrentDuration(timer.duration);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer.status, timer.startTime, timer.duration]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusColor = () => {
    switch (timer.status) {
      case 'running':
        return 'text-green-600';
      case 'paused':
        return 'text-yellow-600';
      case 'completed':
        return 'text-gray-500';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <span className={`font-mono font-medium ${getStatusColor()} ${className}`}>
      {formatTime(currentDuration)}
    </span>
  );
}