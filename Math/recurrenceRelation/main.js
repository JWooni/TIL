// 점화식
// 등차수열
// for문
let result;
function forloop(s, t, number) { 
	let acc = 0;
	for (let i = 1; i <= number; i++) { 
		if (i == 1){
			acc += s;
		} else{
			acc += t; 
		}
		console.log(i, acc);
	}
	return acc; 
}
result = forloop(3, 2, 5); 
console.log(result);

// 재귀
let result;
function recursive(s, t, number) { 
	if (number == 1) {
	return s; 
	}
	return recursive(s, t, number - 1) + t; 
}
result = recursive(3, 2, 5); 
console.log(result); // 11


// 등비수열
// for문
let result;
function forloop(s, t, number) { 
	let acc = 1;
	for (let i = 1; i <= number; i++) { 
		if (i == 1){
			acc *= s;
		} else{
			acc *= t; 
		}
		console.log(i, acc);
	}
	return acc; 
}
result = forloop(3, 2, 5); 
console.log(result);

// 재귀
let result;
function recursive(s, t, number) { 
	if (number == 1) {
		return s; 
	}
	return recursive(s, t, number - 1) * t; 
}
result = recursive(3, 2, 5); 
console.log(result); // 48


// 팩토리얼
// 재귀
let result;
function recursive(number) { 
	if (number == 1) {
		return number; 
	}
	return recursive(number - 1) * number; 
}
result = recursive(5);
console.log(result); // 120


// 피보나치 수열
let result;
function recursive(number) {
	if (number == 1 || number == 0) { 
		return number;
	}
	return recursive(number - 1) + recursive(number - 2); 
}
result = recursive(5);
console.log(result); // 5
