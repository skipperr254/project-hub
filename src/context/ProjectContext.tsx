import React, { createContext, useContext, useState } from 'react';
import { Project, Task } from '../types';

interface ProjectContextType {
  projects: Project[];
  activeProject: Project | null;
  setActiveProject: (id: string) => void;
  addProject: () => void;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const initialProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website',
    color: 'bg-blue-500',
    tasks: [
      {
        id: '1',
        title: 'Design Homepage',
        description: 'Create a modern and engaging homepage design',
        status: 'in-progress',
        dueDate: '2024-03-20',
        assignees: [
          {
            name: 'Alice Johnson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
          },
        ],
        comments: [],
      },
      {
        id: '2',
        title: 'Implement Authentication',
        description: 'Set up user authentication system',
        status: 'todo',
        dueDate: '2024-03-25',
        assignees: [
          {
            name: 'Bob Smith',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
          },
        ],
        comments: [],
      },
    ],
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Build a cross-platform mobile application',
    color: 'bg-green-500',
    tasks: [],
  },
];

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [activeProjectId, setActiveProjectId] = useState<string>(initialProjects[0].id);

  const activeProject = projects.find((p) => p.id === activeProjectId) || null;

  const addProject = () => {
    const newProject: Project = {
      id: String(projects.length + 1),
      name: 'New Project',
      description: 'Project description',
      color: 'bg-indigo-500',
      tasks: [],
    };
    setProjects([...projects, newProject]);
    setActiveProjectId(newProject.id);
  };

  const addTask = (task: Task) => {
    if (!activeProject) return;
    const updatedProjects = projects.map((p) =>
      p.id === activeProject.id
        ? { ...p, tasks: [...p.tasks, task] }
        : p
    );
    setProjects(updatedProjects);
  };

  const updateTask = (task: Task) => {
    if (!activeProject) return;
    const updatedProjects = projects.map((p) =>
      p.id === activeProject.id
        ? {
            ...p,
            tasks: p.tasks.map((t) => (t.id === task.id ? task : t)),
          }
        : p
    );
    setProjects(updatedProjects);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        activeProject,
        setActiveProject: setActiveProjectId,
        addProject,
        addTask,
        updateTask,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}