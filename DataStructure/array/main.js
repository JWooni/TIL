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


//
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
/* output:
{ 
    '0': { value: 'one', writable: true, enumerable: true, configurable: true },
    '1': { value: 'two', writable: true, enumerable: true, configurable: true }, 
    length: { value: 2, writable: true, enumerable: false, configurable: false }, 
    once: { value: 'once', writable: true, enumerable: true, configurable: true }, 
    twice: { value: 'twice', writable: true, enumerable: true, configurable: true}
} 
*/


// 
let num = 123.456;
let str = "Here I am!";
let fruits = ["apple", "orange", "melon"];

console.log(Array.isArray(num)); // false
console.log(Array.isArray(str)); // false
console.log(Array.isArray(fruits)); // true


// 
let fruits = ["apple", "orange", "melon"];
console.log(fruits); // [ 'apple', 'orange', 'melon' ] 
console.log(fruits.length); // 3
delete fruits[1];
console.log(fruits); // [ 'apple', <1 empty item>, 'melon' ] 
console.log(fruits.length); // 3


// 
let fruits = ["apple", "orange", "melon"]; 
ret = fruits.push("watermelon");
console.log(fruits); // [ 'apple', 'kiwi', 'melon', 'watermelon' ] 
console.log(ret); // 4
ret = fruits.pop();
console.log(fruits); // [ 'apple', 'kiwi', 'melon' ] 
console.log(ret); // watermelon


// 
let fruits = ["apple", "orange", "melon"]; 
ret = fruits.shift();

console.log(fruits); // [ 'orange', 'melon' ] 
console.log(ret); // apple

ret = fruits.unshift("watermelon");
console.log(fruits); // [ 'watermelon', 'orange', 'melon' ] 
console.log(ret); // 3


// 
let fruits = ["apple", "orange", "melon"];
console.log(fruits.splice(1)); // [ 'orange', 'melon' ] 
console.log(fruits); // [ 'apple' ]

fruits = ["apple", "orange", "melon", "strawberry"];
console.log(fruits.splice(1, 1)); // [ 'orange' ]
console.log(fruits); // [ 'apple', 'melon', 'strawberry' ]
console.log(fruits.splice(1, 1, "mango", "kiwi")); // [ 'melon' ]
console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'strawberry' ]


// 
let fruits = ["apple", "orange", "melon"];
console.log(fruits.slice(1)); // [ 'orange', 'melon' ]
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.slice(1, 2)); // [ 'orange' ]
console.log(fruits.slice(-2)); // [ 'orange', 'melon' ]


//
let fruits = ["apple", "orange", "melon"]; 
console.log(fruits.concat("strawberry")); // [ 'apple', 'orange', 'melon', 'strawberry' ] 
console.log(fruits.concat(["cherry", "banana"])); // [ 'apple', 'orange', 'melon', 'cherry', 'banana' ] 
console.log(fruits.concat(["cherry", "banana"], "mango")); // [ 'apple', 'orange', 'melon', 'cherry', 'banana', 'mango' ]

// 
let fruits = ["apple", "orange", "melon"]; 
// 1. use for (index)
for (let i = 0; i < fruits.length; i++) { 
    console.log(fruits[i]); // apple, orange, melon
}

// 2. use for ...(element) of 
for (let fruit of fruits) {
    console.log(fruit); // apple, orange, melon 
}

// 3. use for ...(key) in
for (let key in fruits) {
    console.log(fruits[key]); // apple, orange, melon 
}


// 배열 탐색 / 변형
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
// 배열 정렬
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
console.log(str_separator); // apple;orange;banana;melon let result = str_separator.split(";");
console.log(result); // [ 'apple', 'orange', 'banana', 'melon' ]


// 배열 반복
// sort
// before
let nums = [1, -1, 4, 0, 10, 20, 12];
console.log(nums.sort()); // [ -1, 0, 1, 10, 12, 20, 4 ] 
console.log(nums.reverse()); // [ 4, 20, 12, 10, 1,  0, -1 ]

// after
let ascending_order = function (x, y) { return x - y; };
let descending_order = function (x, y) { return y - x; };
let nums = [1, -1, 4, 0, 10, 20, 12]; 
console.log(nums.sort(ascending_order)); // [ -1,  0,  1, 4, 10, 12, 20] 
console.log(nums.sort(descending_order)); // [ 20, 12, 10, 4, 1, 0, -1 ]


// forEach()
// for문
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) { 
    console.log(nums[i]);
}

// forEach()
nums.forEach(function (i) { 
    console.log(i);
});


// map()
// for문
let nums = [1, 2, 3, 4, 5]; 
let use_for_loop = [];
for (let i = 0; i < nums.length; i++) { 
    use_for_loop.push(nums[i] * 2);
}
console.log(use_for_loop); // [ 2, 4, 6, 8, 10 ]

// map() 사용
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
/* 
    [ { name: 'bob', age: 17, job: false },
    { name: 'alice', age: 20, job: false } ] 
*/ 
    
let filter_age = users.filter(function (user) {
    return user.age > 19; 
});
console.log(filter_age);
/* 
    [ { name: 'alice', age: 20, job: false }, 
    { name: 'john', age: 27, job: true } ] 
*/


// reduce()
let nums = [1, 2, 3, 4, 5]; 
let call_count = 0;

console.log("result\tvalue\tindex");

let sum = nums.reduce(function (accumulator, item, index, array) { 
    console.log(accumulator, "\t\t", item, "\t\t", index);
    call_count++;
    return accumulator + item;
}, 0); // initial 없다면 idnex 1부터 시작 
/* output
result value index
   0     1     0
   1     2     1
   3     3     2
   6     4     3
   10    5     4 
*/
console.log(call_count); // 5 
console.log(sum); // 15


// 배열 논리연산
// some()
let users = [
    { name: "bob", age: 17, job: false }, 
    { name: "alice", age: 20, job: false }, 
    { name: "john", age: 27, job: true },
];
let some_job = users.some(function (user) { 
    return user.job == false;
});
console.log(some_job); // true 

let some_age = users.some(function (user) {
    return user.age < 16; 
});
console.log(some_age); // false 

let empty = [].some((item) => item > 16);
console.log(empty); // false

// every()
let users = [
    { name: "bob", age: 17, job: false }, 
    { name: "alice", age: 20, job: false }, 
    { name: "john", age: 27, job: true },
];

let every_job = users.every(function (user) { 
    return user.job == false;
});
console.log(every_job); // false 

let every_age = users.every(function (user) {
    return user.age > 16; 
});
console.log(every_age); // true 
let empty = [].every((item) => item > 16);
console.log(empty); // true


// N차원 배열
let array = [ [101, 102, 103], [201, 202, 203], [301, 302, 303], ];
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]); // [ 101, 102, 103 ]
console.log(array[1][0]); // 201
console.log(array[2][2]); // 303
let arr_2 = array.pop();
console.log(array.length); // 2
console.log(arr_2); // [ 301, 302, 303 ]
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]
let array_num = array.push([401, 402, 403]);
console.log(array.length); // 3
console.log(array_num); // 3
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) { 
        array[i][j] += 1000;
        console.log(array[i][j]); 
    }
}
/* 1101 ... 1403 */
