import { useEffect, useRef, useState } from 'react';
import type { Post as PostType } from '../types';
import CreatePost from './CreatePost';
import Post from './Post';

const INITIAL_POSTS = [
  {
    id: '1',
    content: 'Just finished my final project! 🎉 #SRMProud',
    author: {
      id: '1',
      name: 'Agamjot Choudhary',
      username: 'suku@293',
      avatar: 'src\faces\akc.jpg',
    },
    likes: 42,
    comments: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    content: 'Exam Stress Killing meeeeee!!!!!!!!',
    author: {
      id: '1',
      name: 'Nikhil Varma',
      username: 'niki@666',
      avatar: 'src/face/user.jpeg',
    },
    likes: 42,
    comments: [],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    content: 'Great workshop on AI today at SRM! Learning new things every day. 🤖',
    author: {
      id: '2',
      name: 'Namita Nahata',
      username: 'NN77',
      avatar: 'src/face/user.jpeg',
    },
    likes: 24,
    comments: [],
    createdAt: new Date().toISOString(),
  },
];

export default function Feed() {
  const [posts, setPosts] = useState<PostType[]>(INITIAL_POSTS);
  const feedRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (feedRef.current) {
        setShowScrollTop(window.scrollY > 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewPost = (content: string) => {
    const newPost: PostType = {
      id: Date.now().toString(),
      content,
      author: {
        id: '3',
        name: 'Jatin Naik',
        username: 'jn@31',
        avatar: 'src\faces\jn.jpeg',
      },
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20" ref={feedRef}>
      <CreatePost onSubmit={handleNewPost} />
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="opacity-0 animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'forwards'
            }}
          >
            <Post post={post} />
          </div>
        ))}
      </div>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-hover transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}