function num(n) {
  if (n == 0) return;
  console.log(n, "recursion");
  n = n - 1;
  num(n);
}

num(9);

function sumOfN(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return n + sumOfN(n - 1);
}

console.log(sumOfN(5));

//Leet code power of two https://leetcode.com/problems/power-of-two/submissions/1986732232/
