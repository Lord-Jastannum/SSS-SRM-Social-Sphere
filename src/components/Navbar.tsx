import { Bell, Home, MessageCircle, Search, User, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-primary to-primary-hover text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-accent text-2xl font-bold group-hover:text-accent-hover transition-colors">SSS</span>
            <span className="hidden md:block text-sm font-medium">SRM Social Sphere</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-accent transition-colors">
              <Home className="w-6 h-6" />
            </Link>
            <Link to="/messages" className="hover:text-accent transition-colors">
              <MessageCircle className="w-6 h-6" />
            </Link>
            <Link to="/notifications" className="hover:text-accent transition-colors">
              <Bell className="w-6 h-6" />
            </Link>
            <Link to="/hackathons" className="hover:text-accent transition-colors">
              <Code2 className="w-6 h-6" />
            </Link>
            <Link to="/search" className="hover:text-accent transition-colors">
              <Search className="w-6 h-6" />
            </Link>
            <Link to="/profile" className="hover:text-accent transition-colors">
              <User className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}