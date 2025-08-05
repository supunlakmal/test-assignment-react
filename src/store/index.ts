import { configureStore } from '@reduxjs/toolkit';
import timersReducer from './slices/timersSlice';
import projectsReducer from './slices/projectsSlice';
import tasksReducer from './slices/tasksSlice';

export const store = configureStore({
  reducer: {
    timers: timersReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;