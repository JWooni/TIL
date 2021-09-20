# **화살표 함수 (Arrow Function)**

[mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- 화살표 함수는 ES6문법. function 키워드 사용해서 함수를 만든 것보다 간단히 함수를 표현하고 항상 익명이다.

```jsx
// 화살표 함수
// () => vs function () {}

// 일반 함수
const double = function (x){
  return x * 2
}

console.log('double: ', double(7))

// 화살표 함수
const doubleArrow = x => x * 2
console.log('doubleArrow', doubleArrow(7))
```

- 화살표 함수 기본 문법

```jsx
// 매개변수가 없는 경우
const arg = () => console.log('매개변수 없음')
arg() // 매개변수 없음

// 매개변수가 하나인 경우
const argOne = x => x
console.log(argOne('매개변수 하나')) // 매개변수 하나

// 매개변수가 여려개인 경우
const argMany = (a, b) => a + b // 간단하게 한줄로 표현할 땐 "{}" 없이 값이 반환됩니다.
console.log(argMany(1, 2)) // 3

const argManyA = (a, b) => { return a + b }
console.log(argManyA(1, 2)) // 3

const argManyB = (a, b) => { a + b } // "{}"를 사용했는데 return이 없을 때 
console.log(argManyB(1, 2)) // undefined

const argManyLines = (a, b) => { // 여러줄 썼을 때
	const c = 3
	return a + b + c
}
console.log(argManyLines(1, 2, 3)) // 6

/*
"{}"를 사용하면 값을 반환할 때 return을 사용해야합니다.
"{}"를 사용하지 않으면 undefied를 반환합니다.
"{}"을 사용할 때는 여러줄을 썼을 때 사용합니다.
*/

// 객체를 반환할 때
const objReturn = () => ( { a: 1, b: 2, c: 3 } )
console.log(objReturn()) // { a: 1, b: 2, c: 3 }
```
