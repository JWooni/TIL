// 가장 큰 수
function solution(numbers) {
  let answer = numbers
    .map((n) => n + "")
    .sort((x, y) => y + x - (x + y))
    .join("");
  return answer.split(0).join("") ? answer : "0";
}

// H-index
function solution(citations) {
  let answer = 0;
  citations = citations.sort((x, y) => y - x);
  while (answer + 1 <= citations[answer]) answer++;
  return answer;
}

// 입국심사
function solution(n, times) {
  let high = n * Math.max.apply(null, times);
  let low = 0;
  let mid, pass;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    pass = times.reduce((sum, time) => (sum += Math.floor(mid / time)), 0);
    if (n <= pass) high = mid - 1;
    else low = mid + 1;
  }
  return low;
}
