//1. Coin Change
//First approack we will start with amount so amount =6 coins[1,2,5]
//Now F(amount)= F(6) it can be found by three ways F(6-1) F(6-2) F(6-5)
//Now we also need to add + 1 tp it because here to reach at F(6) we have atleast use one coin
// And Now the above functions become F(6) = 1 + minimum among these three( F(5). F(4)  F(1))
//ANd Base cases will be F(0) amount = 0 or negative no.
//Solution
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let n = coins.length;
  let dp = {};
  let fn = (remAmount) => {
    if (remAmount == 0) {
      return 0;
    }
    if (remAmount < 0) {
      return -1;
    }

    if (remAmount in dp) {
      return dp[remAmount];
    }

    let minCoins = Infinity;
    for (let i = 0; i < n; i++) {
      let res = fn(remAmount - coins[i]);
      if (res != -1) {
        minCoins = Math.min(minCoins, 1 + res);
      }
    }
    dp[remAmount] = minCoins == Infinity ? -1 : minCoins;
    return dp[remAmount];
  };
  return fn(amount);
};

//TABULATION
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let n = coins.length;
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
