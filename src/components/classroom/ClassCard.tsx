import React from 'react';
import type { ClassRoom } from '../../types';
import { truncateText } from '../../urils/helpers';

interface ClassCardProps {
  classRoom: ClassRoom;
  onClick: () => void;
}

export const ClassCard: React.FC<ClassCardProps> = ({ classRoom, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div 
        className="h-24 flex items-end p-4"
        style={{ backgroundColor: classRoom.color }}
      >
        <div className="text-white">
          <h3 className="text-lg font-semibold">{classRoom.name}</h3>
          <p className="text-sm opacity-90">{classRoom.teacherName}</p>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-3">
          {truncateText(classRoom.description, 100)}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Code: {classRoom.code}</span>
          <span>{classRoom.students.length} students</span>
        </div>
      </div>
    </div>
  );
};
