function solution(n) {
  let answer = 0;
	let arr = [];
	
	arr = n.toString().split("").map((str) => Number(str));

	for (let i = 0; i < arr.length; i++) {
		answer += parseInt(arr[i]);
	}
  return answer;
}

console.log(solution(123));