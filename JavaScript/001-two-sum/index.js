/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0, m = {}, l = nums.length; i < l; i++) {
    const value = nums[i];
    if (m[value] !== undefined) return [m[value], i];
    m[target - value] = i;
  }

  throw new Error('No two sum solution');
}

module.exports = twoSum;
