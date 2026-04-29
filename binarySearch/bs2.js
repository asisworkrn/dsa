//1. Peak element
//[1,2,1,3,5,6,4]
//we can think in this direction suppose we find the mid element m
//we can check one thing m<m+1 this means peak might be available to right side of m
//and m>m+1 this indicates that peak might be avilable to the left side of m or m can be a peak also

//2. Find mini in sorted rotated array
//[4,5,6,7,0,1,2]
//now we need to find inflection point what that means point at which the rotaion nis done so there will be one inflection point in array where the arr[m]<arr[m-1]
//if we found this point then we can return arr[m]
// now second condition to check for is if ever arr[m] <arr[l] this is means my inflection will lie between l-m-1 so. make your r to r=m-1

//But these cases will not work if our array is sorted so what we can do at top we need to check arr[l]<=arr[r] then return arr[l]
//and inside also if we reach to a point where our array becones sorted we need to pass arr[l]<arr[r]  & return arr[l]

//Leet code solution: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/1990872247/

//3. Find first & last of target in soretd array
//Find First and Last Position of Element in Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length == 0) {
    return [-1, -1];
  }

  let l = 0;
  let r = nums.length - 1;
  //First we use approach for first bad version question to find out first postion
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  if (nums[l] != target) {
    return [-1, -1];
  }
  let ansAtIndexZero = l;
  r = nums.length - 1;
  //Second we use approach for last bad version question to find out last postion
  while (l < r) {
    let mid = l + Math.ceil((r - l) / 2); //use ceil here to avoid inifite loop
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid;
    }
  }
  return [ansAtIndexZero, l];
};
