//Diameter of binary tree
//Appraoch we can say that maximum diameter will be start from leaf
//we need to add depth of left & right subtree and add them
//Leetcode sol: https://leetcode.com/problems/diameter-of-binary-tree/submissions/2001842892/

//2.ZigZag level order BT
//Approach because BFS we use queue and we will check for level
//now if level is even we add ans as same order normal push at end
//and if level is odd we add ans at front (which will make it reverse)
//Solution: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/2001850429/

//3.Subtree of another tree
//Approach is the serialize the trees into a string format and them compare the two strings
//So How to serialize what we can do we will keep a hash string and traverse our tree
//using preorder traversal that is root left right  so acc to example
//3-4-1-#-#-2-#-#-5-#-#
//4-1-#-#-2-#-#
//Now compare these string we can find if this isequal then it is subtree
//Solution: https://leetcode.com/problems/subtree-of-another-tree/submissions/2002609789/
