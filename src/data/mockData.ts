// data/mockData.ts

import type {  PostData, StudentData } from "@/types";

// export const mockClasses: ClassData[] =

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