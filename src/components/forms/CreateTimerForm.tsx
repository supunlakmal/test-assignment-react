'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { addTimer } from '../../store/slices/timersSlice';
import ProjectDropdown from './ProjectDropdown';
import TaskDropdown from './TaskDropdown';
import FavoriteCheckbox from './FavoriteCheckbox';

interface FormData {
  projectId: string;
  taskId: string;
  description: string;
  isFavorite: boolean;
}

interface FormErrors {
  projectId?: string;
  taskId?: string;
  description?: string;
}

export default function CreateTimerForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector((state) => state.projects);
  const { tasks } = useAppSelector((state) => state.tasks);

  const [formData, setFormData] = useState<FormData>({
    projectId: '',
    taskId: '',
    description: '',
    isFavorite: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredTasks = useMemo(() => {
    return formData.projectId 
      ? tasks.filter(task => task.projectId === formData.projectId)
      : [];
  }, [tasks, formData.projectId]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.projectId) {
      newErrors.projectId = 'Please select a project';
    }

    if (!formData.taskId) {
      newErrors.taskId = 'Please select a task';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please enter a description';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      dispatch(addTimer({
        projectId: formData.projectId,
        taskId: formData.taskId,
        description: formData.description.trim(),
        status: 'idle',
        duration: 0,
        isFavorite: formData.isFavorite,
      }));

      router.push('/');
    } catch (error) {
      console.error('Error creating timer:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProjectChange = (projectId: string) => {
    setFormData(prev => ({
      ...prev,
      projectId,
      taskId: '', // Reset task when project changes
    }));
    setErrors(prev => ({ ...prev, projectId: '', taskId: '' }));
  };

  const handleTaskChange = (taskId: string) => {
    setFormData(prev => ({ ...prev, taskId }));
    setErrors(prev => ({ ...prev, taskId: '' }));
  };

  const handleDescriptionChange = (description: string) => {
    setFormData(prev => ({ ...prev, description }));
    setErrors(prev => ({ ...prev, description: '' }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ProjectDropdown
        projects={projects}
        value={formData.projectId}
        onChange={handleProjectChange}
        error={errors.projectId}
      />

      <TaskDropdown
        tasks={filteredTasks}
        value={formData.taskId}
        onChange={handleTaskChange}
        disabled={!formData.projectId}
        error={errors.taskId}
      />

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Description *
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
          rows={3}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            errors.description 
              ? 'border-red-300 text-red-900 placeholder-red-300' 
              : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
          }`}
          placeholder="Enter a description for this timer..."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description}</p>
        )}
      </div>

      <FavoriteCheckbox
        checked={formData.isFavorite}
        onChange={(checked) => setFormData(prev => ({ ...prev, isFavorite: checked }))}
      />

      <div className="flex items-center justify-end space-x-4 pt-4">
        <button
          type="button"
          onClick={() => router.push('/')}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
        >
          Cancel
        </button>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? 'Creating...' : 'Create Timer'}
        </button>
      </div>
    </form>
  );
}