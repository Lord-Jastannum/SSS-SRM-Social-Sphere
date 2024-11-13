import { MessageCircle, Heart, Share2 } from 'lucide-react';
import type { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-blue-100 hover:border-blue-200 transition-colors">
      <div className="flex items-center space-x-3 mb-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full border-2 border-accent"
        />
        <div>
          <h3 className="font-semibold text-primary-hover">{post.author.name}</h3>
          <p className="text-sm text-gray-500">@{post.author.username}</p>
        </div>
      </div>
      
      <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>
      
      <div className="flex items-center justify-between text-gray-500 border-t pt-4">
        <button className="flex items-center space-x-2 hover:text-primary transition-colors group">
          <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-primary transition-colors group">
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>{post.comments.length}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-primary transition-colors group">
          <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}