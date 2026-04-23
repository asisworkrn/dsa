//Remove duplicate in sorted arrays
//Remove element is also same  as my solution just in return statement remove +1
//Leet code link problem1= https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1985937478/
//problem 2 =  https://leetcode.com/problems/remove-element/submissions/1985954206/

//For eg [0,0,1,1,1,2,2,3,3,4] =>  [0,1,2,3,4]
//My first approach i'm thinking
//So i will loop to given arr one by one and i will keep and pointer sorted array let says it will start with 0 index
//the loop will start from second index first one will be sorted always
//for first iteration
//sortedArrIndex=0 , i=1, arr[sortedArrIndex], means [0(soretd),0(currIndex),1,1,1,2,2,3,3,4]
//the loop will start from 1 so we will check arr[i=1]==arr[soretdArrIndex=0] if this is equal we will do nothing in our case 0==0
//now sortedArrIndex=0,i=2 ,arr[sortedArrIndex], means [0(soretd),0,1(currIndex),1,1,2,2,3,3,4]
//arr[i=2]==arr[soretdArrIndex=0] => 0==1 which is not true so we have found a new unique element so will first store the value of arr[currIndex] into arr[soretdArrIndex+1]
//ie arr[sortedArrIndex=1]=arr[currIndex] and i will update the sortedArrIndex+1

let sortedArrIndex = 0;
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

for (let i = 1; i < arr?.length; i++) {
  if (arr[i] != arr[sortedArrIndex]) {
    sortedArrIndex = sortedArrIndex + 1;
    arr[sortedArrIndex] = arr[i];
  }
}

console.log(sortedArrIndex + 1, "answer");
//This code worked

//Namste Dsa solution
//problem state that non-decreasing order which means it have duplicates element

let sortedArrIndex = 0;
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

for (let i = 1; i < arr?.length; i++) {
  if (arr[i] > arr[sortedArrIndex]) {
    //This line has the change
    sortedArrIndex = sortedArrIndex + 1;
    arr[sortedArrIndex] = arr[i];
  }
}

console.log(sortedArrIndex + 1, "answer");
