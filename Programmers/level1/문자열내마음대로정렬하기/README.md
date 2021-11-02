## 문자열 내 마음대로 정렬하기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12915)

- 풀이

```jsx
function solution(strings, n) { 
    return strings.sort((x, y) =>
        x[n] == y[n] ? (x > y ? 1 : -1) : x[n] > y[n] ? 1 : -1 );
}
```
