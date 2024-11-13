import { Send } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

const DEMO_MESSAGES: Message[] = [
  {
    id: '1',
    senderId: 'user1',
    content: 'Hey, how are you?',
    timestamp: new Date(),
  },
  {
    id: '2',
    senderId: 'current',
    content: 'I\'m good! How about you?',
    timestamp: new Date(),
  },
  {
    id: '3',
    senderId: 'user1',
    content: 'Just working on some assignments. Need help with the project?',
    timestamp: new Date(),
  },
  {
    id: '4',
    senderId: 'current',
    content: 'Yes, that would be great! When are you free?',
    timestamp: new Date(),
  }
];

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>(DEMO_MESSAGES);
  const [newMessage, setNewMessage] = useState('');

  function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: 'current',
      content: newMessage.trim(),
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="bg-white rounded-lg shadow-md h-[600px] flex">
        {/* Users list */}
        <div className="w-1/3 border-r">
          <div className="p-4">
            <h2 className="text-xl font-bold text-primary mb-4">Conversations</h2>
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <img
                    src="src/face/user.jpeg"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">Agam</p>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <img
                src="src/face/user.jpeg"
                alt="Current chat"
                className="w-8 h-8 rounded-full"
              />
              <p className="font-medium">jn@31</p>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.senderId === 'current' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.senderId === 'current'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-gray-100 rounded-bl-none'
                  }`}
                >
                  <p>{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.senderId === 'current'
                        ? 'text-blue-100'
                        : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}