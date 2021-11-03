## 두 정수 사이의 합

[문제](https://programmers.co.kr/learn/courses/30/lessons/12912)

- 풀이

```jsx
function solution(a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2; 
}
```
