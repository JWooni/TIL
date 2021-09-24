# 변수

## 변수란?

- 변경 가능한 값을 저장하기 위한 기억 공간(memory)
- 사용하기 전 반드시 선언 필요
- 중복 선언 불가능
- 키워드 : let

```jsx
let A = 123;
console.log(A);

A = 456;
console.log(A);

let A = 789; // Syntax error
```

# 상수

## 상수란?

- 변경 불가능한 값을 저장하기 위한 기억 공간
- 사용하기 전 반드시 선언 필요
- 중복 선언 불가능
- 키워드 : const

```jsx
const B = 123; // 상수 선언과 동시에 값 초기화
console.log(B);

B = 456; // 값 재할당 에러

const C;
C = 123; // SyntaxError
```

# 변수 / 상수 예제

```jsx
// 선언 후 할당
let hi;
hi = "hello";

// 선언과 동시에 초기화
let halo = "hello!"

// 한 줄에 여러 변수 선언하고 초기화
let name = "john", age = 13, msg = "hello";

// 상수는 보통 대문자로 표기
const TESTCASE = 5;

console.log(age);
console.log(TESTCASE);
```
