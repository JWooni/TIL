## 핸드폰 번호 가리기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12948)

- 풀이

```jsx
function solution(phone_number) {
	let answer = '';
	let leng = phone_number.length - 4;

	answer = "*".repeat(leng) + phone_number.substring(leng);

	return answer;
}
```
