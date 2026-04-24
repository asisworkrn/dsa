//Bubble sort

// [5,2,4,1]
//Checks value pair by pair

//Loop through array and and pick two pairs
//ietration first  n = 4 so inner loop will run till n-1-i
//arr[0],arr[1] here arr[0]>arr[1] swap the no. [2,5,4,1]

//arr[1],arr[2] here arr[1]>arr[2]  swapt the no. arr becomes [2,4,5,1]

////arr[2],arr[3] here arr[2]>arr[3]  swapt the no. arr becomes [2,4,1,5]

//When the first iteration is over you will have the last element as sorted and at its correct position

//Second iteration

let arr = [7, 4, 3, 5, 1, 2];

// for (let i = 0; i < arr?.length; i++) {
//   let isSwapped = false;
//   for (let j = 0; j < arr?.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//       isSwapped = true;
//     }
//   }
//   if (!isSwapped) braek;
//   console.log(arr, "iteration: ", i + 1);
// }

// console.log(arr, "answer");

//Selection sort
//We will loop through array we will find the minimum element and place that element at the first index for first iteration and then again it will do the same for other iteration

// for (let i = 0; i < arr.length - 1; i++) {
//   let min = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[min]) {
//       min = j;
//     }
//   }
//   console.log(arr, "iteration", i + 1);
//   let temp = arr[i];
//   arr[i] = arr[min];
//   arr[min] = temp;
// }

// console.log(arr, "selection sort");

//Insertion sort

//We will take one by one element in array and insert them to to correct position acc to sorted array
//Example [7, 4, 3, 5, 1, 2];
//assume first elemnt is sorted always so we will iterate from 1 index now
//we start comparing are sorted array with my current element so in our case 4 will be compared with 7 sorted as of now
//4<7 so we will move 7 ahead by one place and now beacuse we have iterate to all the places of sorted array so 4 will be at index 0
// now array becomes [4,7,3,5,1,2]

//For next iteration we will pick 3  now will start comparing that with sorted array so 3<7 so 7 moves +1 index now we will compare to 4 sor 3<4 sor 4 morr +1 index
//now again sorted array is over so three will be at 0 index
//[3,4,7,5,1,2]

//For third iteration
//pick 5<7 7 moves to +1  now 5>4 because it is greater than 4 now we will keep it at the current sorted index position ie after 4 index
//[3,4,5,7,1,2]

// for (let i = 1; i < arr.length; i++) {
//   let curr = arr[i];
//   let p = i - 1;
//   while (arr[p] > curr && p >= 0) {
//     arr[p + 1] = arr[p];
//     p--;
//   }
//   arr[p + 1] = curr;
//   console.log(arr, "iteration", i + 1);
// }

// console.log(arr, "Insertion sort");
