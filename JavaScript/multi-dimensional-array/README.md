# N차원 배열

- 배열(Array) 안에 N개 만큼의 배열이 존재하는 객체
- 2 / 3차원 지도 정보, RGB를 저장하는 2차원 사진 파일 등을 표현할 때 활용 가능

## 2차원 배열 예제

- 2차원 배열은 array[N][M]으로 접근하여, 배열(Array) 전체를 push(), pop() 가능

```jsx
// N차원 배열
let array = [ 
	[101, 102, 103], 
	[201, 202, 203], 
	[301, 302, 303],
];

console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]); // [ 101, 102, 103 ]
console.log(array[1][0]); // 201
console.log(array[2][2]); // 303

let arr_2 = array.pop();
console.log(array.length); // 2
console.log(arr_2); // [ 301, 302, 303 ]
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]

let array_num = array.push([401, 402, 403]);
console.log(array.length); // 3
console.log(array_num); // 3
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]
```

## 2차원 배열 반복문 예제

- 이중 for loop를 사용한 2차원 배열 접근

```jsx
// 2차원 배열 반복문
let array = [ 
	[101, 102, 103], 
	[201, 202, 203], 
	[301, 302, 303], 
]; 

for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array[i].length; j++) { 
		console.log(array[i][j]); /*101 ... 303 */ 
	} 
} 

let fruits = [
	["strawberry", 50], 
	["banana", 100], 
	["ice", 150],
];

for (let i = 0; i < array.length; i++) {
	console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}`); 
}
```
