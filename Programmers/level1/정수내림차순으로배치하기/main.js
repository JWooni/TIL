function solution(n) {
  let result = n.toString().split("").sort().reverse().join("");
  return result;
}

console.log(solution(118372));
