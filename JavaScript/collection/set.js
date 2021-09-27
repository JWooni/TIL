
// Set
let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!");

console.log(set); // Set(0) {} 
console.log(num); // Set(5) { 1, 2, 3, 4, 5 } 
console.log(str); // Set(5) { 'H', 'e', 'l', 'o', '!' } 

/* 1. add */
set.add(1).add(1).add(10).add(20);
console.log(set); // Set(3) { 1, 10, 20 } 

/* 2. has */
console.log(set.has(10)); // true 
console.log(set.has(2)); // false 

/* 3. delete */
set.delete(1); 
set.delete(-1);
console.log(set); // Set(2) { 10, 20 }

// set 반복문
let str = new Set("Hello!"); 

console.log(str); // Set(5) { 'H', 'e', 'l', 'o', '!' } 

for (let item of str) {
	console.log(item); // H e l o !
}

for (let item of str.keys()) {
	console.log(item); // H e l o !
} 

for (let item of str.values()) {
	console.log(item); // H e l o !
}

for (let item of str.entries()) {
	console.log(item); // [ 'H', 'H' ] [ 'e', 'e' ] [ 'l', 'l' ] [ 'o', 'o' ] [ '!', '!' ] 

}

console.log(str.keys()); // [value]
console.log(str.entries()); // [value, value] <--- Map과의 호환성을 위해 존재
