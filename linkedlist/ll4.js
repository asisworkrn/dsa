//1.Odd Even linked list
//Approach  connect all odd nodes
//then cpnnect even nodes
//then at last connect when reach null connect the last node to even nodes

//2.Add two numbers .

//Approach is add sum of linked list and goes to next
//check if any carry is there add no.'s and then add carry if we can ad any carry then do it
//
// solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//     let ans = new ListNode()
//     let ansHead = ans
//     let sum = 0
//     let carry = 0

//     while (l1 || l2 || carry) {
//         sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry
//         carry = Math.floor(sum / 10)
//         let digit = sum % 10

//         let newNode = new ListNode(digit)
//         ans.next = newNode
//         ans = ans.next
//         l1 = l1 && l1.next
//         l2 = l2 && l2.next
//     }

//     return ansHead.next
// };

//3. Merge two sorted list
//use senitel node and check the two elemnts which one is smaller points to that and move forward
//move the pointer to next smaller have one curr node which will pass to your smallert sorted list

//4.
