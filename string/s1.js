let s = "this is my string  ";

//Length of last word
//Leet code. link: https://leetcode.com/problems/length-of-last-word/submissions/1987477519/?source=submission-noac

//Jewels & stones
//j='aA' stones="aAAbbbBBb"
//answer is 3 aAA

//first approach loop through stones j?.includes(stones[i]) count++

// use another while loop stones[i] checks if present in j strin using while loop count++

//hashmap of j {a:1,A:1}

//Namste Dsa approach use set and save j in set

let jewSet = new Set();
let count = 0;

for (let i = 0; i < jewels.length; i++) {
  jewSet.add(jewels[i]);
}

for (let i = 0; i < stones.length; i++) {
  if (jewSet.has(stones[i])) {
    count++;
  }
}

return count;

//Find Most Frequent Vowel and Consonant

//Leetcode solution: https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/submissions/1987502473/

//Split a String in Balanced Strings
//Leetcode sol: https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

//Reverse string 2

//namste approach
//abcdefghijklmnopqr this is string s k=2

//so for every 2k value rev first k now acc to question import index are starting from 0 then 2k=4

// a0 b1 c2 d3 e4 f5 g6 h7 i8 j9 k10 l11 m12 n13 o14 p15 q16 r17
// I.           I.          I.            I.              I

//so we will try to create a loop which jumps to these char and after jumpimg will reverse that string by k char
let k = 2;
let s = "abcdefghijklmnopqr";
s = s.split("");
for (let x = 0; x < s.length; x = x + 2 * k) {
  let mid = Math.floor(k / 2);

  //We need to swap after every iteration of x so we need to add that in out rev function loop

  for (let i = 0; i < mid; i++) {
    let temp = s[x + i];
    s[x + i] = s[x + k - 1 - i];
    s[x + k - 1 - i] = temp;
  }
}

//solution. https://leetcode.com/problems/reverse-string-ii/submissions/1987533074/
