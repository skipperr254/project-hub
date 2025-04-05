import React from 'react';
import { Search, Edit, Star, Clock, Inbox, Send, Archive, Trash } from 'lucide-react';

export function Messages() {
  const conversations = [
    {
      id: '1',
      user: {
        name: 'Alice Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        online: true
      },
      lastMessage: 'I\'ve updated the design files for the new dashboard.',
      time: '2:30 PM',
      unread: true
    },
    {
      id: '2',
      user: {
        name: 'Bob Smith',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
        online: false
      },
      lastMessage: 'When can we schedule the next team meeting?',
      time: '11:45 AM',
      unread: false
    },
    {
      id: '3',
      user: {
        name: 'Carol Williams',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        online: true
      },
      lastMessage: 'The latest mockups are ready for review.',
      time: 'Yesterday',
      unread: true
    }
  ];

  return (
    <div className="flex-1 flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <button className="w-full flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Edit className="h-4 w-4" />
            <span>New Message</span>
          </button>
        </div>

        <nav className="px-2">
          {[
            { icon: Inbox, label: 'Inbox', count: 4 },
            { icon: Star, label: 'Starred', count: 2 },
            { icon: Clock, label: 'Snoozed', count: 0 },
            { icon: Send, label: 'Sent', count: 0 },
            { icon: Archive, label: 'Archive', count: 0 },
            { icon: Trash, label: 'Trash', count: 0 },
          ].map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg mb-1 hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <Icon className="h-5 w-5 text-gray-500" />
                  <span className="ml-3 text-gray-700">{item.label}</span>
                </div>
                {item.count > 0 && (
                  <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full text-xs">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          {conversations.map(conversation => (
            <div
              key={conversation.id}
              className={`flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer ${
                conversation.unread ? 'bg-indigo-50' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={conversation.user.avatar}
                  alt={conversation.user.name}
                  className="w-12 h-12 rounded-full"
                />
                {conversation.user.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {conversation.user.name}
                  </h3>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
                <p className={`text-sm ${conversation.unread ? 'text-gray-900 font-medium' : 'text-gray-500'} truncate`}>
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}