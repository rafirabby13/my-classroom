import React from 'react';

export interface ClassData {
  id: number;
  name: string;
  teacher: string;
  description: string;
  code: string;
  students: number;
  color: string;
}

interface ClassCardProps {
  classData: ClassData;
  onClick: (classData: ClassData) => void;
}

const ClassCard: React.FC<ClassCardProps> = ({ classData, onClick }) => {
  return (
    <div 
      className={`${classData.color} rounded-lg p-4 text-white cursor-pointer hover:opacity-90 transition-opacity`}
      onClick={() => onClick(classData)}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">{classData.name}</h3>
        <p className="text-sm opacity-90">{classData.teacher}</p>
      </div>
      <div className="bg-white bg-opacity-10 p-3 rounded mb-3">
        <p className="text-sm">{classData.description}</p>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span>Code: {classData.code}</span>
        <span>{classData.students} students</span>
      </div>
    </div>
  );
};

export default ClassCard;