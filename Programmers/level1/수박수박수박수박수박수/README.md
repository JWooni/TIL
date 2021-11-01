## 수박수박수박수박수박수?

[문제](https://programmers.co.kr/learn/courses/30/lessons/12922)

- 풀이

```jsx
function solution(n) {
  let answer = '';

  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? '수' : '박';
  }

  return answer;
}
```
