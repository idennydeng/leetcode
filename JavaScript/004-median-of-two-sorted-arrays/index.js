/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const nums = [];
  for (let i = 0, j = 0; i < nums1.length || j < nums2.length;) {
    if (i === nums1.length || nums1[i] > nums2[j]) {
      nums.push(nums2[j++]);
    } else {
      nums.push(nums1[i++]);
    }
  }

  const mid = Math.trunc(nums.length / 2);
  const median = parseInt(nums[mid], 10);
  if (nums.length % 2 === 1) return median;
  return (median + parseInt(nums[mid - 1], 10)) / 2;
}

module.exports = findMedianSortedArrays;
