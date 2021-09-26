// 함수 정의
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


// call by *
// call by value
let a = 1;
let add = function (b) { b = b + 1; }; // callee 
add(a); // caller
console.log(a); // 1

// call by reference
var a = { v: 1 };
var add = function (b) { b.v = b.v + 1; }; // callee 
add(a); // caller
console.log(a.v); // 2


// 연습문제
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

	
// 함수의 이해
// 함수 표현
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
