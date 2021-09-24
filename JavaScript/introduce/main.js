console.log('hello world');

const fs = require("fs");
const input = fs.readFileSync("./input.txt","utf-8")

console.log(input);

let 안녕 = "하세요";
let hi = "hello";
let HI = "HELLO";

console.log(안녕);
console.log(hi);
console.log(HI);

// single-line comments
// 12312344444444
console.log("Hello world!"); // 단일 행 주석

/* mulit-line comments
	어떤 문자가 와도 개행이 되어도 주석 처리가 된다.
	주석으로 인정이 된다.
	console.log("Hello world!!");
	*/
	console.log("Hello world!!");
