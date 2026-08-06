//Partition palindrome
//We will start partition our string at every index eg s="aab"
//so first partition is "a" then we have "aa then we have "aab
//Now the strings left after partition will be further partition and added to path
//for eg "a" => "ab". "aa" =>"b"  , "aab" => ""
//so when we get empty string we will return simple because we can not partition
//for next iteration we will partion "ab" now [a,a] & [a,ab] will be our path from eg "a"=>"ab"
//SOLUTION:
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];

  let bt = (path, remString) => {
    if (!remString.length) {
      res.push([...path]);
      return;
    }

    for (let i = 1; i <= remString.length; i++) {
      let choice = remString.substring(0, i);

      if (!isPalindrome(choice)) continue;
      path.push(choice);
      bt(path, remString.substring(i));
      path.pop();
    }
  };

  bt([], s);

  return res;
};

let isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i++] != s[j--]) {
      return false;
    }
  }
  return true;
};

//Word search
//We will start with emoty value then pick the word first letter which is given
// then in the start we will have mXN choices acc to the matrix we will match with first letter(Call btrack function for all the MXN values at the start)
//and pick only those which get matched and skipped other
//now move string pointer to next
//now we will check adjact value and add that to options and we will not go backwards remember that
//the string that got matched we picked that and repeat the same step till the string gets over
// SOLUTION
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let res = false;
  let m = board.length;
  let n = board?.[0]?.length;

  let bt = (x, y, nextIndex) => {
    if (nextIndex == word.length) {
      res = true;
    }
    let original = board[x][y];
    board[x][y] = "#";
    //Bottom
    if (y < n - 1 && board[x][y + 1] == word[nextIndex]) {
      bt(x, y + 1, nextIndex + 1);
    }
    //Top
    if (y > 0 && board[x][y - 1] == word[nextIndex]) {
      bt(x, y - 1, nextIndex + 1);
    }

    //Left
    if (x > 0 && board[x - 1][y] == word[nextIndex]) {
      bt(x - 1, y, nextIndex + 1);
    }
    //Right
    if (x < m - 1 && board[x + 1][y] == word[nextIndex]) {
      bt(x + 1, y, nextIndex + 1);
    }

    board[x][y] = original;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        bt(i, j, 1);
      }
    }
  }

  return res;
};
