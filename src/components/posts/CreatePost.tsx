import React, { useState } from 'react';
import { useClassroom } from '../../hooks/useClassroom';
import { Button } from '../common/Button';

interface CreatePostProps {
  classId: string;
  onPostCreated?: () => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({ classId, onPostCreated }) => {
  const { createPost, loading, error } = useClassroom();
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'announcement' as const
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const postData = {
      ...formData,
      classId
    };
    
    const newPost = await createPost(postData);
    if (newPost) {
      setFormData({ title: '', content: '', type: 'announcement' });
      setIsExpanded(false);
      onPostCreated?.();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isExpanded) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full text-left text-gray-500 hover:text-gray-700"
        >
          Share something with your class...
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Post title"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="announcement">Announcement</option>
              <option value="assignment">Assignment</option>
              <option value="material">Material</option>
            </select>
          </div>
        </div>

        <div>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Share details, instructions, or materials..."
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setIsExpanded(false);
              setFormData({ title: '', content: '', type: 'announcement' });
            }}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? 'Posting...' : 'Post'}
          </Button>
        </div>
      </form>
    </div>
  );
};