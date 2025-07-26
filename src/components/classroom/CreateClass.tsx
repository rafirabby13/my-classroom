import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { useClassroom } from '../../hooks/useClassroom';
import { generateClassCode } from '../../urils/helpers';

interface CreateClassProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateClass: React.FC<CreateClassProps> = ({ isOpen, onClose }) => {
  const { createClass, loading, error } = useClassroom();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    subject: '',
    color: '#3B82F6'
  });

  const colors = [
    '#3B82F6', '#10B981', '#EF4444', '#F59E0B', 
    '#8B5CF6', '#F97316', '#6B7280', '#14B8A6'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const classData = {
      ...formData,
      code: generateClassCode()
    };
    
    const newClass = await createClass(classData);
    if (newClass) {
      setFormData({ name: '', description: '', subject: '', color: '#3B82F6' });
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Class">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Class Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter class name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter class description"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Class Color
          </label>
          <div className="flex space-x-2">
            {colors.map(color => (
              <button
                key={color}
                type="button"
                className={`w-8 h-8 rounded-full border-2 ${
                  formData.color === color ? 'border-gray-600' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setFormData(prev => ({ ...prev, color }))}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Class'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};