//1.Mimimum cost climbing stairs
//Approach starts with top suppose you are on top for first case [10,15,20] means at index 3 we are at top
//so minimum cost at 3 will be calulated now we need mini at 2 and mini at 1
//and min at 0 & 1 will be zero given in question
//so we can get formula as min[i] = Math.min(min[i-1]+cost[i-1],min[i-2]+cost[i-2])

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [0, 0];
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[cost.length];
};

//2.House Robber
//[2,7,9,3,1]
//so we can think like this in our example we have 5 houses so maximumRob(5) can be found out in two ways
//first is if we include value 1 that means we need to findout till maximumRob(i-2)+1 because we can not picked adjacent as per ques
//second is when we don't include 1 value we take value as  maximumrob(till value 4) which is 3 in our example
//so formula becomes
//rob[i]=Math.max(rob[i-2]+val[i],rob[i-1])

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var rob = function(val) {
//     let n = val.length
//     if(n==1) return val[0]
//     let dp=[val[0],Math.max(val[0],val[1])]
//     for(let i=2;i<n;i++){
//         dp[i]=Math.max(val[i]+dp[i-2],dp[i-1])
//     }

//     return dp[n-1]
// };

//Optimized sol
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (val) {
  let n = val.length;
  if (n == 1) return val[0];
  let p2 = (p1 = 0);
  for (let i = 2; i < n; i++) {
    let curr = Math.max(val[i] + p2, p1);
    let temp = p1;
    p1 = curr;
    p2 = temp;
    curr++;
  }

  return p1;
};
