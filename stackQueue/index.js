//Basic stack operation
let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("stack", stack);
stack.pop();
console.log("stack", stack);
const top = stack[stack.length - 1];
console.log(top, "Top of stack");

//Basic queue operation
let q = [];

q.push(2);
q.push(9);
q.push(6);

console.log(q, "queue");

//to remove we used shift

q.shift();
console.log(q, "queue");
