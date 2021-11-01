function solution(s) {
  let answer = true;
  let countA = 0;
  let countB = 0;

  answer = s.split("");

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == "p" || answer[i] == "P") {
      countA++;
      console.log(countA);
    }
    if (answer[i] == "y" || answer[i] == "Y") {
      countB++;
      console.log(countB);
    }
  }
  if (countA == countB) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}
console.log(solution("pPoooyY"));
