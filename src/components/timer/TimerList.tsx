'use client';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { startTimer, pauseTimer, stopTimer, toggleFavorite } from '../../store/slices/timersSlice';
import TimerCard from './TimerCard';

export default function TimerList() {
  const dispatch = useAppDispatch();
  const { timers } = useAppSelector((state) => state.timers);
  const { projects } = useAppSelector((state) => state.projects);
  const { tasks } = useAppSelector((state) => state.tasks);

  const handleStart = (timerId: string) => {
    dispatch(startTimer(timerId));
  };

  const handlePause = (timerId: string) => {
    dispatch(pauseTimer(timerId));
  };

  const handleStop = (timerId: string) => {
    dispatch(stopTimer(timerId));
  };

  const handleToggleFavorite = (timerId: string) => {
    dispatch(toggleFavorite(timerId));
  };

  if (timers.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No timers yet
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Create your first timer to get started tracking your work.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {timers.map((timer) => {
        const project = projects.find((p) => p.id === timer.projectId);
        const task = tasks.find((t) => t.id === timer.taskId);

        if (!project || !task) return null;

        return (
          <TimerCard
            key={timer.id}
            timer={timer}
            project={project}
            task={task}
            onStart={handleStart}
            onPause={handlePause}
            onStop={handleStop}
            onToggleFavorite={handleToggleFavorite}
          />
        );
      })}
    </div>
  );
}