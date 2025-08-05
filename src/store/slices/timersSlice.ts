import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Timer, TimerState } from '../types';

const initialState: TimerState = {
  timers: [
    {
      id: '1',
      projectId: '1',
      taskId: '1',
      description: 'Working on authentication module',
      status: 'idle',
      duration: 3600,
      isFavorite: true,
      createdAt: Date.now() - 86400000,
    },
    {
      id: '2',
      projectId: '2',
      taskId: '2',
      description: 'Design system updates',
      status: 'running',
      duration: 1800,
      startTime: Date.now() - 300000,
      isFavorite: false,
      createdAt: Date.now() - 43200000,
    },
    {
      id: '3',
      projectId: '1',
      taskId: '3',
      description: 'API integration testing',
      status: 'paused',
      duration: 2700,
      isFavorite: false,
      createdAt: Date.now() - 7200000,
    },
  ],
  activeTimerId: '2',
};

const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    addTimer: (state, action: PayloadAction<Omit<Timer, 'id' | 'createdAt'>>) => {
      const newTimer: Timer = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: Date.now(),
      };
      state.timers.push(newTimer);
    },
    
    startTimer: (state, action: PayloadAction<string>) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (timer && timer.status !== 'running') {
        // Pause any currently running timer
        if (state.activeTimerId && state.activeTimerId !== action.payload) {
          const activeTimer = state.timers.find(t => t.id === state.activeTimerId);
          if (activeTimer && activeTimer.status === 'running') {
            activeTimer.status = 'paused';
            if (activeTimer.startTime) {
              activeTimer.duration += Math.floor((Date.now() - activeTimer.startTime) / 1000);
            }
            activeTimer.startTime = undefined;
          }
        }
        
        timer.status = 'running';
        timer.startTime = Date.now();
        state.activeTimerId = action.payload;
      }
    },
    
    pauseTimer: (state, action: PayloadAction<string>) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (timer && timer.status === 'running' && timer.startTime) {
        timer.status = 'paused';
        timer.duration += Math.floor((Date.now() - timer.startTime) / 1000);
        timer.startTime = undefined;
        if (state.activeTimerId === action.payload) {
          state.activeTimerId = null;
        }
      }
    },
    
    stopTimer: (state, action: PayloadAction<string>) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (timer) {
        if (timer.status === 'running' && timer.startTime) {
          timer.duration += Math.floor((Date.now() - timer.startTime) / 1000);
        }
        timer.status = 'completed';
        timer.completedAt = Date.now();
        timer.startTime = undefined;
        if (state.activeTimerId === action.payload) {
          state.activeTimerId = null;
        }
      }
    },
    
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (timer) {
        timer.isFavorite = !timer.isFavorite;
      }
    },
    
    updateTimerDuration: (state, action: PayloadAction<{ id: string; duration: number }>) => {
      const timer = state.timers.find(t => t.id === action.payload.id);
      if (timer && timer.status === 'running') {
        timer.duration = action.payload.duration;
      }
    },
  },
});

export const {
  addTimer,
  startTimer,
  pauseTimer,
  stopTimer,
  toggleFavorite,
  updateTimerDuration,
} = timersSlice.actions;

export default timersSlice.reducer;