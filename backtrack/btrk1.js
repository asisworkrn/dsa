//subsets of array
// [1,2,3]
//For all susbset we will start with empty array at top as root []
//now we can add [1] [2] [3] in the first empty array
//now we are at level [1] here because we left [2,3 from the original array] which are right side of 1 so we can add both (this step is to remove duplicate)
//[1,2] [1,3]
//now [1,2] we can add 3 which is left from original array to right of two
//[1,2,3] now this part is done
//for [1,3]. we can not or should not add 2 because it is not present inside the original because after 3 we don't have any value to right of it so
//if we add this 2 it will behave as duplicate as we have already added inside our ans
// now for [2] we can add only 3 it will become
//[2,3]

//and at last we can only add [3]

//solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     let res=[]

//     let backtrack =(path,start)=>{
//         res.push([...path])

//      for(let i=start;i<nums.length;i++){
//         path.push(nums[i])
//         backtrack(path,i+1)
//         path.pop()
//      }
//     }

//     backtrack([],0)
//     return res

// };

//2. Combination
//Solution: https://leetcode.com/problems/combinations/

//3.Permutation
//Solution: https://leetcode.com/problems/permutations/submissions/2086525110/

//4.Subset -11
//[1,2,2]
//approach should be like this if we have adjancent value same so here the above example arr[1],arr[2] is same we will skip one of them
//that is arr[2]
//rest of the code remain same but this will only be done when we are looping and already taken first2
//But to make values adjacent we need to sort at the top
//Solution:
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  let bt = (path, start) => {
    res.push([...path]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i - 1] == nums[i]) continue;

      path.push(nums[i]);
      bt(path, i + 1);
      path.pop();
    }
  };

  bt([], 0);

  return res;
};

//5.Combination sum
//We will put target at top in tree
//then choose each no. 1 by 1  and substract and check till the node become zero then the path is your answer
//[2,3,5] tar=8
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (arr, target) {
  let res = [];

  let bt = (remainingSum, path, start) => {
    if (remainingSum == 0) {
      res.push([...path]);
    }

    if (remainingSum <= 0) return;

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      bt(remainingSum - arr[i], path, i);
      path.pop();
    }
  };

  bt(target, [], 0);
  return res;
};
