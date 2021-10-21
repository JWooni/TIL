// 순열
// 서로 다른 n개의 원소 중에서 r를 중복없이 골라 순서에 상관있게 나열하는 경우의 수

// for문
// let input = ["a", "b", "c"];
// let count = 0;

// function permutation(arr) {
//   // for i -> 첫번째 인덱스 위치 시킬 요소 a, b, c [i, 0, 0]
//   for (let i = 0; i < arr.length; i++) {
//     // for j -> 두번째 인덱스 위치 시킬 요소	[i, j, 0]
//     for (let j = 0; j < arr.length; j++) {
//       if (i == j) {
//         continue;
//       }
//       // for k -> 세번째 인덱스 위치 시킬 요소 [i, j, k]
//       for (let k = 0; k < arr.length; k++) {
//         if (i == k) {
//           continue;
//         }
//         if (j == k) {
//           continue;
//         }

// 				console.log(arr[i], arr[j], arr[k]);
// 				count++;
//       }
//     }
//   }
// }

// permutation(input);
// console.log(count);

// 재귀
let input = ["a", "b", "c"];
let count = 0;

function permutation(arr, s, r) { // s는 시작할 위치, r은 끝낼 위치
	// 1. 재귀함수를 멈춰야할 조건
	if (s == r) {
		count++;
		console.log(arr);
		return;
	}

	// 2. 재귀를 돌면서 변경되어야 될 부분 / 메인 로직
	for (let i = s; i < arr.length; i++) {
		[arr[s], arr[i]] = [arr[i], arr[s]];	// swap
		permutation(arr, s + 1, r);
		[arr[s], arr[i]] = [arr[i], arr[s]];	// 원상복귀
		/*
		s = 0, r = 2
		
		*/
	}
}

permutation(input, 0, 2);
console.log(count);
