import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export interface PostData {
  id: number;
  type: 'assignment' | 'material' | 'announcement';
  title: string;
  description: string;
  dueDate?: string;
  author: string;
  timestamp: string;
}

interface PostCardProps {
  post: PostData;
  onMenuClick?: (postId: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onMenuClick }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
            {post.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-medium text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <button 
          onClick={() => onMenuClick?.(post.id)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <MoreHorizontal className="w-4 h-4 text-gray-500" />
        </button>
      </div>
      
      <div className="mb-3">
        <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-700">{post.description}</p>
        {post.dueDate && (
          <div className="mt-2 inline-block bg-red-50 text-red-700 px-2 py-1 rounded text-sm">
            {post.dueDate}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;