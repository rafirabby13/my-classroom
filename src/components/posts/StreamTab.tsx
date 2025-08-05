import React from 'react';
import CreatePost from './CreatePost';
import type { PostData } from './PostCard';
import PostCard from './PostCard';

interface StreamTabProps {
  posts: PostData[];
  onCreateAssignment?: () => void;
  onCreateMaterial?: () => void;
  onCreateAnnouncement?: () => void;
  onPostMenuClick?: (postId: number) => void;
}

const StreamTab: React.FC<StreamTabProps> = ({ 
  posts, 
  onCreateAssignment, 
  onCreateMaterial, 
  onCreateAnnouncement,
  onPostMenuClick 
}) => {
  return (
    <div>
      <CreatePost 
        onCreateAssignment={onCreateAssignment}
        onCreateMaterial={onCreateMaterial}
        onCreateAnnouncement={onCreateAnnouncement}
      />
      
      <div>
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            post={post} 
            onMenuClick={onPostMenuClick}
          />
        ))}
      </div>
    </div>
  );
};

export default StreamTab;