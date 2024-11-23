export default function ProblemDescription() {
  return (
    <div className="h-full overflow-y-auto px-6 py-4">
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">1. Two Sum</h1>
        <div className="flex items-center space-x-4 mb-4">
          <span className="px-2.5 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">Easy</span>
          <span className="text-gray-600">Acceptance Rate: 49.2%</span>
        </div>
        <div className="prose prose-slate max-w-none">
          <p className="mb-4">
            Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
          </p>
          <p className="mb-4">
            You may assume that each input would have exactly one solution, and you may not use the same element twice.
          </p>
          <p className="mb-4">You can return the answer in any order.</p>
          
          <h3 className="text-lg font-semibold mt-6 mb-2">Example 1:</h3>
          <pre className="bg-gray-50 rounded-lg p-4 mb-4">
            <code>Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</code>
          </pre>

          <h3 className="text-lg font-semibold mt-6 mb-2">Constraints:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>2 ≤ nums.length ≤ 10⁴</li>
            <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
            <li>-10⁹ ≤ target ≤ 10⁹</li>
            <li>Only one valid answer exists.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}