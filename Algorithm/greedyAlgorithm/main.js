// 거스름 돈
function solution(n) {
  let coin = [500, 100, 50, 10, 5, 1];
  let answer = 0;
  n = 1000 - n;
  for (let i = 0; i < coin.length; i++) {
    while (n >= coin[i]) {
      n -= coin[i];
      answer++;
    }
  }
  return answer;
}
console.log(solution(380));
console.log(solution(1));


// 체육복
function solution(n, lost, reserve) {
  let losted = [...lost].filter((x) => !reserve.includes(x));
  let reserved = [...reserve].filter((x) => !lost.includes(x));
  let answer = n - losted.length;
  let db = {};
  for (let i = 0; i < reserved.length; i++) {
    db[reserved[i]] = true;
  }
  losted = losted.sort((x, y) => x - y);
  for (let i = 0; i < losted.length; i++) {
    if (db[losted[i] - 1]) {
      answer++;
      db[losted[i] - 1] = false;
    } else if (db[losted[i] + 1]) {
      answer++;
      db[losted[i] + 1] = false;
    }
  }
  return answer;
}

