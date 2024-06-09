/**
 * 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。

求所能获得硬币的最大数量。
 */

function maxCoins(nums: number[]): number {
  const len = nums.length;
  const arr = Array(len + 2).fill(1);
  for(let i = 0;i<len;i++){
    arr[i+1] = nums[i];
  }

  const dp:number[][] = Array.from({length:len+2}, ()=>Array(len+2).fill(0));
  for(let i = len-1;i>=0;i--){
    for(let j = i+2;j<=len+1;j++){
      for(let k = i+1;k<j;k++){
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + arr[i]*arr[k]*arr[j]);
      }
    }
  }
  return dp[0][len+1];
};

const nums = [3,1,5,8];
console.log(maxCoins(nums)); // 167