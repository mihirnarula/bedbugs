import { CheckCircle2, XCircle } from 'lucide-react';

export default function TestCases() {
  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Test Cases</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Test Case 1</span>
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-sm text-gray-600">
              <p>Input: nums = [2,7,11,15], target = 9</p>
              <p>Expected: [0,1]</p>
              <p className="text-green-600">Output: [0,1]</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Test Case 2</span>
              <XCircle className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-sm text-gray-600">
              <p>Input: nums = [3,2,4], target = 6</p>
              <p>Expected: [1,2]</p>
              <p className="text-red-600">Output: null</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}