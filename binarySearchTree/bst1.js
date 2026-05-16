//BST left node should be smaller values then the root node
//Right node should be greater than root
//1. Validate Binary search tree
//Approach we need to maitain low & high value for each node
//now to left side the low value is passed between recursion & for right
//side high value will be passed with recursion
//now while going to recurion we can check for curr value it should be lie in the range of
//lo<val<hi if that is not true for any value return false
//and check for leftSubtree & rightSubtree

//2. Insert in BST
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }

  return root;
};

//3.Kth smallest in bst
//do inorder traversal and keep a count as K
//now after every traversal count --
//when count reach ==0 you will be at kth smallest element
var kthSmallest = function (root, k) {
  let ans = null;
  let count = k;

  let trav = (curr) => {
    if (ans) return;
    curr.left && trav(curr.left);
    count--;
    if (count == 0) {
      ans = curr.val;
    }
    curr.right && trav(curr.right);
  };
  trav(root);
  return ans;
};
