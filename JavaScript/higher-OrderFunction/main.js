// sort() 문제와 한계점
let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12]; 

console.log(nums.sort()); // [ -1, 0, 1, 10, 12, 2, 20, 3, 4 ] 
console.log(nums.reverse()); // [ 4, 3, 20, 2, 12, 10, 1, 0, -1 ]


let fruits = ["apple", "Orange", "orange", "melon"]; 

console.log(fruits.sort()); // [ 'Orange', 'apple', 'melon', 'orange' ] 
console.log(fruits.reverse()); // [ 'orange', 'melon', 'apple', 'Orange' ]


let ascending_order = function (x, y) { return x - y; };
let descending_order = function (x, y) { return y - x; };
let nums = [1, -1, 4, 0, 10, 20, 12]; 
console.log(nums.sort(ascending_order)); // [ -1,  0,  1, 4, 10, 12, 20] 
console.log(nums.sort(descending_order)); // [ 20, 12, 10, 4, 1, 0, -1 ]


let ascending_order = function (x, y) {
	x = x.toUpperCase();
	y = y.toUpperCase();
	if (x > y) return 1; else if (y > x) return -1; else return 0;
	};
	let descending_order = function (x, y) {
	x = x.toUpperCase();
	y = y.toUpperCase();
	if (x < y) return 1; else if (y < x) return -1; else return 0;
	};
	let fruits = ["apple", "Orange", "orange", "melon"]; 
	console.log(fruits.sort(ascending_order)); 	// [ 'apple', 'melon', 'Orange', 'orange' ] 
	console.log(fruits.sort(descending_order)); // [ 'Orange', 'orange', 'melon', 'apple' ]


// 그 외 고차함수
// forEach()
// use for loop
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) { 
	console.log(nums[i]); // 1 2 3
} 
// use forEach 
nums.forEach(function (i) { 
	console.log(i); // 1 2 3
});

// map()
// use for loop
let nums = [1, 2, 3, 4, 5]; 
let use_for_loop = [];
for (let i = 0; i < nums.length; i++) { 
	use_for_loop.push(nums[i] * 2);
}
console.log(use_for_loop); // [ 2, 4, 6, 8, 10 ]
// use map
let nums = [1, 2, 3, 4, 5];
let use_map = nums.map(function (item) { 
	return item * 2;
});
console.log(use_map); // [ 2, 4, 6, 8, 10 ]

// find()
let users = [
	{ name: "bob", age: 17, job: false }, 
	{ name: "alice", age: 20, job: false }, 
	{ name: "john", age: 27, job: true },
];

let find_job = users.find(function (user) { 
	return user.job == false;
});
console.log(find_job); // { name: 'bob', age: 17, job: false } 

let find_age = users.find(function (user) {
	return user.age > 19; 
});
console.log(find_age); // { name: 'alice', age: 20, job: false }

// filter()
let users = [
	{ name: "bob", age: 17, job: false }, 
	{ name: "alice", age: 20, job: false }, 
	{ name: "john", age: 27, job: true },
];

let filter_job = users.filter(function (user) { 
	return user.job == false;
});
console.log(filter_job);
	/* [ { name: 'bob', age: 17, job: false },
	{ name: 'alice', age: 20, job: false } ] */ 

let filter_age = users.filter(function (user) {
	return user.age > 19; 
});
console.log(filter_age);
	/* [ { name: 'alice', age: 20, job: false }, 
	{ name: 'john', age: 27, job: true } ] */

// reduce()
let nums = [1, 2, 3, 4, 5]; 
let call_count = 0;
console.log("result\tvalue\tindex");
let sum = nums.reduce(function (accumulator, item, index, array) { 
	console.log(accumulator, "\t\t", item, "\t\t", index);
	call_count++;
	return accumulator + item;
	}, 
0); 
console.log(call_count); // 5 
console.log(sum); // 15 
