function solution(seoul) {
  let answer = "";
  let result;

  result = seoul.indexOf("Kim");

  answer = "김서방은 " + result + "에 있다";

  return answer;
}

console.log(solution(["Jane", "Kim"]));
