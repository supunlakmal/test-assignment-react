'use client';

import { Project } from '../../store/types';

interface ProjectDropdownProps {
  projects: Project[];
  value: string;
  onChange: (projectId: string) => void;
  error?: string;
}

export default function ProjectDropdown({ projects, value, onChange, error }: ProjectDropdownProps) {
  return (
    <div>
      <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Project *
      </label>
      <select
        id="project"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error 
            ? 'border-red-300 text-red-900 placeholder-red-300' 
            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
        }`}
      >
        <option value="">Select a project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}