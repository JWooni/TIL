function solution(phone_number) {
	let answer = '';
	let leng = phone_number.length - 4;

	answer = "*".repeat(leng) + phone_number.substring(leng);

	return answer;
}