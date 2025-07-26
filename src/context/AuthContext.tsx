import { createContext } from "react";
import type { ClassRoom, Post, User } from "../types";
interface AppContextType {
  user: User | null;
  classes: ClassRoom[];
  posts: Post[];
  currentClass: ClassRoom | null;
  setUser: (user: User | null) => void;
  setCurrentClass: (classRoom: ClassRoom | null) => void;
  addClass: (classRoom: ClassRoom) => void;
  joinClass: (code: string) => boolean;
  addPost: (post: Post) => void;
  getClassPosts: (classId: string) => Post[];
  getUserClasses: () => ClassRoom[];
}
export const AuthContext = createContext<AppContextType | undefined>(undefined);