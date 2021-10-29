## 정수 내림차순으로 배치하기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12933)

- 풀이

```jsx
function solution(n) {
    let result = n.toString().split("").sort().reverse().join("");
    return parseInt(result);
}
```
