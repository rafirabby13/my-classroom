import React from 'react';
import { BookOpen } from 'lucide-react';

interface ClassworkTabProps {
  onCreateAssignment?: () => void;
}

const ClassworkTab: React.FC<ClassworkTabProps> = ({ onCreateAssignment }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
      <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No classwork yet</h3>
      <p className="text-gray-600 mb-6">Create your first assignment to get started</p>
      <button 
        onClick={onCreateAssignment}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Create Assignment
      </button>
    </div>
  );
};

export default ClassworkTab;