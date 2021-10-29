## 행렬의 덧셈

[문제](https://programmers.co.kr/learn/courses/30/lessons/12950)

- 풀이

```jsx
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}
```
