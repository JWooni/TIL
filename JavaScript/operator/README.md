# Operator(연산자)

- 연산자란 프로그래밍에서 쓰이는 기호들이다.
- 연산자에는 산술, 문자열, 증감, 비교, 대입, 삼항, 논리, 비트연산자 등이 있다.

## 산술 연산자 (arithmetic operator)

```jsx
 console.log(1 + 2)
 console.log(5 - 7)
 console.log(3 * 4)
 console.log(10 / 2)
 console.log(7 % 5)
```

## 할당 연산자 (assignment operator)

```jsx
let a = 2
 a = a + 1
 a += 1
 a *= 1

 console.log(a)
```

## 비교 연산자 (comparison operator)

```jsx
 const a = 13
 const b = 13

 console.log(a === b)

 function isEqual(x, y){
   return x === y
 }

 console.log(isEqual(1, 1))
 console.log(isEqual(2, '2'))

 console.log(a != b)

 console.log(a > b)
 console.log(a <= b)
```

## 논리 연산자 (logical operator)

```jsx
 const a = 1 === 1
 const b = 'AB' === 'ABC'
 const c = false

 console.log(a)
 console.log(b)
 console.log(c)

 console.log('&&',a && b && c) // 모두 trued여야 true
 console.log('||',a || b || c) // 하나라도 true면 true
 console.log('!:',!b) // 부정
```

## 삼항 연산자 (ternary operator)

```jsx
const a = 1 < 2

 if (a){
   console.log('참')
 } else {
   console.log('거짓')
 }

 console.log(a ? '참' : '거짓')
```
