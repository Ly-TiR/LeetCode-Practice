//考点：数组、指针、双指针

/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

  *请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 */

function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 0;
  while (left < nums.length) {
    if (nums[left] !== 0) {
      nums[right++] = nums[left];
    }
    left++;
  }
  while (right < nums.length) {
    nums[right] = 0;
    right++;
  }
}

const nums = [1, 0, 3, 0, 12];
moveZeroes(nums)
console.log(nums); // [1,3,12,0,0];
