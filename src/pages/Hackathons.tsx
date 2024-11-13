import { useState } from 'react';
import { Calendar, Users, Trophy, MapPin, Clock, ArrowRight, Search } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Hackathon {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  mode: 'online' | 'offline' | 'hybrid';
  teamSize: string;
  prizePool: string;
  image: string;
  registrationDeadline: Date;
  registered: boolean;
}

const DEMO_HACKATHONS: Hackathon[] = [
  {
    id: '1',
    title: 'SRM TechFest 2024',
    description: 'Build innovative solutions for smart cities and sustainable development.',
    date: new Date('2024-04-15'),
    location: 'SRM Institute of Science and Technology',
    mode: 'offline',
    teamSize: '2-4',
    prizePool: '₹1,00,000',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    registrationDeadline: new Date('2024-04-01'),
    registered: false
  },
  {
    id: '2',
    title: 'CodeCraft Virtual Hackathon',
    description: 'Create cutting-edge web applications using modern technologies.',
    date: new Date('2024-05-01'),
    location: 'Virtual Event',
    mode: 'online',
    teamSize: '1-3',
    prizePool: '₹50,000',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    registrationDeadline: new Date('2024-04-20'),
    registered: true
  }
];

export default function Hackathons() {
  const [hackathons] = useState<Hackathon[]>(DEMO_HACKATHONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState<'all' | 'online' | 'offline' | 'hybrid'>('all');

  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesSearch = hackathon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hackathon.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMode = selectedMode === 'all' || hackathon.mode === selectedMode;
    return matchesSearch && matchesMode;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Upcoming Hackathons</h1>
        <p className="text-gray-600">Discover exciting hackathons and build amazing projects with your peers.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search hackathons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'online', 'offline', 'hybrid'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setSelectedMode(mode)}
              className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                selectedMode === mode
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredHackathons.map((hackathon) => (
          <div
            key={hackathon.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:border-primary transition-colors group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={hackathon.image}
                alt={hackathon.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  hackathon.mode === 'online'
                    ? 'bg-green-100 text-green-800'
                    : hackathon.mode === 'offline'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {hackathon.mode}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{hackathon.title}</h3>
              <p className="text-gray-600 mb-4">{hackathon.description}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{hackathon.date.toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{hackathon.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Team Size: {hackathon.teamSize}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Trophy className="w-5 h-5 mr-2" />
                  <span>Prize Pool: {hackathon.prizePool}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Registration Deadline: {formatDistanceToNow(hackathon.registrationDeadline, { addSuffix: true })}</span>
                </div>
              </div>

              <button
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  hackathon.registered
                    ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary-hover'
                }`}
                disabled={hackathon.registered}
              >
                <span>{hackathon.registered ? 'Registered' : 'Register Now'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}