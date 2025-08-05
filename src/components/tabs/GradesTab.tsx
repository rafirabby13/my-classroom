import React from 'react';

interface GradesTabProps {
  onCreateAssignment?: () => void;
}

const GradesTab: React.FC<GradesTabProps> = ({ onCreateAssignment }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">📊</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No grades yet</h3>
      <p className="text-gray-600">Grades will appear here once assignments are created and graded</p>
    </div>
  );
};

export default GradesTab;