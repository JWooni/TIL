## 짝수와 홀수

[문제](https://programmers.co.kr/learn/courses/30/lessons/12937)

- 풀이

```jsx
function solution(num) {
    var answer = '';
    if (num % 2 == 0) {
        answer = "Even";
    } else {
        answer = "Odd"
    }
    return answer;
}
```
