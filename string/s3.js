//Group anagram

//First approach will loop through the array of strings and we will sort the words at every index now we have array of sorted words so
//we can form groups of that
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// example after sorting ["aet","aet","ant","aet","ant","abt"]
// so we can store a map like this map={
// aet:[eat,tea,ate]
//ant:[tan,nat]
//abt:[bat]
//}

//code for first approach
let map = {};

for (let i = 0; i < strs.length; i++) {
  let sortedStr = strs[i].split("").sort().join();

  if (!map[sortedStr]) {
    map[sortedStr] = [strs[i]];
  } else {
    map[sortedStr].push(strs[i]);
  }
}

console.log([...Object.values(map)], "answer");

//Optimized apporach leet code solution: https://leetcode.com/problems/group-anagrams/submissions/1988607824/
