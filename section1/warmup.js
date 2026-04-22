//April 22, 2026

let arr = [11, 52, 73, 45, 59];
let integerArr = [1, -2, 0, -4, 5];

// 1.looping through arrays
// for (let i = 0; i < arr?.length; i++) {
//   console.log(arr[i], "arr[i]", i);
// }

//2. print even numbers of above array
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i], "even number");
//   }
// }

//3. Linear search
// let target = 45;
// let found = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == target) {
//     console.log("target found at index", i);
//     found = i;
//     break;
//   }
// }
// console.log(found, "found");

//4. Return count of negative numbers in the array
//let count = 0;
// for (let i = 0; i < integerArr.length; i++) {
//   if (integerArr[i] < 0) {
//     count++;
//   }
// }
// console.log(count, "count of negative numbers");

//5. Find the largest number in the array
// let largest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(largest, "largest number in the array");

//6. Find the second largest number in the array
// let largest = arr[0];
// let secondLargest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] > secondLargest && arr[i] != largest) {
//     secondLargest = arr[i];
//   }
// }
// console.log(secondLargest, "second largest number in the array");

//7. Loop in Loop star pattern
//1.
//xxxx
//xxxx
//xxxx
//xxxx
// let n = 4;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n; j++) {
//     row = row + "X";
//   }
//   console.log(row);
// }

//2.
//x
//xx
//xxx
//xxxx
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + "X";
//   }
//   console.log(row);
// }
//3.
//1
//22
//333
//4444
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + (i + 1);
//   }
//   console.log(row);
// }

//4.
//    x
//.  xx
//. xxx
//.xxxx
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n - (i + 1); j++) {
//     row = row + " ";
//   }
//   for (let j = 0; j < i + 1; j++) {
//     row = row + "X";
//   }
//   console.log(row);
// }

//8. Count digit
// let digit = -510;
// let count = 0;
// for edge case
// if(digit==0){
//     count=1
//     return
// }
// digit = Math.abs(digit);
// while (digit > 0) {
//   digit = Math.floor(digit / 10);
//   console.log(digit, "after");
//   count++;
// }
// console.log(count, "no of digit");

//9. Palindrome no
// let digit = 1221;
// let myNo = digit;
// let rev = 0;
// while (myNo > 0) {
//   let rem = myNo % 10;
//   rev = rev * 10 + rem;
//   myNo = Math.floor(myNo / 10);
// }
// console.log(rev == digit ? "Palindrome" : "Not a Palindrome");
