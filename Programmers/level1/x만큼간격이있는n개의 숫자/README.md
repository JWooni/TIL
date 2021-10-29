## x만큼 간격이 있는 n개의 숫자

[문제](https://programmers.co.kr/learn/courses/30/lessons/12954)

- 풀이

```jsx
function solution(x, n) {
	let answer = [];

	for (let i = 1; i <= n; i++) {
		answer.push(x*i)
	}
	return answer;
}

let result = solution(2, 5);
console.log(result);
```
