/* 표기법(Exponential notation) */
let billion_1 = 1000000000; // 10억
let billion_2 = 1e9; // 1 + 0 9개
let us = 1e-6; // micro sec, 왼쪽으로 6번 소수점 이동

console.log(billion_1); // 1000000000
console.log(billion_2); // 1000000000
console.log(us); // 0.000001

/* N 진법 (Base N)*/
console.log(0x0f); // 15
console.log(0o17); // 15
console.log(0b1111); // 15

/* 형 변환 (Type casting) */
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN
console.log(NaN); // NaN

/* 형 변환 (Type casting) */
let us = 1e-6; // micro sec, 왼쪽으로 6번 소수점 이동
console.log(us.toString()); // 0.000001
console.log(typeof us.toString()); // string
console.log(typeof String(us)); // string
console.log(typeof (us + "")); // string

/* 자리 수 표현 */
let num_1 = 125.0; let num_2 = 123.456;
console.log(num_1 - num_2); // 1.543999999999997
console.log((num_1 - num_2).toFixed(3)); // 1.544
console.log((num_1 - num_2).toPrecision(3)); // 1.54

/* Number 자료형 확인 */
console.log(!Number.isNaN(0.123)); // true
console.log(!Number.isNaN(123 / "hello")); // false
console.log(Number.isFinite(-123)); // true
console.log(Number.isFinite(Infinity)); // true
console.log(Number.isFinite("hello")); // false

/* 정수와 실수 형 변환 */
console.log(Number.parseInt("125px")); // 125
console.log(Number.parseFloat("1.25em")); // 1.25
console.log(Number.parseInt("1.25em")); // 1
console.log(Number.parseInt("t123")); // NaN
console.log(Number.parseInt("0f", 16)); // 15
