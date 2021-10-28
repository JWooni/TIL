## 제일 작은 수 제거하기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12935)

- 풀이

```jsx
function solution(arr) {
  let answer = [];

  //최소값
  let min = arr.reduce(function (previous, current) {
    return previous > current ? current : previous;
  });

  let filtered = arr.filter((element) => element !== min);

  answer = filtered;

  if (answer.length == 0) {
    answer.push(-1);
  }

  return answer;
}
```
