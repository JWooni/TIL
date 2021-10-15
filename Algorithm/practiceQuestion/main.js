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

// 큰 수 만들기
function solution(number, k) {
  let stack = [];
  for (let i = 0; i < number.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      if (--k === 0)
        return stack.join("") + number.substr(i, number.length - i);
    }
    stack.push(number[i]);
  }
  return stack.join("").substr(0, stack.length - k);
}

// N-Queen
function isPossible(arr, row, col) {
  for (let c = 0; c < col; c++) {
    if (arr[c] == row) return false;
    if (Math.abs(c - col) == Math.abs(arr[c] - row)) return false;
  }
  return true;
}

function dfs(n, arr, col) {
  if (col == n) return 1;
  let ret = 0;
  for (let row = 0; row < n; row++) {
    if (isPossible(arr, row, col)) {
      arr[col] = row;
      ret += dfs(n, arr, col + 1);
    }
  }
  return ret;
}

function solution(n) {
  return dfs(n, [], 0);
}

// 쿼드압축 후 개수 세기
function dac(answer, arr, n, x, y) {
  let count = [0, 0];
  for (let j = y; j < y + n; j++) {
    for (let i = x; i < x + n; i++) {
      count[arr[j][i]]++;
    }
  }

  if (count[0] === 0) {
    answer[1]++;
    return;
  }

  if (count[1] === 0) {
    answer[0]++;
    return;
  }

  dac(answer, arr, Math.floor(n / 2), x, y);
  dac(answer, arr, Math.floor(n / 2), Math.floor(x + n / 2), y);
  dac(answer, arr, Math.floor(n / 2), x, Math.floor(y + n / 2));
  dac(answer, arr, Math.floor(n / 2), Math.floor(x + n / 2), Math.floor(y + n / 2));
} 

function solution(arr) {
  let answer = [0, 0];
  dac(answer, arr, arr.length, 0, 0);
  return answer;
}
