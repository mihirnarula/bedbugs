import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

export default function Leaderboard() {
  const topUsers = [
    { rank: 1, name: 'Sarah Chen', points: 2450, streak: 15, solved: 45 },
    { rank: 2, name: 'Michael Brown', points: 2280, streak: 12, solved: 42 },
    { rank: 3, name: 'Emma Wilson', points: 2150, streak: 8, solved: 38 },
  ];

  const users = [
    { rank: 4, name: 'James Smith', points: 1950, streak: 5, solved: 35 },
    { rank: 5, name: 'Lisa Johnson', points: 1820, streak: 7, solved: 33 },
    { rank: 6, name: 'David Lee', points: 1760, streak: 4, solved: 30 },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Leaderboard</h1>
          <p className="text-gray-600">Top consultants this month</p>
        </div>

        {/* Top 3 Users */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {topUsers.map((user, index) => (
            <div key={user.rank} className={`bg-white rounded-lg shadow-sm p-6 
              ${index === 0 ? 'border-2 border-yellow-400' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {index === 0 ? (
                    <Trophy className="h-6 w-6 text-yellow-400" />
                  ) : index === 1 ? (
                    <Medal className="h-6 w-6 text-gray-400" />
                  ) : (
                    <Award className="h-6 w-6 text-orange-400" />
                  )}
                  <span className="text-2xl font-bold">#{user.rank}</span>
                </div>
                <span className="text-2xl font-bold text-blue-600">{user.points}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{user.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{user.solved} cases solved</span>
                <span>{user.streak} day streak</span>
              </div>
            </div>
          ))}
        </div>

        {/* Other Rankings */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold">All Rankings</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {users.map(user => (
              <div key={user.rank} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-gray-500">#{user.rank}</span>
                    <div>
                      <h3 className="font-medium">{user.name}</h3>
                      <p className="text-sm text-gray-600">{user.solved} cases solved</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-blue-600">{user.points} pts</div>
                    <div className="text-sm text-gray-600">{user.streak} day streak</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}