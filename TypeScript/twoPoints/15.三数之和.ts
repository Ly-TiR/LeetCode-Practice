//犹豫不决先排序，用于定位已计算元素的指针pos,令取两个区间指针start,end 步步逼近用于求解三数和

/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。
 */

function threeSum(nums: number[]): number[][] {
  let len = nums.length;
  if(len < 3) return [];
  nums.sort((a, b) => a - b);
  let res: number[][] = [];
  for(let pos=0;pos<len-2;pos++){
    if(nums[pos]>0) break;
    if(pos-1 >= 0 && nums[pos] === nums[pos-1]) continue;
    let start = pos+1,end = len-1;
    while(start<end){
      let sum = nums[pos]+nums[start]+nums[end];
      if(sum === 0){
        res.push([nums[pos],nums[start],nums[end]]);
        start++;
        end--;
        while(start<end&&nums[start] === nums[start-1]){
          start++;
        }
        while(start<end&&nums[end] === nums[end+1]){
          end--;
        }
      }else if(sum < 0){
        start++;
      }else{
        end--;
      }
    }
  }
  return res;
};
const nums = [-1, 0, 1, 2, -1, -4];  // [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums));