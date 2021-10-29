## 자연수 뒤집어 배열로 만들기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12932)

- 풀이

```jsx
function solution(n) {
	let answer = [];

	answer = n.toString().split("").map((str) => Number(str)).reverse();

	return answer;
}
```
