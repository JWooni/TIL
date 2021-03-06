# 배열

- 여러 개체(Entity)값을 순차적으로 나열한 자료 구조(알고리즘 내 사용 빈도 많음)
- 배열 내 값을 요소(element)라고 하며, 배열 요소는 index로 접근
- 대표 속성과 메서드
    - 배열 크기 및 배열 여부 확인 : Array.length, Array.isArray()
    - 배열 추가 / 삭제 : Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array,splice(), Array.slice() 등
    - 배열 탐색 : Array.indexOf(), Array.lastIndexOf(), Array.includes()
    - 배열 변형 : Array.sort(), Array.reverse(), Array.join()

## 배열 선언 / 접근 / 속성

- 선언 : "new Array()" 혹은 "[]"를 통해 선언하며, 사이즈 혹은 값을 입력하여 초기화도 가능
- 접근 방법 : "Array[index]"를 통해 index를 통하여 0(1) 접근
- 배열 속성 : "Array.length"를 통해 배열 요소의 개수 확인 가능

```jsx
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
```

## 배열의 실체

- 자바스크립에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체
- 메모리가 연속적인 밀집 배열(dense array)이 아닌 비 연속적인 희소 배열(sparse array)

```jsx
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
```

## 배열 타입 확인 및 요소 삭제

- 배열 타입 확인
    - 배열 타입 확인 방법 : Array.isArray(value)

```jsx
// 배열 타입 확인
let num = 123.456;
let str = "Here I am!";
let fruits = ["apple", "orange", "melon"];
console.log(Array.isArray(num)); // false
console.log(Array.isArray(str)); // false
```

- 배열 요소 삭제
    - 배열 일부 요소 삭제 : delete array[index] (삭제해도 배열 사이즈가 그대로인 문제점)

```jsx
// 배열 요소 삭제
let fruits = ["apple", "orange", "melon"];
console.log(fruits); // [ 'apple', 'orange', 'melon' ] 
console.log(fruits.length); // 3

delete fruits[1];
console.log(fruits); // [ 'apple', <1 empty item>, 'melon' ] 
console.log(fruits.length); // 3
```

## 배열 조작

- 배열 추가 / 삭제 (LIFO-Back)
    - 배열 추가 : Array.push(element), 배열 삭제 : Array.pop()

```jsx
let fruits = ["apple", "orange", "melon"]; 
ret = fruits.push("watermelon");
console.log(fruits); // [ 'apple', 'kiwi', 'melon', 'watermelon' ] 
console.log(ret); // 4
ret = fruits.pop();
console.log(fruits); // [ 'apple', 'kiwi', 'melon' ] 
console.log(ret); // watermelon
```

- 배열 추가 / 삭제 (LIFO-Front)
    - 배열 추가 : Array.unshift(element), 배열 삭제 : Array.shift()

```jsx
// 배열 추가 / 삭제 (LIFO-Front)
let fruits = ["apple", "orange", "melon"]; 

ret = fruits.shift();
console.log(fruits); // [ 'orange', 'melon' ] 
console.log(ret); // apple
ret = fruits.unshift("watermelon");
console.log(fruits); // [ 'watermelon', 'orange', 'melon' ] 
console.log(ret); // 3
```

- 배열 삭제 / 변경 (index)
    - 배열 요소 삭제 / 변경 : Array.splice(index[, deleteCount, elem1, ..., elemN])

```jsx
// 배열 삭제 / 변경 (index)
let fruits = ["apple", "orange", "melon"];

console.log(fruits.splice(1)); // [ 'orange', 'melon' ] 
console.log(fruits); // [ 'apple' ]
fruits = ["apple", "orange", "melon", "strawberry"];
console.log(fruits.splice(1, 1)); // [ 'orange' ]
console.log(fruits); // [ 'apple', 'melon', 'strawberry' ]
console.log(fruits.splice(1, 1, "mango", "kiwi")); // [ 'melon' ]
console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'strawberry' ]
```

- 배열 삭제 (index)
    - 배열 요소 삭제 : Array.slice([start], [end])

```jsx
// 배열 삭제 (index)
let fruits = ["apple", "orange", "melon"];
console.log(fruits.slice(1)); // [ 'orange', 'melon' ]
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.slice(1, 2)); // [ 'orange' ]
console.log(fruits.slice(-2)); // [ 'orange', 'melon' ]
```

- 배열 병합
    - 다중 배열 병합 : Array.concat(arg1, arg2, ...)

```jsx
// 배열 병합
// 다중 배열 병합
let fruits = ["apple", "orange", "melon"]; 
console.log(fruits.concat("strawberry")); // [ 'apple', 'orange', 'melon', 'strawberry' ] 
console.log(fruits.concat(["cherry", "banana"])); // [ 'apple', 'orange', 'melon', 'cherry', 'banana' ] 
console.log(fruits.concat(["cherry", "banana"], "mango")); // [ 'apple', 'orange', 'melon', 'cherry', 'banana', 'mango' ]
```

## 배열 반복문

- 다양한 반복문 문법을 통해 배열 요소에 접근 가능
- 반복문 문법 : for ... length(index접근), for ... of (element 접근), for ... in (key 접근)

```jsx
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
```

## 배열 탐색 / 변형

### 배열 탐색

- index 탐색(앞에서 부터) : Array.indexOf(item, from)
- index 탐색(뒤에서 부터) : Array.lastIndexOf(item, from)
- 값 포함 여부 확인 : Array.includes(item, from)

```jsx
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
```

### 배열 변형

- 배열 정렬 / 반전
    - 배열 정렬 : Array.sort()
    - 배열 반전 : Array.reverse()

```jsx
// 배열 변형
// 배열 정렬 / 반전
let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort()); // [ -1, 0, 1, 2, 4, 5 ] 
console.log(nums.reverse()); // [ 5, 4, 2, 1, 0, -1 ]

let fruits = ["apple", "orange", "banana", "melon"];
console.log(fruits.sort()); // [ 'apple', 'banana', 'melon', 'orange' ] 
console.log(fruits.reverse()); // [ 'orange', 'melon', 'banana', 'apple' ]
```

- 배열 변환
    - 배열 값을 문자열로 변환 : Array.join(separator)

```jsx
// 배열 변환
let fruits = ["apple", "orange", "banana", "melon"]; 
let str = fruits.join();

console.log(str); // apple,orange,banana,melon 

let str_separator = fruits.join(";");
console.log(str_separator); // apple;orange;banana;melon 

let result = str_separator.split(";");
console.log(result); // [ 'apple', 'orange', 'banana', 'melon' ]
```
