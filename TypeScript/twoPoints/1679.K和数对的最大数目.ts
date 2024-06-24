/**
 * 给你一个整数数组 nums 和一个整数 k 。

每一步操作中，你需要从数组中选出和为 k 的两个整数，并将它们移出数组。

返回你可以对数组执行的最大操作数。
 */

function maxOperations(nums: number[], k: number): number {
  let cnt = 0;
  const hashMap:Map<number,number|undefined> = new Map();
  for(let i = 0; i < nums.length; i++){
    const target = hashMap.get(k-nums[i]);
    if(target){
      cnt++;
      hashMap.set(k-nums[i],target-1);
    }else{
      hashMap.set(nums[i],(hashMap.get(nums[i])||0)+1);
    }
  }
  return cnt;
};

const nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4];
const k = 2;
console.log(maxOperations(nums, k)); // 2