'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { startTimer, pauseTimer, stopTimer } from '../../../store/slices/timersSlice';
import Layout from '../../../components/layout/Layout';
import TabNavigation from '../../../components/task/TabNavigation';
import TaskDetails from '../../../components/task/TaskDetails';
import TimesheetsTab from '../../../components/task/TimesheetsTab';

export default function TaskPage() {
  const params = useParams();
  const taskId = params.id as string;
  const [activeTab, setActiveTab] = useState<'details' | 'timesheets'>('details');
  
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.tasks);
  const { projects } = useAppSelector((state) => state.projects);
  const { timers } = useAppSelector((state) => state.timers);

  const task = tasks.find(t => t.id === taskId);
  const project = task ? projects.find(p => p.id === task.projectId) : null;
  const taskTimers = timers.filter(timer => timer.taskId === taskId);

  if (!task || !project) {
    notFound();
  }

  const handleStart = (timerId: string) => {
    dispatch(startTimer(timerId));
  };

  const handlePause = (timerId: string) => {
    dispatch(pauseTimer(timerId));
  };

  const handleStop = (timerId: string) => {
    dispatch(stopTimer(timerId));
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {task.name}
            </h1>
            <div className="flex items-center space-x-2 mt-1">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {project.name}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="px-6 pt-6">
            <TabNavigation 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
            />
          </div>
          
          <div className="p-6">
            {activeTab === 'details' ? (
              <TaskDetails task={task} project={project} />
            ) : (
              <TimesheetsTab
                task={task}
                timers={taskTimers}
                onStart={handleStart}
                onPause={handlePause}
                onStop={handleStop}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}