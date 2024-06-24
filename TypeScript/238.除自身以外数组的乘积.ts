/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请 不要使用除法，且在 O(n) 时间复杂度内完成此题
 */
//思路:前缀和  * 后缀和
function productExceptSelf(nums: number[]): number[] {
    let len = nums.length;
    if(len ==1) return [nums[0]];
    let ans:number[] =  Array(len).fill(1);
    let prefix = 1,suffix = 1;
    for(let i = 0;i<len;i++){
        ans[i]*=prefix;
        ans[len-1-i]*=suffix;
        prefix*=nums[i];
        suffix*=nums[len-1-i];
    }
    return ans;
};

const nums = [-1,1,0,-3,3]
console.log(productExceptSelf(nums)) // [0,0,9,0,0]