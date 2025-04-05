import React from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle, BarChart3, Users } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';

export function Dashboard() {
  const { projects } = useProjects();
  
  // Calculate statistics
  const totalTasks = projects.reduce((acc, project) => acc + project.tasks.length, 0);
  const completedTasks = projects.reduce(
    (acc, project) => acc + project.tasks.filter(task => task.status === 'done').length,
    0
  );
  const upcomingTasks = projects.reduce(
    (acc, project) => acc + project.tasks.filter(task => task.status === 'todo').length,
    0
  );

  return (
    <div className="flex-1 flex flex-col h-screen overflow-y-auto">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </header>

      <div className="flex-1 p-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Projects</p>
                <p className="text-2xl font-semibold text-gray-900">{projects.length}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-full">
                <BarChart3 className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Tasks</p>
                <p className="text-2xl font-semibold text-gray-900">{totalTasks}</p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-full">
                <CheckCircle2 className="h-6 w-6 text-indigo-500" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed</p>
                <p className="text-2xl font-semibold text-gray-900">{completedTasks}</p>
              </div>
              <div className="p-3 bg-green-50 rounded-full">
                <Clock className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Upcoming</p>
                <p className="text-2xl font-semibold text-gray-900">{upcomingTasks}</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-full">
                <AlertCircle className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity and Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Projects</h2>
            <div className="space-y-4">
              {projects.slice(0, 4).map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${project.color} mr-3`} />
                    <div>
                      <p className="font-medium text-gray-900">{project.name}</p>
                      <p className="text-sm text-gray-500">{project.tasks.length} tasks</p>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {project.tasks.slice(0, 3).map((task, index) => (
                      task.assignees?.[0] && (
                        <img
                          key={index}
                          src={task.assignees[0].avatar}
                          alt={task.assignees[0].name}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h2>
            <div className="space-y-4">
              {projects.flatMap(project => 
                project.tasks
                  .filter(task => task.status !== 'done')
                  .map(task => ({ ...task, projectName: project.name }))
              )
              .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
              .slice(0, 4)
              .map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{task.title}</p>
                    <p className="text-sm text-gray-500">{task.projectName}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-gray-500">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                    {task.assignees?.[0] && (
                      <img
                        src={task.assignees[0].avatar}
                        alt={task.assignees[0].name}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              {
                name: 'Alice Johnson',
                role: 'Project Manager',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                tasks: 12
              },
              {
                name: 'Bob Smith',
                role: 'Developer',
                avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
                tasks: 8
              },
              {
                name: 'Carol Williams',
                role: 'Designer',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
                tasks: 6
              },
              {
                name: 'David Brown',
                role: 'Developer',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
                tasks: 10
              }
            ].map((member) => (
              <div key={member.name} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <p className="text-xs text-gray-400">{member.tasks} active tasks</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}