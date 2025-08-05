export interface Timer {
  id: string;
  projectId: string;
  taskId: string;
  description: string;
  status: 'idle' | 'running' | 'paused' | 'completed';
  duration: number; // in seconds
  startTime?: number; // timestamp when timer started
  isFavorite: boolean;
  createdAt: number;
  completedAt?: number;
}

export interface Project {
  id: string;
  name: string;
  color: string;
  description?: string;
}

export interface Task {
  id: string;
  projectId: string;
  name: string;
  description: string;
  deadline?: string;
  assignedTo?: string;
  status: 'active' | 'completed' | 'archived';
}

export interface TimerState {
  timers: Timer[];
  activeTimerId: string | null;
}

export interface ProjectState {
  projects: Project[];
}

export interface TaskState {
  tasks: Task[];
}

export interface RootState {
  timers: TimerState;
  projects: ProjectState;
  tasks: TaskState;
}