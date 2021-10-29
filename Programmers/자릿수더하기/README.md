## 자릿수 더하기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12931)

- 풀이

```jsx
function solution(n) {
  let answer = 0;
	let arr = [];
	
	arr = n.toString().split("").map((str) => Number(str));

	for (let i = 0; i < arr.length; i++) {
		answer += parseInt(arr[i]);
	}
  return answer;
}
```
