function solution(n) {
	let answer = 0;
	let sqrt = 0;

	sqrt = Math.sqrt(n);

	if (sqrt % 1 != 0) {
		answer = -1;
	} else {
		answer = Math.pow(sqrt + 1, 2);
	}

	return answer;	
}

console.log(solution(3));