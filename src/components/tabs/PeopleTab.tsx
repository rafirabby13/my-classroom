import React from 'react';
import type { ClassData } from '../classroom/ClassCard';

interface PeopleTabProps {
  classData: ClassData;
  students?: Array<{ id: number; name: string; email: string }>;
}

const PeopleTab: React.FC<PeopleTabProps> = ({ classData, students = [] }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Teachers</h3>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
            {classData.teacher.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="font-medium">{classData.teacher}</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Students</h3>
        {students.length > 0 ? (
          <div className="space-y-3">
            {students.map((student) => (
              <div key={student.id} className="flex items-center">
                <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.email}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">{classData.students} students enrolled</p>
        )}
      </div>
    </div>
  );
};

export default PeopleTab;