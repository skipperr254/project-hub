import React from 'react';
import { Clock, MessageSquare } from 'lucide-react';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{task.description}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span className="text-xs">{task.dueDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span className="text-xs">{task.comments?.length || 0}</span>
          </div>
        </div>

        <div className="flex -space-x-2">
          {task.assignees?.map((assignee, index) => (
            <img
              key={index}
              src={assignee.avatar}
              alt={assignee.name}
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}