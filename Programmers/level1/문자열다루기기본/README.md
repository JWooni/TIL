## 문자열 다루기 기본

[문제](https://programmers.co.kr/learn/courses/30/lessons/12918)

- 풀이

```jsx
function solution(s) {
  return (s.length === 4 || s.length === 6) && s == parseInt(s);
}
console.log(solution("a234"));
```
