import React, { useState } from 'react';
import type { ClassData } from './ClassCard';
import type { PostData } from '../posts/PostCard';
import StreamTab from '../posts/StreamTab';
import ClassworkTab from '../tabs/ClassworkTab';
import PeopleTab from '../tabs/PeopleTab';
import GradesTab from '../tabs/GradesTab';
import ClassHeader from './ClassHeader';

interface ClassInterfaceProps {
  classData: ClassData;
  posts?: PostData[];
  onBack: () => void;
}

const ClassInterface: React.FC<ClassInterfaceProps> = ({ 
  classData, 
  posts = [], 
  onBack 
}) => {
  const [activeTab, setActiveTab] = useState('stream');

  const handleCreateAssignment = () => {
    console.log('Create assignment clicked');
    // Add your create assignment logic here
  };

  const handleCreateMaterial = () => {
    console.log('Create material clicked');
    // Add your create material logic here
  };

  const handleCreateAnnouncement = () => {
    console.log('Create announcement clicked');
    // Add your create announcement logic here
  };

  const handlePostMenuClick = (postId: number) => {
    console.log('Post menu clicked:', postId);
    // Add your post menu logic here
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'stream':
        return (
          <StreamTab 
            posts={posts}
            onCreateAssignment={handleCreateAssignment}
            onCreateMaterial={handleCreateMaterial}
            onCreateAnnouncement={handleCreateAnnouncement}
            onPostMenuClick={handlePostMenuClick}
          />
        );
      case 'classwork':
        return <ClassworkTab onCreateAssignment={handleCreateAssignment} />;
      case 'people':
        return <PeopleTab classData={classData} />;
      case 'grades':
        return <GradesTab onCreateAssignment={handleCreateAssignment} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ClassHeader 
        classData={classData}
        activeTab={activeTab}
        onBack={onBack}
        onTabChange={setActiveTab}
      />
      
      <div className="max-w-4xl mx-auto p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ClassInterface;