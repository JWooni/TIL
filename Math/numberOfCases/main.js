// 순열
// for문
let input = ["a", "b", "c"]; 
let count = 0;

function permutation(arr) {
	// for i -> 첫번째 index 위치시킬 요소 a, b, c [i, 0, 0]
	for (let i = 0; i < arr.length; i++) { 
		// for j -> 두번째 index 위치시킬 요소 [i, j, 0]
		for (let j = 0; j < arr.length; j++) {
			if (i == j) {
				continue;
			}
			// for k -> 세번째 index 위치시킬 요소 [i, j, k]
			for (let k = 0; k < arr.length; k++) { 
				if (i == k) {
					continue;
				}
				if (j == k) {
					continue;
				}
				console.log(arr[i], arr[j], arr[k]); 
				count++;
			} 
		}
	} 
}

permutation(input); 
console.log(count);

// 재귀
let input = ["a", "b", "c"]; 
let count = 0;

function permutation(arr, s, r) { 
	// 1. 재귀함수를 멈춰야 할 조건
	if (s == r) {
		count++;
		console.log(arr.join(" ")); 
		return;
	}
	// 2. 재귀를 돌면서 변경되어야 될 부분 / 메인 로직
	for (let i = s; i < arr.length; i++) { 
		[arr[s], arr[i]] = [arr[i], arr[s]]; // swap
		permutation(arr, s + 1, r);
		[arr[s], arr[i]] = [arr[i], arr[s]]; // 원복
		/*
			s = 0, r = 2 ["a",]
			s = 1, r = 2 ["a", "b",]
			s = 2, r = 2 ["a", "b", "c"]
		*/
	}
}

permutation(input, 0, 2); 
console.log(count);


// 조합
// for문
let input = [1, 2, 3, 4]; 
let count = 0;

function combination(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) { 
			count++;
			console.log(arr[i], arr[j]); 
		}
	} 
}
combination(input); 
console.log(count);

// 재귀
let input = [1, 2, 3, 4];
let output = [];
let count = 0;

function combination(arr, data, s, idx, r) { 
	if (s == r) {
	count++;
	console.log(data); 
	return;
}

	for (let i = idx; arr.length - i >= r - s; i++) { 
		data[s] = arr[i];
		combination(arr, data, s + 1, i + 1, r); 
	}
}
combination(input, output, 0, 0, 2); 
console.log(count);