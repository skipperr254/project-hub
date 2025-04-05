import React from 'react';
import { Calendar, Clock, BarChart, Download, Plus } from 'lucide-react';

export function Timesheet() {
  const timeEntries = [
    {
      id: '1',
      project: 'Website Redesign',
      task: 'Homepage Development',
      date: '2024-03-15',
      duration: '4h 30m',
      status: 'completed'
    },
    {
      id: '2',
      project: 'Mobile App',
      task: 'UI Implementation',
      date: '2024-03-15',
      duration: '3h 45m',
      status: 'completed'
    },
    {
      id: '3',
      project: 'Website Redesign',
      task: 'Backend Integration',
      date: '2024-03-14',
      duration: '6h 15m',
      status: 'completed'
    },
    {
      id: '4',
      project: 'Mobile App',
      task: 'Testing',
      date: '2024-03-14',
      duration: '2h 30m',
      status: 'completed'
    }
  ];

  const weeklyTotal = timeEntries.reduce((acc, entry) => {
    const [hours, minutes] = entry.duration.split('h ');
    return acc + parseInt(hours) + parseInt(minutes) / 60;
  }, 0);

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Timesheet</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Plus className="h-4 w-4" />
              <span>New Entry</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Weekly Total</p>
                <p className="text-2xl font-semibold text-gray-900">{weeklyTotal.toFixed(1)}h</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-full">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Daily Average</p>
                <p className="text-2xl font-semibold text-gray-900">6.8h</p>
              </div>
              <div className="p-3 bg-green-50 rounded-full">
                <BarChart className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Projects</p>
                <p className="text-2xl font-semibold text-gray-900">4</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-full">
                <Calendar className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Utilization</p>
                <p className="text-2xl font-semibold text-gray-900">85%</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-full">
                <BarChart className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Time Entries</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {timeEntries.map(entry => (
              <div key={entry.id} className="px-6 py-4 flex items-center hover:bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{entry.project}</h3>
                      <p className="text-sm text-gray-500">{entry.task}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(entry.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {entry.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}