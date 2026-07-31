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
