// 정의
let str_1 = "hello_1", str_2 = String("Hello_2"); 
let num = 3, str_3 = `hello_${num}`;
console.log(str_1); // hello_1
console.log(str_2); // hello_2
console.log(str_3); // hello_3
console.log(`hello_${2 * 2}`); // hello_4

// 문자 표기
console.log("line\nfeed"); // line <newline> feed
console.log("carriage\rreturn"); // carriage <newline> return
console.log("backslash \\"); // backslash \
console.log("tab\ttab"); // tab tab
console.log("smile: \u{1F60D}"); // smile: 😍

// 문자열 길이 확인
let str = `hello world!!!`;
let newline_string = "hello\nworld\n!!!"; 
console.log(str.length); // 15
console.log(newline_string.length); // 15

// 문자열 내 개별 문자 접근
let str = "hello, world!!!";
console.log(str.charAt(1)); // e
console.log(str.charCodeAt(1)); // 101
console.log(str[0]); // h

// 문자열 검색
let text = "hello, world!!!";
console.log(text.indexOf("l")); // 2
console.log(text.indexOf("l", 3)); // 3
console.log(text.lastIndexOf("l")); // 10
console.log(text.includes("HeLlo")); // false
console.log(text.startsWith("ello", 1)); // true
console.log(text.endsWith("world")); // false

// 문자열 대소문자 변환
let str = "HeLlO!!";
console.log(str.toUpperCase()); // HELLO!! 
console.log(str.toLowerCase()); // hello!!0

// 문자열 치환
let text = "helLo, world!!!"; let changed_text = "";

changed_text = text.replace("world", "earth");

console.log(changed_text); // helLo, earth!!!
console.log(text); // helLo, world!!!
console.log(text.replace("!", "?")); // helLo, world?!!
console.log(text.replace("l", "i")); // heiLo, world!!!
console.log(text.replace(/l/g, "i")); // heiLo, worid!!!
console.log(text.replace(/l/gi, "i")); // heiio, worid!!!

// 문자열 추출
let text = "hello, world!!!";

console.log(text.slice(0, 5)); // hello
console.log(text.slice(4, 5)); // o
console.log(text.slice(4)); // o, world!!!
console.log(text.slice(-4)); // d!!!

// substring: end > start -> start > end
console.log(text.slice(2, 6)); // llo,
console.log(text.slice(6, 2)); // output:
console.log(text.substring(2, 6)); // llo,
console.log(text.substring(6, 2)); // llo,

console.log(text.substr(2, 6)); // llo, w
console.log(text.substr(-5, 3)); // ld!

// 문자열 분할
let fruits = "apple banana melon"; 

result = fruits.split(" ");

console.log(result); // [ 'apple', 'banana', 'melon' ]
console.log(result[0]); // apple
console.log(result[1]); // banana
console.log(result[2]); // melon

let text = "hello"; 
result = text.split("");
console.log(result); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(result.length); // 5
console.log(result[0]); // h

result = text.split("", 3);
console.log(result); // [ 'h', 'e', 'l' ] 
console.log(result.length); // 3
