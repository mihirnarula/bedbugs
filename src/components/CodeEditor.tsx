import { Play, ChevronDown } from 'lucide-react';

export default function CodeEditor() {
  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              JavaScript <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          <button className="inline-flex items-center px-4 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
            <Play className="h-4 w-4 mr-1" /> Run
          </button>
        </div>
      </div>
      <div className="flex-1 bg-[#1e1e1e] text-white p-4 font-mono text-sm">
        <pre className="whitespace-pre-wrap">
{`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Write your code here
    
}`}</pre>
      </div>
    </div>
  );
}