// 배열
let arr_1 = new Array(10); 
let arr_2 = [];
console.log(arr_1); // [ <10 empty items> ] 
console.log(arr_2); // []

let fruits = ["apple", "orange", "melon"];
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.length); // 3
console.log(fruits[0]); // apple
console.log(fruits[1]); // orange
console.log(fruits[2]); // melon

fruits[1] = "kiwi";
console.log(fruits); // [ 'apple', 'kiwi', 'melon' ]

// 배열의 실체
let nums = []; 
nums.push("one"); 
nums.push("two");
console.log(nums.length); // 2 
console.log(nums); // [ 'one', 'two' ]

nums["once"] = "once"; 
nums["twice"] = "twice";
console.log(nums.length); // 2
console.log(nums); // [ 'one', 'two', once: 'once', twice: 'twice' ]
console.log(Object.getOwnPropertyDescriptors(nums));

// 배열 타입 확인
let num = 123.456;
let str = "Here I am!";
let fruits = ["apple", "orange", "melon"];
console.log(Array.isArray(num)); // false
console.log(Array.isArray(str)); // false

// 배열 요소 삭제
let fruits = ["apple", "orange", "melon"];
console.log(fruits); // [ 'apple', 'orange', 'melon' ] 
console.log(fruits.length); // 3

delete fruits[1];
console.log(fruits); // [ 'apple', <1 empty item>, 'melon' ] 
console.log(fruits.length); // 3

//배열 추가 / 삭제 (LIFO-Back)
let fruits = ["apple", "orange", "melon"]; 

ret = fruits.push("watermelon");
console.log(fruits); // [ 'apple', 'kiwi', 'melon', 'watermelon' ] 
console.log(ret); // 4
ret = fruits.pop();
console.log(fruits); // [ 'apple', 'kiwi', 'melon' ] 
console.log(ret); // watermelon

// 배열 추가 / 삭제 (LIFO-Front)
let fruits = ["apple", "orange", "melon"]; 

ret = fruits.shift();
console.log(fruits); // [ 'orange', 'melon' ] 
console.log(ret); // apple
ret = fruits.unshift("watermelon");
console.log(fruits); // [ 'watermelon', 'orange', 'melon' ] 
console.log(ret); // 3

// 배열 삭제 / 변경 (index)
let fruits = ["apple", "orange", "melon"];

console.log(fruits.splice(1)); // [ 'orange', 'melon' ] 
console.log(fruits); // [ 'apple' ]
fruits = ["apple", "orange", "melon", "strawberry"];
console.log(fruits.splice(1, 1)); // [ 'orange' ]
console.log(fruits); // [ 'apple', 'melon', 'strawberry' ]
console.log(fruits.splice(1, 1, "mango", "kiwi")); // [ 'melon' ]
console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'strawberry' ]

// 배열 삭제 (index)
let fruits = ["apple", "orange", "melon"];
console.log(fruits.slice(1)); // [ 'orange', 'melon' ]
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.slice(1, 2)); // [ 'orange' ]
console.log(fruits.slice(-2)); // [ 'orange', 'melon' ]

// 배열 병합
// 다중 배열 병합
let fruits = ["apple", "orange", "melon"]; 
console.log(fruits.concat("strawberry")); // [ 'apple', 'orange', 'melon', 'strawberry' ] 
console.log(fruits.concat(["cherry", "banana"])); // [ 'apple', 'orange', 'melon', 'cherry', 'banana' ] 
console.log(fruits.concat(["cherry", "banana"], "mango")); // [ 'apple', 'orange', 'melon', 'cherry', 'banana', 'mango' ]

// 배열 반복문
let fruits = ["apple", "orange", "melon"]; 

// 1. use for (index)
// apple, orange, melon
for (let i = 0; i < fruits.length; i++) { 
	console.log(fruits[i]);
}

// 2. use for ...(element) of 
// apple, orange, melon 
for (let fruit of fruits) {
	console.log(fruit); 
}

// 3. use for ...(key) in
// apple, orange, melon 
for (let key in fruits) {
	console.log(fruits[key]); 
}


// 배열 탐색
let fruits = ["apple", "orange", "banana", "orange", "melon"];
console.log(fruits.indexOf("orange")); // 1
console.log(fruits.indexOf("Orange")); // -1
console.log(fruits.indexOf("orange", 2)); // 3
console.log(fruits.lastIndexOf("orange")); // 3
console.log(fruits.lastIndexOf("orange", -3)); // 1
console.log(fruits.lastIndexOf("orange", 0)); // -1
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("Banana")); // false
console.log(fruits.includes(0)); // false

// 배열 변형
// 배열 정렬 / 반전
let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort()); // [ -1, 0, 1, 2, 4, 5 ] 
console.log(nums.reverse()); // [ 5, 4, 2, 1, 0, -1 ]

let fruits = ["apple", "orange", "banana", "melon"];
console.log(fruits.sort()); // [ 'apple', 'banana', 'melon', 'orange' ] 
console.log(fruits.reverse()); // [ 'orange', 'melon', 'banana', 'apple' ]

// 배열 변환
let fruits = ["apple", "orange", "banana", "melon"]; 
let str = fruits.join();

console.log(str); // apple,orange,banana,melon 

let str_separator = fruits.join(";");
console.log(str_separator); // apple;orange;banana;melon 

let result = str_separator.split(";");
console.log(result); // [ 'apple', 'orange', 'banana', 'melon' ]
