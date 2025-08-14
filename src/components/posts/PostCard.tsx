import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export interface MessageData {
  _id: string;
  classId: string;
  message: string;
  time: string; // ISO date string
}

interface MessageCardProps {
  post: MessageData;
  onMenuClick?: (postId: string) => void;
}

const PostCard: React.FC<MessageCardProps> = ({ post, onMenuClick }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          {/* Circle avatar with first letters of classId */}
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
            {/* {post.classId.slice(0, 2).toUpperCase()} */}
          </div>
          <div>
            <p className="font-medium text-gray-900">{post.classId}</p>
            <p className="text-sm text-gray-500">
              {new Date(post.time).toLocaleString()}
            </p>
          </div>
        </div>
        <button
          onClick={() => onMenuClick?.(post._id)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <MoreHorizontal className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      <div className="mb-3">
        <p className="text-gray-700">{post.message}</p>
      </div>
    </div>
  );
};

export default PostCard;
