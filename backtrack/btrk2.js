//Combination sum 2
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

//Combination 3
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
