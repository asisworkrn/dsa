//Introduction to tree's
//Preorder Recursive approach
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
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//     let ans=[]
//     function findAns(curr){
//         if(!curr) return

//         ans.push(curr.val)
//         findAns(curr.left)
//         findAns(curr.right)
//     }
//     findAns(root)
//     return ans
// };

//2. Preorder Iterative approach
//we can use stack for this
// [1,2,3,4,5,null,8,null,null,6,7,9]
//Approach.
//1.Store root in stack and pop element add that to ans
//2.when you pop element you will check if that element has right child or left child
//3. if they have right child push that to stack and now check if it have left child then pushed that also
//4. Now while loop will run and again the top element will be psuhed
//5. Loop will run till stack is not empty

//Using stack
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  let ans = [];
  let st = [root];
  while (st.length) {
    let top = st.pop();
    ans.push(top.val);
    top.right && st.push(top.right);
    top.left && st.push(top.left);
  }
  return ans;
};
