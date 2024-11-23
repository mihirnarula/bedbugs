import React from 'react';
import { Trophy, Target, Flame, Award, BarChart3, Clock } from 'lucide-react';

export default function Profile() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-3xl text-white font-bold">JD</span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">John Doe</h1>
              <p className="text-gray-600 mb-4">Senior Consultant • Member since Jan 2024</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">450 points</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <span className="font-medium">5 day streak</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span className="font-medium">15 badges</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress & Stats */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Progress Overview</h2>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">Cases Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">4.8</div>
                  <div className="text-sm text-gray-600">Avg. Rating</div>
                </div>
              </div>
              
              <h3 className="font-medium mb-4">Category Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Strategy</span>
                    <span className="text-gray-600">8 cases</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Operations</span>
                    <span className="text-gray-600">5 cases</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>HR & Organization</span>
                    <span className="text-gray-600">2 cases</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Completed Market Entry Strategy Case</h3>
                      <p className="text-sm text-gray-600">Scored 92/100 • Strategy Category</p>
                    </div>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements & Badges */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Achievements</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Trophy, title: 'First Win', desc: 'Complete first case' },
                  { icon: Flame, title: 'On Fire', desc: '5 day streak' },
                  { icon: BarChart3, title: 'Rising Star', desc: 'Top 10% in category' },
                  { icon: Clock, title: 'Speed Demon', desc: 'Solve under par time' },
                ].map((badge, i) => (
                  <div key={i} className="p-4 border border-gray-200 rounded-lg text-center">
                    <badge.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="font-medium text-sm mb-1">{badge.title}</div>
                    <div className="text-xs text-gray-600">{badge.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm p-6 text-white">
              <h2 className="text-lg font-semibold mb-4">Weekly Goal</h2>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>5/7 cases</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full">
                  <div className="h-2 bg-white rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              <p className="text-sm opacity-90">
                You're on track to reach your weekly goal! Keep up the great work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}