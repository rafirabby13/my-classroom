import type { ClassRoom, Post, User } from "../types";


export const mockUser: User = {
  id: '1',
  email: 'john.doe@example.com',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  role: 'student'
};

export const mockClasses: ClassRoom[] = [
  {
    id: '1',
    name: 'Mathematics 101',
    description: 'Basic mathematics course covering algebra, geometry, and calculus fundamentals',
    code: 'MATH101',
    teacherId: 'teacher1',
    teacherName: 'Dr. Sarah Johnson',
    students: ['1', '2', '3', '4'],
    createdAt: new Date('2024-01-15'),
    subject: 'Mathematics',
    color: '#3B82F6'
  },
  {
    id: '2',
    name: 'Computer Science Fundamentals',
    description: 'Introduction to programming concepts, algorithms, and data structures',
    code: 'CS101',
    teacherId: 'teacher2',
    teacherName: 'Prof. Mike Chen',
    students: ['1', '4', '5', '6'],
    createdAt: new Date('2024-01-20'),
    subject: 'Computer Science',
    color: '#10B981'
  },
  {
    id: '3',
    name: 'English Literature',
    description: 'Exploring classic and contemporary literature from around the world',
    code: 'ENG201',
    teacherId: 'teacher3',
    teacherName: 'Ms. Emily Davis',
    students: ['1', '2', '6', '7'],
    createdAt: new Date('2024-02-01'),
    subject: 'English',
    color: '#EF4444'
  },
  {
    id: '4',
    name: 'Physics Laboratory',
    description: 'Hands-on physics experiments covering mechanics, thermodynamics, and electromagnetism',
    code: 'PHY301',
    teacherId: 'teacher4',
    teacherName: 'Dr. Robert Wilson',
    students: ['1', '3', '7', '8'],
    createdAt: new Date('2024-02-10'),
    subject: 'Physics',
    color: '#F59E0B'
  },
  {
    id: '5',
    name: 'World History',
    description: 'Comprehensive study of world civilizations from ancient times to modern era',
    code: 'HIST101',
    teacherId: 'teacher5',
    teacherName: 'Prof. Lisa Anderson',
    students: ['1', '8', '9', '10'],
    createdAt: new Date('2024-02-15'),
    subject: 'History',
    color: '#8B5CF6'
  },
  {
    id: '6',
    name: 'Chemistry Basics',
    description: 'Introduction to chemical principles, reactions, and laboratory techniques',
    code: 'CHEM101',
    teacherId: 'teacher6',
    teacherName: 'Dr. James Brown',
    students: ['1', '10', '11', '12'],
    createdAt: new Date('2024-02-20'),
    subject: 'Chemistry',
    color: '#F97316'
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    classId: '1',
    authorId: 'teacher1',
    authorName: 'Dr. Sarah Johnson',
    title: 'Welcome to Mathematics 101',
    content: 'Welcome everyone! This semester we will cover fundamental concepts in algebra and geometry. Please make sure to have your textbooks ready for our first class. Looking forward to an exciting semester!',
    createdAt: new Date('2024-02-25'),
    type: 'announcement'
  },
  {
    id: '2',
    classId: '1',
    authorId: 'teacher1',
    authorName: 'Dr. Sarah Johnson',
    title: 'Assignment 1: Linear Equations',
    content: 'Complete exercises 1-15 from Chapter 2. Due date: March 5th, 2024. Show all your work and submit through the portal. If you have any questions, please ask during office hours.',
    createdAt: new Date('2024-02-28'),
    type: 'assignment'
  },
  {
    id: '3',
    classId: '1',
    authorId: 'teacher1',
    authorName: 'Dr. Sarah Johnson',
    title: 'Study Guide - Quadratic Functions',
    content: 'Here is the study guide for our upcoming test on quadratic functions. Make sure to review all the examples and practice problems provided.',
    createdAt: new Date('2024-03-03'),
    type: 'material'
  },
  {
    id: '4',
    classId: '2',
    authorId: 'teacher2',
    authorName: 'Prof. Mike Chen',
    title: 'Introduction to Programming',
    content: 'Today we will start with basic programming concepts. Make sure you have Python installed on your computers. We will be using VS Code as our primary editor.',
    createdAt: new Date('2024-03-01'),
    type: 'announcement'
  },
  {
    id: '5',
    classId: '2',
    authorId: 'teacher2',
    authorName: 'Prof. Mike Chen',
    title: 'Python Setup Guide',
    content: 'Here is the step-by-step guide to install Python and set up your development environment. Please follow these instructions before our next class.',
    createdAt: new Date('2024-03-02'),
    type: 'material'
  },
  {
    id: '6',
    classId: '2',
    authorId: 'teacher2',
    authorName: 'Prof. Mike Chen',
    title: 'Project 1: Calculator Program',
    content: 'Create a simple calculator program that can perform basic arithmetic operations. Due date: March 15th. Submit your code along with a brief documentation.',
    createdAt: new Date('2024-03-05'),
    type: 'assignment'
  },
  {
    id: '7',
    classId: '3',
    authorId: 'teacher3',
    authorName: 'Ms. Emily Davis',
    title: 'Course Syllabus',
    content: 'Welcome to English Literature! Please find the course syllabus attached. We will be covering works from Shakespeare, Dickens, and contemporary authors.',
    createdAt: new Date('2024-02-28'),
    type: 'material'
  },
  {
    id: '8',
    classId: '3',
    authorId: 'teacher3',
    authorName: 'Ms. Emily Davis',
    title: 'Essay Assignment: Character Analysis',
    content: 'Write a 1000-word character analysis of Hamlet. Focus on his psychological development throughout the play. Due: March 20th.',
    createdAt: new Date('2024-03-10'),
    type: 'assignment'
  },
  {
    id: '9',
    classId: '4',
    authorId: 'teacher4',
    authorName: 'Dr. Robert Wilson',
    title: 'Lab Safety Guidelines',
    content: 'Please review the laboratory safety guidelines before our first lab session. Safety goggles and lab coats are mandatory for all experiments.',
    createdAt: new Date('2024-02-15'),
    type: 'announcement'
  },
  {
    id: '10',
    classId: '4',
    authorId: 'teacher4',
    authorName: 'Dr. Robert Wilson',
    title: 'Lab Report Template',
    content: 'Use this template for all your lab reports. Make sure to include hypothesis, methodology, observations, and conclusions.',
    createdAt: new Date('2024-03-01'),
    type: 'material'
  },
  {
    id: '11',
    classId: '5',
    authorId: 'teacher5',
    authorName: 'Prof. Lisa Anderson',
    title: 'Ancient Civilizations Overview',
    content: 'This week we will explore ancient Mesopotamian civilizations. Please read Chapter 3 before class and come prepared with questions.',
    createdAt: new Date('2024-02-20'),
    type: 'announcement'
  },
  {
    id: '12',
    classId: '6',
    authorId: 'teacher6',
    authorName: 'Dr. James Brown',
    title: 'Periodic Table Study Guide',
    content: 'Attached is the periodic table study guide. Make sure you can identify element properties and electron configurations.',
    createdAt: new Date('2024-02-25'),
    type: 'material'
  }
];
