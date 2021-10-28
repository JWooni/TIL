function solution(arr) {
  let answer = [];

  //최소값
  let min = arr.reduce(function (previous, current) {
    return previous > current ? current : previous;
  });

  let filtered = arr.filter((element) => element !== min);

  answer = filtered;

  if (answer.length == 0) {
    answer.push(-1);
  }

  return answer;
}

console.log(solution([10]));
