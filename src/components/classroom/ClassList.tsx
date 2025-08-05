import React from 'react';
import ClassCard, { type ClassData } from './ClassCard';

interface ClassListProps {
  classes: ClassData[];
  onClassClick: (classData: ClassData) => void;
}

const ClassList: React.FC<ClassListProps> = ({ classes, onClassClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((classData) => (
        <ClassCard 
          key={classData.id} 
          classData={classData} 
          onClick={onClassClick}
        />
      ))}
    </div>
  );
};

export default ClassList;