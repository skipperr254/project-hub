import {
  ChevronLeft,
  ChevronRight,
  Layout as LayoutIcon,
  Plus,
  Settings,
  Home,
  Calendar,
  Users,
  MessageSquare,
  FileText,
  Clock,
  BarChart2,
} from "lucide-react";
import { useProjects } from "../context/ProjectContext";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeView: string;
  setActiveView: (view: string) => void;
}

export function Sidebar({
  isOpen,
  onToggle,
  activeView,
  setActiveView,
}: SidebarProps) {
  const { projects, activeProject, setActiveProject, addProject } =
    useProjects();

  const navigationItems = [
    { id: "dashboard", name: "Dashboard", icon: Home },
    { id: "projects", name: "Projects", icon: LayoutIcon },
    { id: "calendar", name: "Calendar", icon: Calendar },
    { id: "team", name: "Team", icon: Users },
    { id: "messages", name: "Messages", icon: MessageSquare },
    { id: "documents", name: "Documents", icon: FileText },
    { id: "timesheet", name: "Timesheet", icon: Clock },
    { id: "reports", name: "Reports", icon: BarChart2 },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-white h-screen border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col`}
    >
      <div className='p-4 flex items-center justify-between border-b border-gray-200'>
        <div
          className={`flex items-center ${!isOpen && "justify-center w-full"}`}
        >
          <LayoutIcon className='h-6 w-6 text-indigo-600' />
          {isOpen && (
            <span className='ml-2 font-semibold text-gray-900'>ProjectHub</span>
          )}
        </div>
        <button
          onClick={onToggle}
          className={`p-1 rounded-lg hover:bg-gray-100 ${!isOpen && "hidden"}`}
        >
          <ChevronLeft className='h-5 w-5 text-gray-500' />
        </button>
        {!isOpen && (
          <button
            onClick={onToggle}
            className='absolute -right-3 top-9 bg-white rounded-full p-0.5 border border-gray-200'
          >
            <ChevronRight className='h-4 w-4 text-gray-500' />
          </button>
        )}
      </div>

      <div className='flex-1 overflow-y-auto'>
        <nav className='px-2 py-4'>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center px-3 py-2 rounded-lg mb-1 ${
                  activeView === item.id
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className='h-5 w-5' />
                {isOpen && <span className='ml-3'>{item.name}</span>}
              </button>
            );
          })}
        </nav>

        {activeView === "projects" && (
          <>
            <div className='px-4 py-2'>
              <button
                onClick={() => addProject()}
                className='w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors'
              >
                <Plus className='h-4 w-4' />
                {isOpen && <span>New Project</span>}
              </button>
            </div>

            <div className='px-2'>
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 ${
                    activeProject?.id === project.id
                      ? "bg-indigo-50 text-indigo-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className='flex items-center'>
                    <div className={`w-2 h-2 rounded-full ${project.color}`} />
                    {isOpen && (
                      <span className='ml-3 truncate'>{project.name}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className='p-4 border-t border-gray-200'>
        <button
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg`}
          onClick={() => setActiveView("settings")}
        >
          <Settings className='h-5 w-5' />
          {isOpen && <span>Settings</span>}
        </button>
      </div>
    </div>
  );
}
