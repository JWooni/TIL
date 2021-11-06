## 같은 숫자는 싫어

[문제](https://programmers.co.kr/learn/courses/30/lessons/12906)

- 풀이

```jsx
function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length - 1; i++) { 
        if (arr[i] != arr[i + 1]) {
            answer.push(arr[i]); 
        }
    }
    answer.push(arr[arr.length - 1]); 
    return answer;
}
```
