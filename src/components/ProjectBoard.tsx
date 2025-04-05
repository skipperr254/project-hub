import React from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';
import { TaskColumn } from './TaskColumn';

interface ProjectBoardProps {
  sidebarOpen: boolean;
}

export function ProjectBoard({ sidebarOpen }: ProjectBoardProps) {
  const { activeProject } = useProjects();

  if (!activeProject) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">No Project Selected</h2>
          <p className="text-gray-500 mt-2">Select or create a project to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-screen">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{activeProject.name}</h1>
            <p className="text-sm text-gray-500 mt-1">{activeProject.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Plus className="h-4 w-4" />
              <span>Add Task</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-x-auto p-6">
        <div className="flex gap-6 h-full">
          <TaskColumn title="To Do" status="todo" />
          <TaskColumn title="In Progress" status="in-progress" />
          <TaskColumn title="In Review" status="review" />
          <TaskColumn title="Done" status="done" />
        </div>
      </div>
    </div>
  );
}