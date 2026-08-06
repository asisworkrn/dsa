//1.Combination sum 2
//This solution is combination of combination sum & Subset-2
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (arr, target) {
  arr.sort((a, b) => a - b);
  let res = [];

  let bt = (remSum, path, start) => {
    if (remSum == 0) {
      res.push([...path]);
    }

    if (remSum <= 0) return;

    for (let i = start; i < arr.length; i++) {
      if (i > start && arr[i - 1] == arr[i]) continue;

      path.push(arr[i]);
      bt(remSum - arr[i], path, i + 1);
      path.pop();
    }
  };
  bt(target, [], 0);

  return res;
};

//2.Combination 3
//solution is combination of previous solution
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];

  let bt = (remSum, path, start) => {
    if (remSum == 0 && path.length == k) {
      res.push([...path]);
    }

    if (remSum <= 0) return;
    if (path.length == k) return;

    for (let i = start; i <= 9; i++) {
      path.push(i);
      bt(remSum - i, path, i + 1);
      path.pop();
    }
  };
  bt(n, [], 1);

  return res;
};

//3.Letter Combinations of a Phone Number
//First create letter mapping of no.s 2:"abc" etc
//now we have given digits string so we will create backtrack function which takes path and starting index of digit suppose digit is "23"
//index=0 it will start with 2 so now we will pick choices acc to digit fetched which comes out as "abc for index =0" in our case
//now we will loop to each choices letter one by one and push them in. our path and backtrack again by increasing index
//now the base condition will be path .length == digits.length  now we will have 23 map as ["a","d"] so we will join this array and push them into res
//SOLUTION:
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/2090363984/

//4. Permutation-II
//[1,1,2] because it can duplicates first step is sort
//second step is skip backtacking if previous element is same
//which means we take empth array path at start and push value so first 1 is pushed
//then when we goes to second 1 we will check if it is already their we will skip this and goes to next
//now for backtrack function we will kep empty array path and also pass choices of array along with path
//for first time it will be sorted array
//Now loop through each choices and perform backtrack path.push & pop
//for backtrack first check should be if i>0 and arr[i]==arr[i-1] which means similar adjacent value we  will continue skip backtrack
//now how we will call backtrack because it will include current path and choices left
//so after first level if we pick any value we need to slice that part away
//so we do [...arr.slice(0,i),...arr.slice(i+1)] which will eliminate the current value and merge others
//SOLUTION:
// https://leetcode.com/problems/permutations-ii/submissions/2090423352/
