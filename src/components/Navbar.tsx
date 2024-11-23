import { Briefcase, Trophy, User, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">ConQuest</span>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Cases</Link>
              <Link to="/leaderboard" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Leaderboard</Link>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Discussion</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Resources</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-blue-50 rounded-full">
              <Trophy className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">450 pts</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-50 rounded-full">
              <BarChart3 className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">5 day streak</span>
            </div>
            <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}