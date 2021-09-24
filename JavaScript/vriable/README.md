# **Variable (변수)**

- 필요한 값을 일시적으로 저장하기 위해 사용.
- 데이터를 저장하고 참조(사용)하는 데이터의 이름.

## let

```jsx
// 재사용이 가능
// 변수 선언
let a = 2;
let b = 5;

console.log(a + b); // 7
console.log(a - b); // -3
console.log(a * b); // 10

// 값(데이터)의 재할당 가능
let a = 12;
console.log(a); // 12

a = 999;
console.log(a); // 999
```

## const

```jsx
// 값(데이터)의 재할당 불가능
const a = 12;
console.log(a); //12

a = 999;
console.log(a); // Error
```

## **예약어**

- 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어

```jsx
let this = 'Hello!'; // SynatxError
let if = 123; // SynatxError
let break = true; // SynatxError
```
  
