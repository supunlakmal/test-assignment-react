import { createSlice } from '@reduxjs/toolkit';
import { TaskState } from '../types';

const initialState: TaskState = {
  tasks: [
    {
      id: '1',
      projectId: '1',
      name: 'Login Implementation',
      description: 'Implement secure login functionality with JWT tokens',
      deadline: '2024-12-15',
      assignedTo: 'John Doe',
      status: 'active',
    },
    {
      id: '2',
      projectId: '2',
      name: 'Component Library',
      description: 'Create reusable UI components following design system',
      deadline: '2024-12-20',
      assignedTo: 'Jane Smith',
      status: 'active',
    },
    {
      id: '3',
      projectId: '1',
      name: 'API Integration',
      description: 'Integrate with backend authentication services',
      deadline: '2024-12-18',
      assignedTo: 'Mike Johnson',
      status: 'active',
    },
    {
      id: '4',
      projectId: '3',
      name: 'Navigation Setup',
      description: 'Implement navigation structure for mobile app',
      deadline: '2024-12-25',
      assignedTo: 'Sarah Wilson',
      status: 'active',
    },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});

export default tasksSlice.reducer;