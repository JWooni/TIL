# Math

[mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)

- 표준 Built-in 객체로써 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체
- Math는 생성자 함수가 아니며, 모든 속성과 메서드는 정적이기에 Math.function()으로 언제든 호출 가능
- 대표 속성 및 메서드
    - 오일러 상수(e) : Math.E
    - PI : Math.PI
    - 절대값 : Math.abs(x)
    - 최대값 : Math.max(x)
    - 최소값 : Math.min(x)
    - 랜덤 난수 값 : Math.random()
    - 제곱과 제곱근 : Math.pow(x, y), Math.sqrt(x)
    - 소수점 처리 : Math.round(x), Math.ceil(x), Math.floor(x)

## 최대 / 최소 / 절대값

- 최대값 : Math.max(...x)
- 최소값 : Math.min(...x)
- 절대값 : Math.abs(x)
- 배열을 인수로 받아 최대 / 최소를 산출하려면 apply 함수 혹은 스프레드 문법 사용 필요

```jsx
/* 1. MAX/MIN */
console.log(Math.max(1, -1)); // 1
console.log(Math.min(1, -1)); // -1
console.log(Math.max(1, -1, 5, 23, 17, -4)); // 23
console.log(Math.min(1, -1, 5, 23, 17, -4)); // -4

let nums = [1, -1, 5, 23, 17, -4]; 

// use apply
console.log(`Max: ${Math.max.apply(null, nums)}`); // MAX: 23 
console.log(`Min: ${Math.min.apply(null, nums)}`); // MIN: -4 

// use spread
console.log(`Max: ${Math.max(...nums)}`); // output: MAX: 23 
console.log(`Min: ${Math.min(...nums)}`); // output: MIN: -4

/* 2. ABS */
console.log(Math.abs(1)); // 1
console.log(Math.abs(-1)); // 1
console.log(Math.abs(-Infinity)); // Infinity
```

## 속성 및 랜덤

- 0과 1사이의 난수 랜덤 : Math.random()

```jsx
// 속성 및 랜덤
/* 1. Math property */
console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793

/* 2. Random */
for (let i = 0; i < 3; i++) { 
	console.log(Math.random());
}

for (let i = 0; i < 3; i++) {
	console.log(Number.parseInt(Math.random() * 10)); 
}
```

## 제곱 / 제곱근 / 소수점 처리

- 제곱 : Math.pow(x, y)
- 제곱근 : Math.sqrt(x)
- 소수점 이하 반올림 정수 : Math.round(x)
- 소수점 이하 올림 : Math.ceil(x)
- 소수점 이하 내림 : Math.floor(x)

```jsx
// 제곱 / 제곱근 / 소수점 처리
/* 1. pow */
console.log(Math.pow(2, 3)); // 8 
console.log(2 ** 3); // 8

/* 2. sqrt */
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(2)); // 1.4142135623730951 

/* 3. round, ceil, floor */
console.log(Math.round(3.5)); // 4
console.log(Math.round(-2.3)); // -2
console.log(Math.round(-2.7)); // -3
console.log(Math.ceil(3.5)); // 4
console.log(Math.ceil(-2.3)); // -2
console.log(Math.ceil(-2.7)); // -2
console.log(Math.floor(3.7)); // 4
console.log(Math.floor(-2.3)); // -3
console.log(Math.floor(-2.7)); // -3
```
