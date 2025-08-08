import React, { useEffect, useState } from 'react';
import { Menu, Calendar, BookOpen } from 'lucide-react';
import Sidebar from './Sidebar';
// import ClassList from './ClassList';
// import ClassInterface from './ClassInterface';
// import { ClassData } from './ClassCard';
// import { PostData } from './PostCard'; 
import type { ClassData } from '../classroom/ClassCard';
import ClassInterface from '../classroom/ClassInterface';
import ClassList from '../classroom/ClassList';
import { Button } from '../ui/button';
import { Outlet } from 'react-router';





const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
  const [classes, setClasses] = useState([]);

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

  useEffect(() => {
    fetch("http://localhost:5000/all-classes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch classes");
        }
        return res.json();
      })
      .then((data) => {

        setClasses(data);
      })
      .catch((err) => {
        console.error("Error fetching classes:", err);
      });
  }, []);



  // If a class is selected, show the class interface
  // if (selectedClass) {
  //   return (
  //     <ClassInterface
  //       classData={selectedClass}
  //       onBack={handleBackToClasses}
  //     />
  //   );
  // }

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
              <div className='md:flex items-center gap-2 hidden'>
                <img className='h-7 w-7' src="/logo.png" alt="" />
                <h1 className="text-2xl font-semibold text-gray-900">My Classroom</h1>
              </div>
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

          {/* <ClassList
            classes={classes}
          /> */}
          <Outlet />

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