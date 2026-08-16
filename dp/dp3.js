//Paldromic substrings
//so we will found all the substrings which can take upto O(n2) complexity
//Now to check palindrome it will take O(n) so we will try to reduce this using dp
//for eg s="racecar"
//to check if s is palindrom we can say that s[i=firstElement] == s[j=lastElement] && s[i+1,j-1] this substring is already a palindrome then the main string is palindrome
//so to do that we need to find palindrom length wise starting with 1 to s.length
//and by storing the already calulated value before it will become easy to check the palindrome
//Solution
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(null));
  let ans = 0;
  //Base case is 1 length subtring & two length substrings
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    ans++;
    if (i < n - 1 && s[i] == s[i + 1]) {
      dp[i][i + 1] = true;
      ans++;
    }
  }

  //length 3 to n
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      if (s[i] == s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        ans++;
      }
    }
  }

  return ans;
};
//For every possible substring length from 3 to n,
// try every possible starting position,
//     calculate its ending position,
//         check if first == last
//         AND its inside is already a palindrome.

//     Length 3:
// rac  ace  cec  eca  car

// Length 4:
// race  acec  ceca  ecar

// Length 5:
// racec  aceca  cecar

// Length 6:
// raceca  acecar

// Length 7:
// racecar
