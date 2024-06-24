// 1.两数之和
function twoSum(nums: number[], target: number): number[] {
  let hashMap:Map <number,number> = new Map();
  let result:number[] = [];
  let index:number|undefined;
  for(let i = 0;i<nums.length;i++){
    index = hashMap.get(target-nums[i]);
    if(index!==undefined){
      result = [index,i];
    }
    hashMap.set(nums[i],i);
  }
  return result;
};
