export interface Post {
  id: string;
  content: string;
  author: User;
  likes: number;
  comments: Comment[];
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}