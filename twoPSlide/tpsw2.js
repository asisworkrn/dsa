//1. Conatiner with most water
// [1,8,6,2,5,4,8,3,7]

//Brute force
//So we take two pointers and cals all the value and store a max amonth those
//area= mini(arr[i],arr[j]) * j-1

//Two pointer with greedy approach
//take i=0 & j=n-1
//cals area and increase the pointer i if arr[i]<arr[j]
//if arr[j]<arr[i] then reduce j

//Leetcode sol: https://leetcode.com/problems/container-with-most-water/submissions/1992304785/

//2.3 sum

//Approach sort the array then apply two sum + taking the single index  one by one apply two sum on rest of the array
//Leetcode sol: https://leetcode.com/problems/3sum/submissions/1992338882/

//3. TRAP RAIN WATER(hard)

//Approach is to traverse through array ans  findout at each level the maxivaleRight & maxivalueLeft of that index and the traip rain water cals is done by
//mini of (maxRight,maxLeft) -height of current index
//[4,2,0,3,2,5]
//[4,4,4,4,4,4]max at maxLeft
//[5,5,5,5,5,5]max at maxRight
//[0,2,4,1,2,0]//rain water can be trapped at each level
