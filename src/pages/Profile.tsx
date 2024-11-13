import { useState } from 'react';
import { Edit2, Save } from 'lucide-react';

interface UserProfile {
  displayName: string;
  bio: string;
  avatar: string;
}

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    displayName: 'John Doe',
    bio: 'SRM Student | Tech Enthusiast',
    avatar: 'src/face/user.jpeg'
  });

  function handleSave() {
    setEditing(false);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Profile</h2>
          <button
            onClick={() => editing ? handleSave() : setEditing(true)}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors"
          >
            {editing ? (
              <>
                <Save className="w-5 h-5" />
                Save
              </>
            ) : (
              <>
                <Edit2 className="w-5 h-5" />
                Edit
              </>
            )}
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-primary"
            />
            {editing && (
              <input
                type="text"
                value={profile.avatar}
                onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}
                className="flex-1 p-2 border rounded"
                placeholder="Avatar URL"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <p className="text-lg">jn@31</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Display Name
            </label>
            {editing ? (
              <input
                type="text"
                value={profile.displayName}
                onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                className="w-full p-2 border rounded"
                placeholder="Your name"
              />
            ) : (
              <p className="text-lg">{profile.displayName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            {editing ? (
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Tell us about yourself"
              />
            ) : (
              <p className="text-gray-600">{profile.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}