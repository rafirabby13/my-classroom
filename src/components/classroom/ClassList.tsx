import React from 'react';
import ClassCard, { type ClassData } from './ClassCard';
import { Link, useLoaderData } from 'react-router';



const ClassList: React.FC= () => {

  const classes = useLoaderData()

  const handleclass = (c: ClassData) => {

    fetch(`http://localhost:5000/class/${c._id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch classes");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.error("Error fetching classes:", err);
      });


  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes?.map((classData: ClassData, i: number) => (
        <Link to={`/class/${classData._id}`} onClick={() => handleclass(classData)} key={i}>
          <ClassCard


            classData={classData}
          />
        </Link>
      ))}
    </div>
  );
};

export default ClassList;