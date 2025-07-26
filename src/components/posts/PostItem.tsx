import React from 'react';
import { formatDate, getInitials } from '../../urils/helpers';
import type { Post } from '../../types';

interface PostItemProps {
  post: Post;
}

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const getPostIcon = () => {
    switch (post.type) {
      case 'announcement': return '📢';
      case 'assignment': return '📝';
      case 'material': return '📚';
      default: return '📄';
    }
  };

  const getPostTypeColor = () => {
    switch (post.type) {
      case 'announcement': return 'bg-blue-100 text-blue-800';
      case 'assignment': return 'bg-green-100 text-green-800';
      case 'material': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-4">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
            {getInitials(post.authorName)}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPostTypeColor()}`}>
                {getPostIcon()} {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
              </span>
            </div>
            <span className="text-sm text-gray-500">{formatDate(post.createdAt)}</span>
          </div>
          
          <p className="text-sm text-gray-600 mb-2">by {post.authorName}</p>
          
          <div className="text-gray-900">
            <p className="whitespace-pre-wrap">{post.content}</p>
          </div>
          
          {post.attachments && post.attachments.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments:</h4>
              <div className="space-y-1">
                {post.attachments.map((attachment, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-blue-600 hover:text-blue-800 text-sm block"
                  >
                    📎 {attachment}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};