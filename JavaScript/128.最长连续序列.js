var longestConsecutive = function(nums) {
  if(nums.length <=1) return nums.length;
  let max = 1;
  let count = 1;
  nums.sort((a,b) => a-b);
  for(let i = 1;i<nums.length;i++){
    if(nums[i] === nums[i-1]){
      continue;
    }else if(nums[i] === nums[i-1]+1){
      count++;
    }else{
      count = 1;
    }
    max = Math.max(max,count);
  }
  return max;
};