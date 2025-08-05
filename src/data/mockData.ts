// data/mockData.ts

import type { ClassData, PostData, StudentData } from "@/types";

export const mockClasses: ClassData[] = [
  {
    id: 1,
    name: "Mathematics 101",
    teacher: "Dr. Sarah Johnson",
    description: "Basic mathematics course covering algebra, geometry, and calculus fundamentals",
    code: "MATH101",
    students: 4,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Computer Science Fundamentals",
    teacher: "Prof. Mike Chen",
    description: "Introduction to programming concepts, algorithms, and data structures",
    code: "CS101",
    students: 4,
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "English Literature",
    teacher: "Ms. Emily Davis",
    description: "Exploring classic and contemporary literature from around the world",
    code: "ENG201",
    students: 4,
    color: "bg-red-500"
  },
  {
    id: 4,
    name: "Physics Laboratory",
    teacher: "Dr. Robert Wilson",
    description: "Hands-on physics experiments covering mechanics, thermodynamics, and electromagnetism",
    code: "PHY301",
    students: 4,
    color: "bg-orange-500"
  },
  {
    id: 5,
    name: "World History",
    teacher: "Prof. Lisa Anderson",
    description: "Comprehensive study of world civilizations from ancient times to modern era",
    code: "HIST101",
    students: 4,
    color: "bg-purple-500"
  },
  {
    id: 6,
    name: "Chemistry Basics",
    teacher: "Dr. James Brown",
    description: "Introduction to chemical principles, reactions, and laboratory techniques",
    code: "CHEM101",
    students: 4,
    color: "bg-orange-600"
  }
];

export const mockPosts: PostData[] = [
  {
    id: 1,
    type: "assignment",
    title: "Weekly Assignment #3",
    description: "Complete exercises 1-15 from Chapter 5",
    dueDate: "Due Tomorrow",
    author: "Dr. Sarah Johnson",
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    type: "material",
    title: "Lecture Notes - Quadratic Equations",
    description: "Today's lecture materials and additional resources",
    author: "Dr. Sarah Johnson",
    timestamp: "1 day ago"
  },
  {
    id: 3,
    type: "announcement",
    title: "Mid-term Exam Schedule",
    description: "The mid-term examination will be held on Friday, March 15th at 2:00 PM in Room 204.",
    author: "Dr. Sarah Johnson",
    timestamp: "3 days ago"
  }
];

export const mockStudents: StudentData[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com"
  },
  {
    id: 2,
    name: "Emma Johnson",
    email: "emma.johnson@email.com"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@email.com"
  },
  {
    id: 4,
    name: "Sarah Davis",
    email: "sarah.davis@email.com"
  }
];