/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */
function longestConsecutive(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  let max = 1;
  let count = 1;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else if (nums[i] === nums[i - 1] + 1) {
      count++;
    } else {
      count = 1;
    }
    max = Math.max(max, count);
  }
  return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4