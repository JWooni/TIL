// typeof
let str = "hello world";
console.log(typeof str);

console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof 456n);
console.log(typeof 123.123);
console.log(typeof true);
console.log(typeof "hello");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console.log);

// boolean
let name_check = true; // 네, name 입력이 확인되었습니다.
let age_check = false; // 아니요, age 입력이 확인되지 않았습니다.
let value_check = 10 > 3; // 비교 결과: 참 -> true
console.log(value_check); // output: true

// null
console.log(typeof null); // output: object  하위 버전 호환성으로 object 표기
const null_check = null;
console.log(null_check === null); // output: true

// undefined
let name; // 할당 후 초기화 하지 않음 
console.log(name); // output: undefined

// number
let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1 / 0;
let num_4 = 123456n; // BigInt("123456")
console.log(num_1 - num_2); // output: -0.45600000000000307
console.log((num_1 - num_2).toFixed(3)); // output: -0.456
console.log(num_3); // Infinity
console.log(num_1 / "hello"); // NaN
console.log(typeof num_4); // bigint

// string
let str_1 = "hello_1";
let str_2 = 'hello_2';
let num = 3;
let str_3 = `hello_${num}`;
console.log(str_1); // output: hello_1
console.log(str_2); // output: hello_2
console.log(str_3); // output: hello_3
