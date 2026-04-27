let s = "()[]{}";
let st = [];

for (let i = 0; i < s.length; i++) {
  if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
    st.push(s[i]);
  } else {
    let top = st.pop();
    if (
      !top ||
      (top == "[" && s[i] != "]") ||
      (top == "{" && s[i] != "}") ||
      (top == "(" && s[i] != ")")
    ) {
      return false;
    }
  }
}

return st.length == 0;

//Namste Solution

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let st = [];
  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      st.push(s[i]);
    } else {
      let top = st.pop();
      if (!top || s[i] != map[top]) {
        return false;
      }
    }
  }

  return st.length == 0;
};

//2. Remove outermost parenthsis

// Input: s = "(()())(())"
// Output: "()()()"
//with stack
//Approach 1 traverse through string if my stack is empty and bracket is ( opening i will not add that to my answer string
//now if my bracket is ( open and stack has some value in it add this string to answer and in bth case push ( open in stack
//Now if i got ) close bracket we will check if stack has greater value then 1  we will add that to answer and pop out bracket
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let st = [];
  let answer = "";
  for (i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      if (st.length > 0) {
        answer += s[i];
      }
      st.push(s[i]);
    } else {
      if (st.length > 1) {
        answer += s[i];
      }
      st.pop();
    }
  }

  return answer;
};

//Without stack
//SO when we get ( open bracket we will keep an level value ot will start with 0 and gets increment woth open brancket
//now for else case we will check if our level is greater then 1 we will add that to answer string if not we will skip so in the above code change

var removeOuterParentheses = function (s) {
  let level = 0;
  let answer = "";
  for (i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      if (level > 0) {
        answer += s[i];
      }
      level++;
    } else {
      if (level > 1) {
        answer += s[i];
      }
      level--;
    }
  }

  return answer;
};

//3.  Evaluate Reverse Polish Notation

//Approach traverse through string when we get no. push into stack  when we get operators pop two value from stack make operation & Evaluate them and push the value back to stack
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let st = [];
  let op = ["+", "-", "*", "/"];

  for (let i = 0; i < tokens.length; i++) {
    if (op.includes(tokens[i])) {
      let a = st.pop();
      let b = st.pop();
      let val = eval(`${b} ${tokens[i]} ${a}`);
      st.push(Math.trunc(val));
    } else {
      st.push(tokens[i]);
    }
  }
  return Number(st[st.length - 1]);
};
