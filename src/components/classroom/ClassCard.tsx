import { getRandomDarkColor } from '@/lib/utils';
import type { ClassData } from '@/types';
import React from 'react';



interface ClassCardProps {
  classData: ClassData
}


const ClassCard: React.FC<ClassCardProps> = ({ classData }) => {
  console.log(classData)
  return (
    <div
      className="rounded-lg p-4 text-white bg-gray-600 cursor-pointer hover:opacity-90 transition-opacity flex flex-col"
      style={{ background: getRandomDarkColor() }}
    >
      <div className="mb-4 grow-1">
        <h3 className="text-xl font-semibold mb-1">{classData?.name}</h3>
        <p className="text-sm opacity-90">{classData?.teacher}</p>
      </div>
      <div className=" bg-opacity-10 p-2 bg-[#fafbfb33] rounded mb-3 
      ">
        <p className="text-sm ">{classData?.description}</p>
      </div>
      <div className="flex justify-between items-center text-sm ">
        <span>Code: {classData?.code}</span>
      </div>
    </div>
  );
};

export default ClassCard;