//1. Two Sum
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

//Approach le can keep a map which will have the nums[i] with index value 0
//now loop through array now the answer will be found if we have some value arr[x] + arr[y]=target
//this means diff=target-arr[i] if our arr[x]=arr[i] and if we subtract that from our target then we might get value that is present inside our map if we found that and our condition becomes true means
//we have foudn the two index otherwise we return -1-1

//2. Two sum wth sorted value
//this is more simple because we can keep two pointers l =0 r=n-1
//run while loop arr[l]+arr[r]>target means we need to decrease r-- otherwise do l++if l crosses r and we still not found target then return -1

//3.Find index of first occurence
//sliding window
//sol: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/1991682160/

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function(haystack, needle) {

//     for(let i=0;i<=haystack.length-needle.length;i++){
//         let j=0
//         for(j=0;j<needle.length;j++){
//           if(haystack[i+j]!=needle[j]){
//             break
//           }
//         }
//         if(j==needle.length){
//             return i
//         }
//     }
//     return -1
// };

//4.KMP algo
//string searching algo
//we have two string for above quest haystack & needle
//now for needle string we need to findout

//LPS (longest proper prefix and proper suffix)
//needle="onions"
//lpsArr=[0,0,0,1,2,0]
//h="onionionsky"
//n="onions"
//keep point i=h[0] and j=n[0]
//now if both matches move i++ j++
//now acc to our case it will goes to i=h[4] = j=n[4] again plus plus now i=h[5] != j=n[5]

//if not equal then our lps array will come onto play now j will point to lpsArr[j-1]=2 which is 2 jo j will start searching again from index 2
//again matching will start i[5]==j[2] => i[6]==j[3] ==> i[7]==j[4] ==> i[8]==j[5] now j++ will end this means we found out our string so return i-needle.length,
//it is the answer
