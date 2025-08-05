import { createSlice } from '@reduxjs/toolkit';
import { ProjectState } from '../types';

const initialState: ProjectState = {
  projects: [
    {
      id: '1',
      name: 'Authentication System',
      color: '#3B82F6',
      description: 'User authentication and authorization features',
    },
    {
      id: '2',
      name: 'Design System',
      color: '#10B981',
      description: 'Component library and design tokens',
    },
    {
      id: '3',
      name: 'Mobile App',
      color: '#F59E0B',
      description: 'iOS and Android mobile application',
    },
    {
      id: '4',
      name: 'Dashboard',
      color: '#EF4444',
      description: 'Analytics and reporting dashboard',
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;