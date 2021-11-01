## 문자열 내림차순으로 배치하기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12917)

- 풀이

```jsx
function solution(s) {
  return s.split("").sort().reverse().join("");
}

console.log(solution("Zbcdefg"));
```
