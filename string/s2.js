//Longest common prefix

let strs = ["flower", "flight", "floor", "fl"];
//answer="fl"
//Leetcode: https://leetcode.com/problems/longest-common-prefix/submissions/1988528750/

//Namste dsa approach take first string as reference
//so in our case flower

let x = 0;

while (x < strs[0]?.length) {
  let ch = strs[0][x]; //This means we have picked flower ist string

  for (let i = 1; i < strs.length; i++) {
    //This loops represents the other strings in main array
    if (ch != strs[i][x] || strs[i]?.length == x) {
      //This checks if any char does not match in other strings or if any other string reaches to the last element which means string is over
      return strs[0].substring(0, x);
    }
  }
  x++;
}
return strs[0];

//2. Valid anagram

//first approach comes to my mind we can keep map for both string s & t store values acc to no. of occurence then compares those two maps if any value does not exits
//then no anagram otherise anagram

//another approach which comes to my mind than sort these two strings and loop through them to check if it matches or not

//Namste dsa solution uses map but with other check so first string will store values in map
// and for second string we reduced the string or remove the value from map

//Leet code solution: https://leetcode.com/problems/valid-anagram/submissions/1988546980/

//3. Isomorphic strings
//Leetcode solution : https://leetcode.com/problems/isomorphic-strings/submissions/1988583241/

//Approach
// Isomorphic Strings – Approach
// Sabse pehle check karo:
// Agar s.length !== t.length → return false
// Do objects (maps) banao:
// mapStoT → s ke characters ko t se map karega
// mapTtoS → t ke characters ko s se map karega
// 👉 Yeh ensure karega one-to-one mapping
// Loop chalao har index ke liye:
// for (let i = 0; i < s.length; i++)
// Har iteration me:
// Current characters lo:
// charS = s[i]
// charT = t[i]
// Check karo:
// Agar charS aur charT dono ka mapping pehle se nahi hai:
// Toh mapping set karo:
// mapStoT[charS] = charT
// mapTtoS[charT] = charS
// Agar mapping already exist karti hai:
// Check karo:
// mapStoT[charS] === charT hona chahiye
// mapTtoS[charT] === charS hona chahiye
// Agar mismatch mila → return false
// Loop complete hone ke baad:
// Agar koi conflict nahi mila → return true
