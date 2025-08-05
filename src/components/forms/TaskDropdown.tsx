'use client';

import { Task } from '../../store/types';

interface TaskDropdownProps {
  tasks: Task[];
  value: string;
  onChange: (taskId: string) => void;
  disabled?: boolean;
  error?: string;
}

export default function TaskDropdown({ tasks, value, onChange, disabled, error }: TaskDropdownProps) {
  return (
    <div>
      <label htmlFor="task" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Task *
      </label>
      <select
        id="task"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          disabled 
            ? 'bg-gray-100 dark:bg-gray-800 text-gray-500 cursor-not-allowed' 
            : error 
              ? 'border-red-300 text-red-900 placeholder-red-300' 
              : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
        }`}
      >
        <option value="">
          {disabled ? 'Select a project first' : 'Select a task'}
        </option>
        {tasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.name}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}