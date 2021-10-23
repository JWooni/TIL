// 등차수열
// for문
// let result;

// function forloop(s, t, number) {
// 	let acc = 0;

// 	for (let i = 1; i <= number; i++) {
// 		if (i == 1) {
// 			acc += s;
// 		} else {
// 			acc += t;
// 		}
// 		console.log(i, acc);
// 	}
// 	return acc;
// }

// result = forloop(3, 2, 5);
// console.log(result);

// 재귀
let result;

function recursive(s, t, number) {
	// 멈출 조건
	if (number == 1) {
		return s;
	}

	// 반복할 코드
	return recursive(s, t, number - 1) + t;
}

// number : 5 recursive(s, t, 4) + 2 == 11
// number : 4 recursive(s, t, 3) + 2 == 9
// number : 3 recursive(s, t, 2) + 2 == 7
// number : 2 recursive(s, t, 1) + 2 == 5
// number : 1 => 3

result = recursive(3, 2, 5);
console.log(result);