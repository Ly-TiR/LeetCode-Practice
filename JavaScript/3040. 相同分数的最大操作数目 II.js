/**
 * 给你一个整数数组 nums ，如果 nums 至少 包含 2 个元素，你可以执行以下操作中的 任意 一个：

选择 nums 中最前面两个元素并且删除它们。
选择 nums 中最后两个元素并且删除它们。
选择 nums 中第一个和最后一个元素并且删除它们。
一次操作的 分数 是被删除元素的和。

在确保 所有操作分数相同 的前提下，请你求出 最多 能进行多少次操作。

请你返回按照上述要求 最多 可以进行的操作次数。
 */

//考点: 区间动态规划  记忆化memoization
var maxOperations = function(nums) {
  const n = nums.length;
  if (n < 2) return 0;
  let memo = Array.from(nums,()=>Array(n).fill(-1))
  const dfs = (left, right, target) => {
    if (left >= right) return 0;
    if(memo[left][right]!=-1) return memo[left][right]
    let res = 0;
    if (nums[left] + nums[left + 1] === target) {
      res = Math.max(res, 1 + dfs(left + 2, right, target));
    }
    if (nums[right - 1] + nums[right] === target) {
      res = Math.max(res, 1 + dfs(left, right - 2, target));
    }
    if (nums[left] + nums[right] === target) {
      res = Math.max(res, 1 + dfs(left + 1, right - 1, target));
    }
    memo[left][right] = res;
    return res;
  };
  let result1 = dfs(2, n - 1, nums[0] + nums[1]);
  let result2 = dfs(0, n - 3, nums[n - 1] + nums[n - 2]);
  let result3 = dfs(1, n - 2, nums[0] + nums[n - 1]);
  return Math.max(result1, result2, result3)+1;
};
const nums = [3, 2, 1, 2, 3, 4];
console.log(maxOperations(nums)); //3
