import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Hackathons from './pages/Hackathons';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/hackathons" element={<Hackathons />} />
        </Routes>
      </div>
    </Router>
  );
}