import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Building2, Briefcase, Star, Clock } from 'lucide-react';

const categories = [
  { id: 'strategy', name: 'Strategy', icon: TrendingUp, count: 24 },
  { id: 'operations', name: 'Operations', icon: Building2, count: 18 },
  { id: 'hr', name: 'HR & Organization', icon: Users, count: 15 }
];

const recentCases = [
  {
    id: 1,
    title: 'Market Entry Strategy',
    company: 'Tech Startup X',
    difficulty: 'Medium',
    completions: 234,
    category: 'Strategy'
  },
  {
    id: 2,
    title: 'Supply Chain Optimization',
    company: 'Manufacturing Corp Y',
    difficulty: 'Hard',
    completions: 156,
    category: 'Operations'
  }
];

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-blue-600 font-medium">15/45</span>
                  </div>
                  <p className="text-sm text-gray-600">Cases Solved</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Star className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">450</span>
                  </div>
                  <p className="text-sm text-gray-600">Points Earned</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-purple-600 font-medium">5 days</span>
                  </div>
                  <p className="text-sm text-gray-600">Current Streak</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Cases</h2>
              <div className="space-y-4">
                {recentCases.map(caseStudy => (
                  <Link 
                    key={caseStudy.id}
                    to={`/case/${caseStudy.id}`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{caseStudy.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium
                        ${caseStudy.difficulty === 'Hard' ? 'bg-red-100 text-red-800' : 
                          caseStudy.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'}`}>
                        {caseStudy.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Building2 className="h-4 w-4 mr-1" />
                      <span>{caseStudy.company}</span>
                      <span className="mx-2">•</span>
                      <span>{caseStudy.completions} completions</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="space-y-3">
                {categories.map(category => (
                  <div key={category.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <category.icon className="h-5 w-5 text-gray-600" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{category.count} cases</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm p-6 text-white">
              <h2 className="text-lg font-semibold mb-2">Pro Tip</h2>
              <p className="text-sm opacity-90 mb-4">
                Consistent practice is key! Try to solve at least one case study daily to maintain your streak and improve your consulting skills.
              </p>
              <div className="text-sm bg-white/10 rounded-lg p-3">
                <div className="font-medium mb-1">Your Current Streak</div>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map(day => (
                    <div key={day} className="w-8 h-1 rounded-full bg-white/90"></div>
                  ))}
                  <div className="w-8 h-1 rounded-full bg-white/30"></div>
                  <div className="w-8 h-1 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}