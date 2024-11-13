import { useState } from 'react';
import { Send } from 'lucide-react';

interface CreatePostProps {
  onSubmit: (content: string) => void;
}

export default function CreatePost({ onSubmit }: CreatePostProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 border border-blue-100 hover:border-blue-200 transition-colors">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="What's on your mind?"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={!content.trim()}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Post</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}