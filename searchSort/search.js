//Binary search
//It will applied to sorted array only
//we find mid first then check if mid value of array > element elemnt will be between 0-mid otherwise will be at mid+1 - n

let nums = [-1, 0, 3, 5, 9, 12];
let target = 90;

let l = 0;
let r = nums?.length - 1;
let mid = Math.floor((l + r) / 2);

while (l < r) {
  if (nums[mid] == target) {
    console.log("found at ", mid);
    return;
  } else if (nums[mid] < target) {
    l = mid + 1;
  } else {
    r = mid - 1;
  }

  mid = Math.floor((l + r) / 2);
}
console.log("did not found");
