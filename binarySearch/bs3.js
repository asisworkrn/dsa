//1. Single Element in a Sorted Array
//[1,1,2,3,3,4,4,8,8]

//Approach find mid then check if pair exist on left by doing arr[mid] == arr[mid-1]
//if pair on left then check two thing after skipping pair value find odd & even if odd is also on left then no. lies on left side
//if odd on right side then no lies on right side
//if odd on left then do r=m+2 skipping the pair value
//if odd on right then do l=m+1

//if pair on right exist do arr[mid]==arr[mid+1]
//now find odd on left or right
//if odd on left  means no lies on left ie do r=m-1
//if odd on right means no. lies n right then do l=m+2 skipping pair

//if the above two fails we do not found pair at right or left then
//arr[mid] is your answer

//Leetcode solution: https://leetcode.com/problems/single-element-in-a-sorted-array/description/

//2. Find K Closest Elements
//[1,1,2,3,3,4,5,5] k=4(range) x=3(closest to this)

//we will use sliding window with bny-search find mid first, then
//check if arr[mid+k]-x < arr[mid]-x  this means move your window to right side
//l=m+1 but check if after shifting it should not goes past the k the remaining array should be >= k

//if opposite is true then do r=m because m can be in the range of this
//when l==r then it gives the starting index of answer
