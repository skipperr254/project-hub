import React from 'react';
import { Mail, Phone, MapPin, Plus } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      id: '1',
      name: 'Alice Johnson',
      role: 'Project Manager',
      email: 'alice@example.com',
      phone: '+1 234 567 890',
      location: 'New York, USA',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      activeTasks: 12,
      completedTasks: 45,
      department: 'Management',
      joinDate: '2023-01-15'
    },
    {
      id: '2',
      name: 'Bob Smith',
      role: 'Senior Developer',
      email: 'bob@example.com',
      phone: '+1 234 567 891',
      location: 'San Francisco, USA',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
      activeTasks: 8,
      completedTasks: 67,
      department: 'Engineering',
      joinDate: '2023-02-20'
    },
    {
      id: '3',
      name: 'Carol Williams',
      role: 'UI/UX Designer',
      email: 'carol@example.com',
      phone: '+1 234 567 892',
      location: 'London, UK',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      activeTasks: 6,
      completedTasks: 38,
      department: 'Design',
      joinDate: '2023-03-10'
    },
    {
      id: '4',
      name: 'David Brown',
      role: 'Frontend Developer',
      email: 'david@example.com',
      phone: '+1 234 567 893',
      location: 'Berlin, Germany',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      activeTasks: 10,
      completedTasks: 52,
      department: 'Engineering',
      joinDate: '2023-04-05'
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Team</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Add Member</span>
          </button>
        </div>
      </header>

      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail className="h-4 w-4 mr-2" />
                    {member.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone className="h-4 w-4 mr-2" />
                    {member.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {member.location}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Active Tasks</span>
                    <span className="font-medium text-gray-900">{member.activeTasks}</span>
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-gray-500">Completed</span>
                    <span className="font-medium text-gray-900">{member.completedTasks}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Department</span>
                  <span className="font-medium text-gray-900">{member.department}</span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-gray-500">Joined</span>
                  <span className="font-medium text-gray-900">
                    {new Date(member.joinDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}