//Breadth First search
//Level order traversal
//Approach we can use  queue
//take three vars qu, curr, ans
//first put root in queue and take element out of qu and assign to curr
//now push children of curr  to queue and add the curr in ans
//again now take element out of queue add to curr
//put their children in queue and add the curr to answer do this till curr & queue is empty

//2. Maxi depth of binary tree
//traverse full tree and while going to children we just add depth at every level using recursion
//This is top down approach
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDepth = 0;
  let calsMaxDepth = function (curr, dept) {
    maxDepth = Math.max(maxDepth, dept);
    curr.right && calsMaxDepth(curr.right, dept + 1);
    curr.left && calsMaxDepth(curr.left, dept + 1);
  };
  calsMaxDepth(root, 1);
  return maxDepth;
};

//Bottom ups approach
//Now this what we can do if got to leaf node and we know leaf node will have
//maxDepth as 1 because no children are their so the root node will
//check at left children & right children whichever is maximum
//pick that and add 1 to it to calculate data till root node

var maxDepth = function (root) {
  if (!root) return 0;

  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);
  return 1 + Math.max(leftMax, rightMax);
};

//path sum prblem use the above algo just some modification in the code acc to ques
//
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let ans = false;

  let calsSum = (curr, currSum) => {
    let newSum = currSum + curr.val;
    if (!curr.left && !curr.right) {
      if (newSum == targetSum) {
        ans = ans || true;
      }
    }

    curr.left && calsSum(curr.left, newSum);
    curr.right && calsSum(curr.right, newSum);
  };
  calsSum(root, 0);

  return ans;
};
