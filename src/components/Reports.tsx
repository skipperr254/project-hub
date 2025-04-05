import { BarChart2, TrendingUp, Download, Filter, Clock } from "lucide-react";

export function Reports() {
  const projectStats = [
    { name: "Website Redesign", completed: 45, total: 68, hours: 127 },
    { name: "Mobile App", completed: 23, total: 45, hours: 89 },
    { name: "Dashboard", completed: 12, total: 15, hours: 34 },
    { name: "API Integration", completed: 8, total: 12, hours: 56 },
  ];

  return (
    <div className='flex-1 flex flex-col h-screen overflow-hidden bg-gray-50'>
      <header className='bg-white border-b border-gray-200 px-6 py-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold text-gray-900'>Reports</h1>
          <div className='flex items-center gap-4'>
            <button className='flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors'>
              <Filter className='h-4 w-4' />
              <span>Filter</span>
            </button>
            <button className='flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors'>
              <Download className='h-4 w-4' />
              <span>Export</span>
            </button>
          </div>
        </div>
      </header>

      <div className='flex-1 p-6 overflow-y-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-lg font-medium text-gray-900'>
                Task Completion
              </h2>
              <TrendingUp className='h-5 w-5 text-green-500' />
            </div>
            <p className='text-3xl font-bold text-gray-900'>76%</p>
            <p className='text-sm text-gray-500 mt-1'>
              Average across all projects
            </p>
            <div className='mt-4 h-2 bg-gray-200 rounded-full'>
              <div
                className='h-2 bg-green-500 rounded-full'
                style={{ width: "76%" }}
              />
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-lg font-medium text-gray-900'>
                Time Tracked
              </h2>
              <Clock className='h-5 w-5 text-blue-500' />
            </div>
            <p className='text-3xl font-bold text-gray-900'>306h</p>
            <p className='text-sm text-gray-500 mt-1'>Total hours this month</p>
            <div className='mt-4 h-2 bg-gray-200 rounded-full'>
              <div
                className='h-2 bg-blue-500 rounded-full'
                style={{ width: "85%" }}
              />
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-lg font-medium text-gray-900'>
                Active Projects
              </h2>
              <BarChart2 className='h-5 w-5 text-purple-500' />
            </div>
            <p className='text-3xl font-bold text-gray-900'>4</p>
            <p className='text-sm text-gray-500 mt-1'>Currently in progress</p>
            <div className='mt-4 h-2 bg-gray-200 rounded-full'>
              <div
                className='h-2 bg-purple-500 rounded-full'
                style={{ width: "40%" }}
              />
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow mb-6'>
          <div className='px-6 py-4 border-b border-gray-200'>
            <h2 className='text-lg font-medium text-gray-900'>
              Project Overview
            </h2>
          </div>

          <div className='p-6'>
            <div className='space-y-4'>
              {projectStats.map((project) => (
                <div key={project.name}>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm font-medium text-gray-900'>
                      {project.name}
                    </span>
                    <span className='text-sm text-gray-500'>
                      {project.completed}/{project.total} tasks
                    </span>
                  </div>
                  <div className='h-2 bg-gray-200 rounded-full'>
                    <div
                      className='h-2 bg-indigo-500 rounded-full'
                      style={{
                        width: `${(project.completed / project.total) * 100}%`,
                      }}
                    />
                  </div>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-xs text-gray-500'>
                      {((project.completed / project.total) * 100).toFixed(0)}%
                      Complete
                    </span>
                    <span className='text-xs text-gray-500'>
                      {project.hours} hours
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='bg-white rounded-lg shadow'>
            <div className='px-6 py-4 border-b border-gray-200'>
              <h2 className='text-lg font-medium text-gray-900'>
                Task Distribution
              </h2>
            </div>
            <div className='p-6'>
              <div className='space-y-4'>
                {[
                  { label: "To Do", value: 25, color: "bg-red-500" },
                  { label: "In Progress", value: 40, color: "bg-yellow-500" },
                  { label: "Review", value: 15, color: "bg-blue-500" },
                  { label: "Completed", value: 20, color: "bg-green-500" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-sm font-medium text-gray-900'>
                        {item.label}
                      </span>
                      <span className='text-sm text-gray-500'>
                        {item.value}%
                      </span>
                    </div>
                    <div className='h-2 bg-gray-200 rounded-full'>
                      <div
                        className={`h-2 ${item.color} rounded-full`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow'>
            <div className='px-6 py-4 border-b border-gray-200'>
              <h2 className='text-lg font-medium text-gray-900'>
                Time Distribution
              </h2>
            </div>
            <div className='p-6'>
              <div className='space-y-4'>
                {[
                  { label: "Development", value: 45, color: "bg-indigo-500" },
                  { label: "Design", value: 25, color: "bg-pink-500" },
                  { label: "Planning", value: 15, color: "bg-orange-500" },
                  { label: "Testing", value: 15, color: "bg-cyan-500" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-sm font-medium text-gray-900'>
                        {item.label}
                      </span>
                      <span className='text-sm text-gray-500'>
                        {item.value}%
                      </span>
                    </div>
                    <div className='h-2 bg-gray-200 rounded-full'>
                      <div
                        className={`h-2 ${item.color} rounded-full`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
