## 나누어 떨어지는 숫자 배열

[문제](https://programmers.co.kr/learn/courses/30/lessons/12910)

- 풀이

```jsx
function solution(arr, divisor) { 
    let answer = [];

    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]); 
        }
    }
    return answer.length ? answer.sort((x, y) => x - y) : [-1];
}
```
