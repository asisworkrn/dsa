//Two city destination
//costs =
// [[10,20],[30,200],[400,50],[30,20]]
//20-10=10.  200-30=170 50-400= -350 20-30=-10 flying two first so acc to the above calculation A-10 A-30 B-50 B-20

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
  let n = costs.length / 2;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = ans + costs[i][0];
  }
  for (let i = n; i < 2 * n; i++) {
    ans = ans + costs[i][1];
  }
  return ans;
};

//Stock buy sell-II
//prices = [7,1,5,3,6,4]
//we will loop in array and check p[i-1]<p[i]
//Then we will add that in profit
//solution
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0;

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - prices[i - 1];
    if (profit > 0) {
      ans += profit;
    }
  }
  return ans;
};

//3)Insert interval
//Break this problem into three small parts
//All non overlapping interval left side add that to ans
//Now second is overlapping intervals we will do some merge and add them to ans
//And at last non overlapping interval at right side add that to ans
//Solution
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (arr, x) {
  let ans = [];

  //left non overlapping intervals
  let i = 0;
  //end time arr[i][1]
  while (i < arr.length && arr[i][1] < x[0]) {
    ans.push(arr[i]);
    i++;
  }

  //Overlapping

  while (i < arr.length && arr[i][0] <= x[1]) {
    x[0] = Math.min(x[0], arr[i][0]);
    x[1] = Math.max(x[1], arr[i][1]);
    i++;
  }
  ans.push(x);

  //Right non overlapping intervals
  while (i < arr.length) {
    ans.push(arr[i]);
    i++;
  }
  return ans;
};
