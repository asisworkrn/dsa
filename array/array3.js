//Best time to buy & sell stock
//Leetcode problem = https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1985983828/

//My approach
// arr= [7,1,5,3,6,4]. we will loop from back in this case
//we will keep maxProfit=0 at the starting loop will start from i=arr.length-1
//maxValToSell at = arr.length-1 in the start
// for each itreation we will subtract the previous day with our maxValToSell
// so for the first case maxValToSell=4 i=5 so
//maxValToSell-arr[i-1]>0 then we will check is the output is greater than maxProfit we will store the output
// and then we will check if arr[i-1]>maxValToSell then we will update that also to new value
// 4-6= -2   so we will not update maxProfit but because arr[i-1]>maxValToSell this is true we will update maxValToSell=6 for i=5

//Now i--
// so now i =4
//maxValToSell-arr[i-1]>0 ==>. 6-3=3>0 we will update the ,maxProfit with 3 if using math.max(maxValToSell-arr[i-1],maxProfit)
// check if arr[i-1]>maxValToSell 3>6 we will not do anything

//Now i-- i =3
//maxValToSell-arr[i-1]>0 ==>. 6-5=1>0  maxProfit is still 3
//is 5>6 not true we will move next

let prices = [7, 1, 5, 3, 6, 4];

let maxProfit = 0;
// let maxValToSell = prices[prices.length - 1];

// for (let i = prices.length - 1; i > 0; i--) {
//   let stockValChange = maxValToSell - prices[i - 1];
//   if (stockValChange > 0) {
//     maxProfit = Math.max(maxProfit, stockValChange);
//   }
//   if (prices[i - 1] > maxValToSell) {
//     maxValToSell = prices[i - 1];
//   }
// }

// console.log(maxProfit, "maxProfit");

//Namste Dsa solution

// let maxProfit = 0;
let minVal = prices[0];

for (let i = 1; i < prices.length; i++) {
  if (prices[i] - minVal > maxProfit) {
    maxProfit = prices[i] - minVal;
  }
  if (prices[i] < minVal) {
    minVal = prices[i];
  }
}

console.log(maxProfit, "maxProfit");
