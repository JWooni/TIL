## 콜라츠 추측

[문제](https://programmers.co.kr/learn/courses/30/lessons/12943)

- 풀이

```jsx
function solution(num) {
  var answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      // 1이 아닐 경우
      num = num % 2 == 0 ? num / 2 : num * 3 + 1;
    } else {
      // 1일 경우
      return (answer = i);
    }
  }
  return (answer = -1); // 500번이 되도록 값이 없는 경우(1이 되지 않을 경우)
}
```
