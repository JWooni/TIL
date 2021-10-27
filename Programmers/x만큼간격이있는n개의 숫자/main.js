function solution(x, n) {
	let answer = [];

	for (let i = 1; i <= n; i++) {
		answer.push(x*i)
	}
	return answer;
}

let result = solution(2, 5);
console.log(result);