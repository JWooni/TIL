// 산술 연산자 (arithmetic operator)
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)

// 할당 연산자 (assignment operator)
let a = 2
a = a + 1
a += 1
a *= 1

console.log(a)

// 비교 연산자 (comparison operator)
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

// 논리 연산자 (logical operator)
const a = 1 === 1
const b = 'AB' === 'ABC'
const c = false

console.log(a)
console.log(b)
console.log(c)

console.log('&&',a && b && c) // 모두 trued여야 true
console.log('||',a || b || c) // 하나라도 true면 true
console.log('!:',!b) // 부정

// 삼항 연산자 (ternary operator)
const a = 1 < 2

if (a){
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')

// 비교 연산자
console.log("Z" > "A"); // true
console.log("Hello" < "Hi"); // true
console.log("Hello" >= "Helloo"); // false
console.log("5" <= 10); // true
console.log(true == 1); // true
console.log(false != 123); // true
console.log(true === 1); // false
console.log(false !== 123); // true

// 논리 연산자
console.log(true || false); // true
console.log(Boolean(0 || false)); // false
console.log(Boolean(123 || false)); // true
console.log(Boolean(123 && 0)); // false
console.log(Boolean(false && true)); // false
console.log(Boolean(true && 3)); // true
console.log(Boolean(0 && false)); // false
console.log(!false); // true
console.log(!123); // false
