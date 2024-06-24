// 1.两数之和
var twoSum = function(nums, target) {
  let result = [];
  let hashMap = new Map();
  for(let i = 0; i < nums.length; i++) {
    if(hashMap.has(target - nums[i])){
      result.push(hashMap.get(target - nums[i]),i);
    }
    hashMap.set(nums[i], i);
  }
  return result;
};
let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums, target)); // [0,1]