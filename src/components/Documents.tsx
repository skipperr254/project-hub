import React from 'react';
import { File, FileText, Image, Video, Music, Archive, Download, Share2, MoreVertical, Search, Plus } from 'lucide-react';

export function Documents() {
  const documents = [
    {
      id: '1',
      name: 'Project Requirements.pdf',
      type: 'pdf',
      size: '2.4 MB',
      modified: '2024-03-15',
      shared: true,
      icon: FileText
    },
    {
      id: '2',
      name: 'Design Assets.zip',
      type: 'zip',
      size: '156 MB',
      modified: '2024-03-14',
      shared: true,
      icon: Archive
    },
    {
      id: '3',
      name: 'Team Photo.jpg',
      type: 'image',
      size: '3.2 MB',
      modified: '2024-03-13',
      shared: false,
      icon: Image
    },
    {
      id: '4',
      name: 'Project Timeline.xlsx',
      type: 'excel',
      size: '1.8 MB',
      modified: '2024-03-12',
      shared: true,
      icon: File
    },
    {
      id: '5',
      name: 'Meeting Recording.mp4',
      type: 'video',
      size: '258 MB',
      modified: '2024-03-11',
      shared: false,
      icon: Video
    },
    {
      id: '6',
      name: 'Presentation.pptx',
      type: 'powerpoint',
      size: '5.4 MB',
      modified: '2024-03-10',
      shared: true,
      icon: File
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Upload</span>
          </button>
        </div>
        <div className="mt-4 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search files"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Recent Files</h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-700">View all</button>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {documents.map(doc => {
              const Icon = doc.icon;
              return (
                <div key={doc.id} className="px-6 py-4 flex items-center hover:bg-gray-50">
                  <div className="flex-shrink-0">
                    <Icon className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{doc.name}</h3>
                        <p className="text-sm text-gray-500">
                          {doc.size} • Modified {new Date(doc.modified).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {doc.shared && (
                          <div className="flex -space-x-2">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                              alt="User"
                              className="w-6 h-6 rounded-full border-2 border-white"
                            />
                            <img
                              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
                              alt="User"
                              className="w-6 h-6 rounded-full border-2 border-white"
                            />
                          </div>
                        )}
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Download className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Share2 className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <MoreVertical className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}