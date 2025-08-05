import React, { useState } from 'react';
import { Menu, Calendar, BookOpen } from 'lucide-react';
import Sidebar from './Sidebar';
// import ClassList from './ClassList';
// import ClassInterface from './ClassInterface';
// import { ClassData } from './ClassCard';
// import { PostData } from './PostCard';
import type { ClassData } from '../classroom/ClassCard';
import type { PostData } from '../posts/PostCard';
import ClassInterface from '../classroom/ClassInterface';
import ClassList from '../classroom/ClassList';
import { Button } from '../ui/button';

// Mock data - replace with your actual data
const mockClasses: ClassData[] = [
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

const mockPosts: PostData[] = [
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

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);

  const handleClassClick = (classData: ClassData) => {
    setSelectedClass(classData);
  };

  const handleBackToClasses = () => {
    setSelectedClass(null);
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    setSelectedClass(null);
  };

  const handleJoinClass = () => {
    console.log('Join class clicked');
    // Add your join class logic here
  };

  const handleCreateClass = () => {
    console.log('Create class clicked');
    // Add your create class logic here
  };

  // If a class is selected, show the class interface
  if (selectedClass) {
    return (
      <ClassInterface 
        classData={selectedClass} 
        posts={mockPosts}
        onBack={handleBackToClasses} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={sidebarOpen} 
        currentView={currentView}
        onViewChange={handleViewChange}
      />
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg mr-4"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">My Classes</h1>
            </div>
            <div className="flex space-x-3">
              <Button 
                onClick={handleJoinClass}
                className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Join Class
              </Button>
              <Button 
                onClick={handleCreateClass}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Create Class
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {currentView === 'home' && (
            <ClassList 
              classes={mockClasses}
              onClassClick={handleClassClick}
            />
          )}

          {currentView === 'calendar' && (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calendar View</h3>
              <p className="text-gray-600">Your upcoming assignments and events will appear here</p>
            </div>
          )}

          {currentView === 'assignments' && (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">To Review</h3>
              <p className="text-gray-600">Assignments waiting for your review will appear here</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;