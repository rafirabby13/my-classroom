import React from 'react';
import { ClassList } from '../components/classroom/ClassList';

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <ClassList />
    </div>
  );
};

