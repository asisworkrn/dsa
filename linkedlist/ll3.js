//Plaindrome in lL
//approach when convert this ll into array and check that if its palindrome or not

//Approach 2 steps
//Find out the middle element LL
//Then when reached at mid we will reverse the LL from there till end
//And kept the pointer at end

//now next step would be to have start pointer at start & end at end & check one by one each element if they are equal and we reach till mid again then it is
// palindrome

//1 -> 2 -> 3 -> null<-3 <- 2 <- 1-null

//Leetcode sol: https://leetcode.com/problems/palindrome-linked-list/submissions/1994682446/

//2.Intersection of linked list
//hashmap/hashset Approach ideal
// Put all the values of sList to set and then loop to fList and check is values exits in set or not

//3. Remove linked list
//Sentinal Node it helps to delete node from start index in LL

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function (head, val) {
//     let sentinel = new ListNode()
//     sentinel.next = head

//     let prev = sentinel
//     while (prev && prev.next) {
//      if(prev.next.val==val){
//         prev.next=prev.next.next
//      }else{
//         prev=prev.next
//      }
//     }

//     return sentinel.next
// };

//4.Remove nth node from the end(IMP)
//Approach 1
//Always add sentinel node try using with delete element
//traverse firs to cals length of LL
//Then find delete postion = (length/size  - n) + 1
//go to prev value to deletePosition and delete your node

//ONE PASS
// var removeNthFromEnd = function (head, n) {
//   let sentinal = new ListNode(0, head);
//   let fast = sentinal;
//   let slow = sentinal;

//   for (let i = 0; i < n; i++) {
//     fast = fast.next;
//   }

//   while (fast.next) {
//     fast = fast.next;
//     slow = slow.next;
//   }

//   slow.next = slow.next.next;

//   return sentinal.next;
// };
