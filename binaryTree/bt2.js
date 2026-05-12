//Inorder recursive
// var inorderTraversal = function(root) {
//        let ans=[]
//     function findAns(curr){
//         if(!curr) return
//        findAns(curr.left)
//        ans.push(curr.val)
//        findAns(curr.right)
//     }
//     findAns(root)
//     return ans
// };

//2.  Inorder Iterative approach
//we can use stack for this
//run while loop if curr || st.length
//means if we have any curr element and if stack is not empty our loop will run
//now because it is in order traversal we need to run a while loop for left side of tree till it reaches the bottom
//while(curr){ push curr to stack and moves to left of curr}
//now update your curr =using pop nelement from stack
//push the pop value into stack
//& update your curr to right side

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
var inorderTraversal = function (root) {
  let ans = [];
  let st = [];
  let curr = root;
  while (curr || st.length) {
    while (curr) {
      st.push(curr);
      curr = curr.left;
    }
    curr = st.pop();
    ans.push(curr.val);
    curr = curr.right;
  }
  return ans;
};
