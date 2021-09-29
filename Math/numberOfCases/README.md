# 경우의 수 (Number of cases)

- 어떤 사건 혹은 일이 일어날 수 있는 경우의 가짓수를 수로 표현
- 일상 생활에서의 경우의 수
    - 주사위 : 던지는 결과, 1 ~ 6 사이의 숫자이므로 경우의 수는 6
    - 윷 : 던지는 결과, 도, 개, 걸, 윷, 모 이므로 경우의 수는 5
    - 가위바위보 : 게임 결과, 가위, 바위, 보 중에 하나를 낼 수 있으므로 경우의 수는 3
    - 동전 : 던지는 결과, 앞면 혹은 뒷면이므로 경우의 수는 2
- 완전탐색으로 경우의 수를 푸는 알고리즘
    - 순열 : 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 있게 나열하는 경우의 수(nPr)
    - 조합 : 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 없이 나열하는 경우의 수(nCr)
    - 중복 순열 : 서로 다른 n개의 원소 중에서 r개를 중복 있게 골라 순서에 상관없이 나열하는 경우의 수(nH)
    

## 순열

- 서로 다른 n개의 원소 중에서 r를 중복없이 골라 순서에 상관 있게 나열하는 경우의 수(nPr)
- 3개의 알파벳으로 단어를 만드는 경우의 수

```jsx
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
	}
}

permutation(input, 0, 2); 
console.log(count);
```

## 조합

- 서로 다른 n개의 원소 중에서 r를 중복없이 골라 순서에 상관없이 나열하는 경우의 수(nCr)
- 4개의 숫자 카드에서 2개를 뽑는 경우의 수

```jsx
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
```
