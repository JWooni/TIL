# Scope

[mdn](https://developer.mozilla.org/ko/docs/Glossary/Scope)

- 변수 혹은 상수에 접근할 수 있는 범위
- 모듈 / 함수 내 코드에서 동일한 변수 사용시 간섭을 줄이는 용도로 사용
- Scope는 Global Scope와 Local Scope의 타입으로 구분
    - Global Scope : 전역에 선언되어 어디에서도 접근 가능
    - Local Scope : 특정 지역에 선언되어, 해당 지역 내에서만 접근 가능

```jsx
let x = 1;
let y = 2;
let z = 3;

console.log(x);
console.log(y);

{
	// local scope
	let x = 3;
	let y = 4;
	console.log(x);
	console.log(y);
	console.log(z);
}

console.log(x);
console.log(y);

// global scope
let A = 1;
let B = 2;

{
	let C = 3;
	let D = 4;
	console.log(A); // 1
	console.log(C); // 3
}
console.log(C); // Error

// global scope
let A = 1;

{
	// local scope
	let C = 3;
	let D = 4;

	console.log(C); // 3

	{
		// local scope
		let C = 5;
		let D = 6;
		console.log(C); // 5
	}
}

let index = 1000;

function local_func() {
	let index = 100;

	for (let index = 0; index < 10; index++){
		console.log(index); // 0 ~ 9
	} 
	console.log(index); // 100
}
local_func();
console.log(index); // 1000
```
