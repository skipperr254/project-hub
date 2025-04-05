import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';

export function Calendar() {
  const { projects } = useProjects();
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const previousMonthDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  // Get all tasks with due dates
  const taskEvents = projects.flatMap(project =>
    project.tasks.map(task => ({
      ...task,
      projectName: project.name,
      projectColor: project.color,
      date: new Date(task.dueDate)
    }))
  ).filter(task => task.date.getMonth() === currentDate.getMonth());

  return (
    <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Add Event</span>
          </button>
        </div>
      </header>

      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow">
          {/* Calendar Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h2>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="bg-gray-50 py-2 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {previousMonthDays.map(day => (
                <div key={`prev-${day}`} className="bg-white h-32 p-2">
                  <span className="text-sm text-gray-400"></span>
                </div>
              ))}
              
              {days.map(day => {
                const dayTasks = taskEvents.filter(
                  task => task.date.getDate() === day
                );

                return (
                  <div key={day} className="bg-white h-32 p-2">
                    <span className="text-sm text-gray-900">{day}</span>
                    <div className="mt-2 space-y-1">
                      {dayTasks.map((task, index) => (
                        <div
                          key={task.id}
                          className={`${task.projectColor} bg-opacity-10 px-2 py-1 rounded text-xs truncate`}
                        >
                          {task.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}