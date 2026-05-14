//1.Lowest common ancestor BT
//Appraoch Bottom up
// what we can do go to leaf nodes and thenstart going up by checking
//if we found p or q whenever we found p or q any value we will return
//a count ++ by doing this we our telling our code that one of the value is found
//and now we do same for every node so we will add these value in count
//which is currcount + answerLeft + answerRight
//And any time if this count becomes 2 we will store that curr node in our lca ans
//Solution : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/2002631217/

//2. BT right side view
//Queue will be used BFS solution
//We will traverse from right to left
///**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
var rightSideView = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];

  while (q.length) {
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      i == 0 && ans.push(curr.val);
      curr.right && q.push(curr.right);
      curr.left && q.push(curr.left);
    }
  }

  return ans;
};

//3.Count Good Nodes in BT
//Solution: https://leetcode.com/problems/count-good-nodes-in-binary-tree/submissions/2002656391/
//Used top down apporach at first compare the curr val if it is greater than equal to
//your maxSeenSoFar then it is good node do ans++ and then call for left & right
//and also update the currMaxSeenSo Far  this is important to check good nodes

//4. Populating next right pointer
//Sol: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/submissions/2002668528/

//5. Binary Tree Maximum Path Sum
//Appraoch we use bottom up approach we will gio to leaf node
//& then return maxLeft maxRight + curr,
//means if maxLeft is greater then add maxLeft to curr or do the opposite
//and at each level we will update our maxi
