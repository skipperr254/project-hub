import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ProjectBoard } from './components/ProjectBoard';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Calendar } from './components/Calendar';
import { Team } from './components/Team';
import { Messages } from './components/Messages';
import { Documents } from './components/Documents';
import { Timesheet } from './components/Timesheet';
import { Reports } from './components/Reports';
import { Settings } from './components/Settings';
import { ProjectProvider } from './context/ProjectContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <ProjectBoard sidebarOpen={sidebarOpen} />;
      case 'calendar':
        return <Calendar />;
      case 'team':
        return <Team />;
      case 'messages':
        return <Messages />;
      case 'documents':
        return <Documents />;
      case 'timesheet':
        return <Timesheet />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700">Coming Soon</h2>
              <p className="text-gray-500 mt-2">This feature is under development</p>
            </div>
          </div>
        );
    }
  };

  return (
    <ProjectProvider>
      <Layout>
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          activeView={activeView}
          setActiveView={setActiveView}
        />
        {renderContent()}
      </Layout>
    </ProjectProvider>
  );
}

export default App