//Merge two sorted arrays

//APPROACH 1(Needs extra space)
//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Aproach is create copy of nums1 =[1,2,3]. & num2[2,5,6] as it is
//now keep two pointers p1 for copyNums1 and p2 for nums2
//check p1<p2 in their respective arrays if p1<p2 then in original store p1 nums1[p1,] and p1++
//if p1>p2 original nums store p2 nums1[p1,p2,] p2++ and when any of these will inetarte till last copy the remaing array from that pointer to end in nums original

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

let nums1Copy = nums1.slice(0, m);
let p1 = 0;
let p2 = 0;

for (let i = 0; i < m + n; i++) {
  if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
    nums1[i] = nums1Copy[p1];
    p1++;
  } else {
    nums1[i] = nums2[p2];
    p2++;
  }
}

console.log(nums1, "answer");

//APPROACH 2
//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

//Toh hum nums1 ko fill krne k liye ek pointer rkhenge which will start from lastSortPointer = m+n-1
//aur p1 pointer rkhenge at m-1 and p2 rkhenge at n-1
// so p1 point krega 3 ko hmare case mein and p2 point krega nums2 k last element ko
//now hum check krenge p1<p2 agr p2 bdda hua toh woh jaega lastSortPointer pr then lastSortPointer-- aur p2-- krenge
//same agr p1 bdha hua toh p1 jaega lastSortPointer pr then lastSortPointer-- aur p1-- krenge
//abb ye krte krte hmare paas wk case jaega jb 2 cheezein ho skti hai agr hmaara p2 khtm hojata hai it -1 pr point krta hai then hum break kr jaenge kynki hmaare pass sorted array
//hoga and second case hai p1=-1 iska mtlb humein p2 mein jitne bhi elements hai remaing unko lastSortPointer pr copy krke lastSortPointer-- and p2-- krte rehna hai till p2=-1

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};
