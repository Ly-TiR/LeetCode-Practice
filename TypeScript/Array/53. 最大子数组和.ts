//考点：数组操作  记忆化memoization

/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组是数组中的一个连续部分
 */

function maxSubArray(nums: number[]): number {
  if(nums.length==1) return nums[0];
  const memo: number[] = [];
  memo[0] = nums[0];
  let max = nums[0];

  for(let i = 1;i<nums.length;i++){
    memo[i] = Math.max(nums[i],memo[i-1]+nums[i]);
    max = Math.max(max,memo[i])
  }
  return max;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));  //6