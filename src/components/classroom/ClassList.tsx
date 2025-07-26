import React, { useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext'; // Using your hook
import { ClassCard } from './ClassCard';
import { CreateClass } from './CreateClass';
import { JoinClass } from './JoinClass';
import { useNavigate } from 'react-router';
import { Button } from '../ui/button';

export const ClassList: React.FC = () => {
  const { getUserClasses } = useAuthContext(); // Using your custom hook
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const userClasses = getUserClasses();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Classes</h2>
        <div className="space-x-2">
          <Button>
            Join Class
          </Button>
          <Button onClick={() => setShowCreateModal(true)}>
            Create Class
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userClasses.map(classRoom => (
          <ClassCard
            key={classRoom.id}
            classRoom={classRoom}
            onClick={() => navigate(`/class/${classRoom.id}`)}
          />
        ))}
        
        {userClasses.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No classes yet. Create or join a class to get started!</p>
          </div>
        )}
      </div>

      <CreateClass
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
      
      <JoinClass
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
      />
    </div>
  );
};