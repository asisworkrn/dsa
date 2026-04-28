//1.sqrt of no
//25 is no.   so in mathematics if your x < 2 then sqrt will be x ie 0,1
//and if x>= 2 then sqrt will lie between 2,x/2  for example x=25 sqrt will be between 2,12 which is true it is 5
//Leet code solution. link: https://leetcode.com/problems/sqrtx/submissions/1990006733/

//How to write middle effectively to avoid overflow in some language because we have bit left value & right value and when we add them it goes out of range of assigned max value
//to int so use like this

//mid= l + (r-l)/2

//IMP
//2. Sorted rotated array find target
//let arr= [4,5,6,7,8,0,1,2,3]. for if we take this example and check l=0index r=8index m = 4 ie 8 in our case  target =6
//we will check one thing that our left part is forted or right part is sorted now
//if(arr[m]>arr[l]) means left part is sorted
//then inside this if we will check one more thing that  if(target<arr[m] && target >=arr[l]){
//} this means the target will between l-m so will reduce our array as r=m-1
//if this is false we will do opposite l=m+1

//Now simlarly if my right is sorted
//if(arr[l]>arr[mid]) right sorted
//if(target > arr[m] && target <=arr[r]){
//}this means target between m-r so we do l=m+1
//else we will do r=m-1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (target == nums[mid]) {
      return mid;
    } else if (nums[l] <= nums[mid]) {
      if (target < nums[mid] && target >= nums[l]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if (nums[l] >= nums[mid]) {
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
};
