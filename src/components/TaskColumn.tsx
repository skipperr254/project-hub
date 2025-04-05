import React from 'react';
import { Plus } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';
import { TaskCard } from './TaskCard';

interface TaskColumnProps {
  title: string;
  status: string;
}

export function TaskColumn({ title, status }: TaskColumnProps) {
  const { activeProject } = useProjects();
  const tasks = activeProject?.tasks.filter(task => task.status === status) || [];

  return (
    <div className="flex-1 min-w-[280px] bg-gray-100 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <span className="text-sm text-gray-500">{tasks.length}</span>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <button className="mt-3 w-full flex items-center justify-center gap-2 p-2 text-gray-500 hover:bg-white hover:text-gray-700 rounded-lg transition-colors">
        <Plus className="h-4 w-4" />
        <span>Add Task</span>
      </button>
    </div>
  );
}