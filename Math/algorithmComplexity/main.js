// 빅오 표기법 

// 반복문 없이 일련의 코드가 실행 : O(1)
function big_o(n) {
	let sum = 0;	// 1회
	sum = n * 2;	// 1회
	return sum;		// 1회
}


// 단일 for문 : O(n)
function big_o(n) {
	let sum = 0;	// 1회
	for (let i = 0; i < n; i++){	// n회
		sum += arr[i];
	}
	return sum;		// 1회
}


// 2중 for문 : O(N^2)
function big_o(arr, n) { 
	let sum = 0;	// 1회
	for (let i = 0; i < n; i++) {	// n * n = n^2 
		for (let j = 0; j < n; j++) {
			sum += arr[i][j]; 
		}
	}
	return sum; // 1회
}


// O(logN)
function big_o(n) { 
	let sum = 0;	// 1회
	for (let i = 0; i < n; i *= 2) {	// n / 2회 
		sum += 2;
	}
	return sum; // 1회
}

