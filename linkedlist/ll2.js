//2. Middle of linked list
//use slow & fast pointer

//use while loop till fast ==null or fast.next==null
//slow = slow+1
//fast = fast +2

//so when fast reach at last or more than last
//then slow will be at mid
// Leetcode sol:  https://leetcode.com/problems/middle-of-the-linked-list/submissions/1993162744/

//3.Reverse linked list
// Leet code sol : https://leetcode.com/problems/reverse-linked-list/submissions/1993170868/

//4. Cycle in linked list

//Approach use hash set while traversing through lL
//push node inside set but before pushinh first check if set.has if true anywhere it has Cycle
//and if you go till null then it means we dont have cycle

// var hasCycle = function(head) {
//     let st= new Set()

//     let curr= head

//     while(curr){
//         if(st.has(curr)){
//             return true
//         }else{
//             st.add(curr)
//             curr=curr.next
//         }
//     }

//     return false
// };

//second approach we can use two pointers fast & slow pointer
// floyds algo
//Leetcode sol: https://leetcode.com/problems/linked-list-cycle/submissions/1994668688/
