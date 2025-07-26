import React from 'react';
import useAuthContext from '../../hooks/useAuthContext'; // Using your hook
import { Link, useLocation } from 'react-router';

export const Sidebar: React.FC = () => {
  const { getUserClasses } = useAuthContext(); // Using your custom hook
  const location = useLocation();
  const userClasses = getUserClasses();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-gray-50 min-h-screen border-r">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          <Link
            to="/"
            className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
              isActive('/') 
                ? 'bg-blue-100 text-blue-900' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className="mr-3">🏠</span>
            Dashboard
          </Link>
        </div>
        
        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            My Classes
          </h3>
          <div className="mt-2 space-y-1">
            {userClasses.map(classRoom => (
              <Link
                key={classRoom.id}
                to={`/class/${classRoom.id}`}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive(`/class/${classRoom.id}`)
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div 
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: classRoom.color }}
                ></div>
                <span className="truncate">{classRoom.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
};
