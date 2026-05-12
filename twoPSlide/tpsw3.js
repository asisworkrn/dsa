//1. Permutation in string
//Note try to think of sliding window if question talk about substring
//Approach
//we can create two hash one for subtring and one for main string
//so hash we will calculated acc to window size suppose example have two keys in substring then hash becomes will be calculated acc to two size of window
//s1 = "ab", s2 = "eidbaooo"
//we will ietarte to s2 string and by two window size and check for each wndow size if hash matches with s1 string if they match we will get the answer
//

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let hashS = Array(26).fill(0);
  let hashW = Array(26).fill(0);
  let wLength = s1.length;

  for (let i = 0; i < wLength; i++) {
    ++hashS[s1.charCodeAt(i) - 97];
    ++hashW[s2.charCodeAt(i) - 97];
  }

  let i = 0;
  let j = wLength - 1;
  while (j < s2.length) {
    if (isHashSame(hashS, hashW)) {
      return true;
    } else {
      --hashW[s2.charCodeAt(i) - 97];
      ++i;
      ++j;
      ++hashW[s2.charCodeAt(j) - 97];
    }
  }

  return false;
};

var isHashSame = function (st, wn) {
  for (let i = 0; i < 26; i++) {
    if (st[i] != wn[i]) {
      return false;
    }
  }

  return true;
};
