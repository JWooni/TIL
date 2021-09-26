# Function

[mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions)

- 함수는 다수의 명령문을 코드 블록으로 감싸고, 하나의 실행 단위로 만든 코드의 집합
- 유사한 동작을 하는 코드를 하나로 묶어, 범용성을 확대시킨 블록 코드
- 함수는 정의 부분과 호출 부분으로 구성
- 함수는 가급적 한가지 일만 하며, 매개변수는 최대 3개 이내로 작성을 권장

## 함수 정의

```jsx
/* 1. 함수 선언식(Function Declarations) 
function func (arg1, arg2, ...argN) {
	expression;
 }
*/
function add(x, y) {
	 return x + y;
}

/* 2. 함수 표현식(Function Expressions) 
const func = function (arg1, arg2, ...argN) {
	expression;
 }
*/
const add = function (x, y) {
	 return x + y;
};

/* 3. 화살표 함수 (Arrow Function)
const func = (arg1, arg2, ...argN) => expression; 
*/
const add = (x, y) => x + y;
```

## 함수 호출

- 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음
- ES6에서 도입된 기본값을 통해 undefined 변수가 들어올 경우 값 초기화 지정 가능

```jsx
// 함수 호출
// 1. default value
function print_add(x, y = 10) {
	 console.log(x + y);
}
print_add(10, 20, 30); // 30
print_add(10, 20); // 30
print_add(10); // 20
print_add(); // NaN

// 2. dynamic parameters 
function print_min() {
	// console.log(arguments);
	console.log(arguments[0] - arguments[1]);
}
print_min(10, 20, 30); // -10
print_min(10, 20); // -10
print_min(10); // NaN
print_min(); // NaN
```

## 함수 반환

- return 후 코드는 수행되지 않으며, default return value는 undefined

```jsx
// 함수 반환
function add(x, y) {
	return x + y;
	console.log("hello!"); // 미 수행 코드 
}

function dummy() {} 

function checkAge(age) {
	if (age >= 18) { 
		return true;
		} else { 
			return false;
	} 
}
console.log(add(10, 20)); // 30
console.log(dummy()); // undefined
console.log(checkAge(14)); // false
console.log(checkAge(20)); // true
```

## 재귀함수

- 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
- 재귀 함수는 특정 조건이 됐을 때 자신을 그만 호출되도록 제한하는 exit code가 필요

```jsx
// 재귀함수
// 1. basic recursive function 
function recursive(num) {
	if (num == 0) return 0;
	return num + recursive(num - 1); 
}
console.log(recursive(3)); // 6 

// 2. factorial function
function factorial(x) {
	if (x === 0) return 1; 
	return x * factorial(x - 1);
}
const num = 3;

let result = factorial(num);

console.log(`The factorial of ${num} is ${result}`); // The factorial of 3 is 6
```

## 콜백함수

- 콜백 함수(Callback Function)란 다른 함수의 매개변수로 전달되어 수행되어지는 함수
- 고차 함수(Higher-order Function)란 매개변수를 통해 함수를 받아 호출하는 함수

```jsx
// 콜백함수
function add(x, y) { 
	return x + y;
}
function sub(x, y) { 
	return x - y;
}
function mul(x, y) { 
	return x * y;
}
function div(x, y) { 
	return x / y;
}
function calculator(callback, x, y) { 
	return callback(x, y);
}
console.log(calculator(add, 7, 3)); // 10
console.log(calculator(sub, 7, 3)); // 4
console.log(calculator(mul, 7, 3)); // 21
console.log(calculator(div, 7, 3)); // 2.3333333333333335
```

## call by *

- call by value
    - 값에 의한 복사로 함수 내에서 매개변수 값을 변경 시켜도 영향이 미치지 않음
    - 원시 타입(primitive type)을 매개변수로 넘겼을 때 발생

    ```jsx
    // call by *
    let a = 1;
    let add = function (b) { b = b + 1; }; // callee 
    add(a); // caller
    console.log(a); // 1
    ```

- call by reference
    - 주소에 대한 복사로 함수 내에서 매개변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
    - 객체 타입(Object type)을 매개변수로 넘겼을 때 발생

    ```jsx
    // call by reference
    var a = { v: 1 };
    var add = function (b) { b.v = b.v + 1; }; // callee 
    add(a); // caller
    console.log(a.v); // 2
    ```

## 연습문제

- 두 정수를 입력 받아 가장 큰 값을 출력해주는 함수를 작성하시오.

```jsx
function MAX(x, y) {
	if (x > y) {
		return x;
	}	else if (x < y){
		return y;
	}
}
	console.log(MAX(0, 3)); // output: 3
	console.log(MAX(-1, 5)); // output: 5
	console.log(MAX(100, 7)); // output: 100
```

## 함수의 이해

### 함소의 표현

- 다양한 방법으로 함수 정의가 가능하며, 함수 표현식처럼 함수를 정의하여 변수에 저장 가능

```jsx
/* 1. 함수 선언식(Function Declarations) */ 
function add_1(x, y) { return x + y; }

/* 2. 함수 표현식(Function Expressions) */ 
const add_2 = function (x, y) { return x + y; };

/* 3. 화살표 함수 (Arrow Function) */
const add_3 = (x, y) => x + y;

const add_4 = add_1;

console.log(add_4(1, 3)); // 4
console.log(add_1 == add_2); // false
console.log(add_1 == add_4); // true
console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_3));
console.log(Object.getOwnPropertyDescriptors(add_4));
```

### 함수 저장

- 배열의 요소(element) 혹은 객체의 속성에 함수를 정의하여 저장 가능

```jsx
// 함수 저장
let list = [ 
	"john", 
	27, 
	function hello_func() { 
		console.log("hello"); 
	} 
];

let obj = {
	name: "john",
	age: 27,
	hello_func() {
	console.log("hello"); },
};

function hello_func() { 
	console.log("hello"); 
} 

hello_func(); // hello
obj.hello_func(); // hello 
list[2](); // hello

console.log(typeof hello_func); // function
console.log(typeof obj.hello_func); // function
console.log(typeof list[2]); // function
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(list));
```
