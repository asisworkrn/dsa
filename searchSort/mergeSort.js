//MERGE SORT
//Divide & conquer algo

//divide my array in two half till it becomes single
//and from last we will merge and return to previous state

function merge(arr1, arr2) {
  let m = arr1?.length;
  let n = arr2?.length;
  let answerArr = [];
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      answerArr.push(arr1[i]);
      i++;
    } else {
      answerArr.push(arr2[j]);
      j++;
    }
  }
  answerArr = [...answerArr, ...arr1?.slice(i), ...arr2?.slice(j)];

  console.log("RETURNED FROM MERGE FUNCTION", answerArr);
  return answerArr;
}

function mergeSort(arr) {
  console.log(arr, "ARRAY INSIDE MERGE SORT");
  if (arr?.length == 1) return arr;

  let mid = Math.floor(arr.length / 2);
  console.log(arr.slice(0, mid), "left before sorted arr");
  let left = mergeSort(arr.slice(0, mid));
  console.log(left, "left Sorted arr");
  console.log(arr.slice(mid, arr.length), "right before sorted arr");
  let right = mergeSort(arr.slice(mid, arr.length));
  console.log(right, "right sorted arr");

  return merge(left, right);
}
let arr = [6, 1, 2, 8, 4];

const answer = mergeSort(arr);
console.log(answer, "answer");
