'use client';

import { Task, Project } from '../../store/types';

interface TaskDetailsProps {
  task: Task;
  project: Project;
}

export default function TaskDetails({ task, project }: TaskDetailsProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
    
    switch (status) {
      case 'active':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'completed':
        return `${baseClasses} bg-gray-100 text-gray-800`;
      case 'archived':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      default:
        return `${baseClasses} bg-blue-100 text-blue-800`;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {task.name}
            </h2>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {project.name}
                </span>
              </div>
              <span className={getStatusBadge(task.status)}>
                {task.status}
              </span>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            {task.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Task Information
          </h3>
          
          <dl className="space-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Deadline
              </dt>
              <dd className="text-sm text-gray-900 dark:text-white">
                {formatDate(task.deadline)}
              </dd>
            </div>
            
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Assigned To
              </dt>
              <dd className="text-sm text-gray-900 dark:text-white">
                {task.assignedTo || 'Unassigned'}
              </dd>
            </div>
            
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Status
              </dt>
              <dd className="text-sm text-gray-900 dark:text-white">
                <span className={getStatusBadge(task.status)}>
                  {task.status}
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Project Information
          </h3>
          
          <dl className="space-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Project Name
              </dt>
              <dd className="text-sm text-gray-900 dark:text-white flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <span>{project.name}</span>
              </dd>
            </div>
            
            {project.description && (
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Description
                </dt>
                <dd className="text-sm text-gray-900 dark:text-white">
                  {project.description}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}