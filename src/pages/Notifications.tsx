import { useState } from 'react';
import { Bell } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow';
  content: string;
  read: boolean;
  createdAt: Date;
}

const DEMO_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'like',
    content: 'John Doe liked your post',
    read: false,
    createdAt: new Date(),
  },
  {
    id: '2',
    type: 'comment',
    content: 'Jane Smith commented on your post',
    read: true,
    createdAt: new Date(Date.now() - 3600000),
  },
];

export default function Notifications() {
  const [notifications] = useState<Notification[]>(DEMO_NOTIFICATIONS);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-primary">Notifications</h2>
        </div>

        <div className="space-y-4">
          {notifications.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No notifications yet</p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border ${
                  notification.read ? 'bg-white' : 'bg-blue-50'
                }`}
              >
                <p className="text-gray-800">{notification.content}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {formatDistanceToNow(notification.createdAt, { addSuffix: true })}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}