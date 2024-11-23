import React from 'react';
import Split from 'react-split';
import { Building2, Clock, BarChart } from 'lucide-react';

export default function CaseStudy() {
  return (
    <div className="flex-1">
      <Split 
        className="flex h-full"
        sizes={[40, 60]}
        minSize={300}
        gutterSize={4}
        gutterStyle={() => ({
          backgroundColor: '#e5e7eb'
        })}
      >
        {/* Case Description */}
        <div className="h-full overflow-y-auto px-6 py-4">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 text-gray-600 mb-4">
              <Building2 className="h-5 w-5" />
              <span>Tech Startup X</span>
              <span>•</span>
              <Clock className="h-5 w-5" />
              <span>45 min</span>
            </div>
            
            <h1 className="text-2xl font-bold mb-4">Market Entry Strategy</h1>
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-2.5 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Medium</span>
              <span className="flex items-center text-gray-600">
                <BarChart className="h-5 w-5 mr-1" />
                234 completions
              </span>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-xl font-semibold mb-3">Background</h2>
              <p className="mb-4">
                Tech Startup X is a successful SaaS company in the project management space, 
                currently operating in North America. They're considering expanding into the 
                European market but face several challenges and uncertainties.
              </p>

              <h2 className="text-xl font-semibold mb-3">The Challenge</h2>
              <p className="mb-4">
                As a strategic consultant, you need to help Tech Startup X develop a comprehensive 
                market entry strategy for Europe. Consider market size, competition, regulatory 
                requirements, and potential entry modes.
              </p>

              <h2 className="text-xl font-semibold mb-3">Key Considerations</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Market size and growth potential in different European countries</li>
                <li>Competitive landscape and market saturation</li>
                <li>Regulatory requirements and GDPR compliance</li>
                <li>Localization needs and cultural differences</li>
                <li>Resource requirements and financial projections</li>
              </ul>

              <h2 className="text-xl font-semibold mb-3">Required Output</h2>
              <p>
                Provide a structured analysis and recommendation including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Market entry strategy</li>
                <li>Target market selection</li>
                <li>Entry mode recommendation</li>
                <li>Implementation timeline</li>
                <li>Risk assessment and mitigation strategies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution Area */}
        <div className="flex flex-col h-full">
          <div className="border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Framework Library
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Add Diagram
                </button>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                Submit Solution
              </button>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-6">
            <textarea 
              className="w-full h-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your solution here..."
            />
          </div>
        </div>
      </Split>
    </div>
  );
}