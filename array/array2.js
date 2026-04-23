//Reverse string inplace

//We will just traverse throught arr till mid and will swap the first and last element in our case h will be replace by o
//So these two value are arrP[0] ==> arrP[5-1-0] for i=0 case

//Leetcode link = https://leetcode.com/problems/reverse-string/submissions/1985963671/

function swapNoInArray(arr, num1, num2) {
  let temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
}

let arrP = ["h", "e", "l", "l", "o"];

for (let i = 0; i < arrP.length / 2; i++) {
  swapNoInArray(arrP, i, arrP.length - 1 - i);
}

console.log(arrP, "after reverse");
