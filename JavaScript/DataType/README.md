# **데이터 종류(자료형)**

- String(문자 데이터)

```jsx
// String (문자 데이터)
// 따옴표를 사용.
let myName = "KANTE";
let email = 'kante@aaaaa.com';
let hello = 'Hello ${myName}?!'

console.log(myName); // KANTE
console.log(email); // kante@aaaaa.com
console.log(hello); // Hello KANTE
```

- Number(숫자 데이터)

```jsx
// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냄.
let number = 123;
let opactiy = 1.57;

console.log(number); // 123
console.log(opactiy); // 1.57
```

- Boolean

```jsx
//true, false 두 가지 값밖에 없는 논리 데이터
let checked = true;
let isShow = false;

console.log(checked); // true
console.log(isShow); // false
```

- Undefined

```jsx
//  값이 할당되지 않은 상태
let undef;
let obj = {abc : 123};

console.log(undef); // ﻿undefined
console.log(obj.abc); // abc 
console.log(obj.xyz); // undefined
```

- Null

```jsx
// 어떤 값이 의도적으로 비어있음
let empty = null;

console.log(empty); // null
```

- Object(객체 데이터)

```jsx
//여러 데이터를 Key : Value 형태로 저장. { }
let user = {
 // Key : Value,
 name : 'KANTE',
 age : 31,
 isValid : true
};

console.log(user.name); // KANTE
console.log(user.age); // 31
console.log(user.isValid ); // true
```

- Array(배열 데이터)

```jsx
// 여러 데이터를 순차적으로 저장. [ ]
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry
```
