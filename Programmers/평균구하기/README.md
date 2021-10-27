## 평균 구하기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12944)

- 풀이

```jsx
function solution(arr) {
	let answer = 0;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	answer = sum / arr.length;

	return answer;
}
```
