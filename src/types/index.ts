export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'student' | 'teacher';
}

export interface ClassRoom {
  id: string;
  name: string;
  description: string;
  code: string;
  teacherId: string;
  teacherName: string;
  students: string[];
  createdAt: Date;
  subject: string;
  color: string;
}

export interface Post {
  id: string;
  classId: string;
  authorId: string;
  authorName: string;
  title: string;
  content: string;
  createdAt: Date;
  type: 'announcement' | 'assignment' | 'material';
  attachments?: string[];
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: Date;
}
