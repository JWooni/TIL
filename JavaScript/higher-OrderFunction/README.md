# 고차함수

- 하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수
- 매개변수로 전달되는 함수는 콜백 함수(Callback function)
- 대표 배열 조작 메서드
    - 임의 정렬 : Array.sort(callback function)
    - 반복 작업 : Array.forEach()
    - 콜백함수 결과 배열 반환 : Array.map()
    - 조건 만족하는 하나의 값 반환 : Array.find()
    - 조건 만족하는 값 배열로 반환 : Array.filter()
    - 누적 결과 값 반환 : Array.reduce()

 

## sort() 문제와 한계점

- 문제점 : 일의 자리 4가 10의 자리보다 뒤쪽에 정렬
- 원인 : sort 메서드로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 발생

```jsx
// sort() 문제와 한계점
let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12]; 

console.log(nums.sort()); // [ -1, 0, 1, 10, 12, 2, 20, 3, 4 ] 
console.log(nums.reverse()); // [ 4, 3, 20, 2, 12, 10, 1, 0, -1 ]
```

- 한계점 : 대소문자 구분 없이 정렬하고 싶지만, 대소문자 구분되어 정렬

```jsx
let fruits = ["apple", "Orange", "orange", "melon"]; 

console.log(fruits.sort()); // [ 'Orange', 'apple', 'melon', 'orange' ] 
console.log(fruits.reverse()); // [ 'orange', 'melon', 'apple', 'Orange' ]
```

- 해결방법
    - sort() 함수의 매개변수로 함수를 넣어 고차함수를 이용한 정렬 수행 가능

```jsx
let ascending_order = function (x, y) { return x - y; };
let descending_order = function (x, y) { return y - x; };
let nums = [1, -1, 4, 0, 10, 20, 12]; 
console.log(nums.sort(ascending_order)); // [ -1,  0,  1, 4, 10, 12, 20] 
console.log(nums.sort(descending_order)); // [ 20, 12, 10, 4, 1, 0, -1 ]
```

- 대소문자 구분 없이

```jsx
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
```

## 그 외 고차함수

### forEach()

- 배열 요소 별 콜백 함수 각각에 실행 : Array.forEach(function(item, index, array){})
    - item : 배열 요소
    - index : 배열 위치
    - array : 배열

```jsx
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
```

## map()

- 배열 요소 별 함수 호출 및 결과를 배열로 반환 : Array.map(function(item, index, array){})
    - item : 배열 요소
    - index : 배열 위치
    - array : 배열

```jsx
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
```

## find()

- 콜백 함수의 조건을 만족하는, 단 하나의 값만 반환 : Array.find(function(item, index, array){})
    - item : 배열 요소
    - index : 배열 위치
    - array : 배열

```jsx
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
```

## filter()

- 콜백 함수의 조건을 만족하는 값을 배열로 반환 : Array.filter(function(item, index, array){})
    - item : 배열 요소
    - index : 배열 위치
    - array : 배열

```jsx
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
```

## reduce()

- 요소 별 함수 수행 누적 결과값 반환 : Array.reduce(function(accumulator, item, index, array){})
    - accumulator : 이전 함수 결과(initial로 초기값 설정 가능)
    - item : 배열 요소
    - index : 배열 위치
    - array : 배열

```jsx
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
```
