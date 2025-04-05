export interface User {
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  assignees?: User[];
  comments?: Comment[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  tasks: Task[];
}