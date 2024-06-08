//考点： 双指针

/**
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器
 */

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  while(left < right) {
    let min = Math.min(height[left], height[right]);
    res = Math.max(res, min*(right - left));
    //每次移动对应高度较小的那一边的指针
    if(height[left]<height[right]){
        left++
    }else{
        right--;
    }
  }
  return res;
};


const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height)); // 49