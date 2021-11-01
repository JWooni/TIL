## 소수 찾기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12921)

- 풀이

```jsx
function solution(n) {
  let answer = 0;
  let arr = [];

  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) answer++;
  }
  return answer;
}
```
