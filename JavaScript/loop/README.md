# 반복문

## for

- 선언문, 조건문, 증감문 형태로 이루어진 반복문
- 조건문이 fail이 되기 전까지 코드 블록을 계속적으로 반복 수행
- 선언문, 조건문, 증감문 자리에 공백 입력 가능

```jsx
// for
for (let i = 0; i < 3; i++) {
	console.log(i); // 0 1 2
}

for (let i = 10; i < 3; i++) {
	 console.log(i); // 출력안됨
}

let num = 0;
for (; num < 2; ) {
	console.log(num); num++; // 0 1 
}
```

- 2중 for문

```jsx
// 2중 for문
for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		console.log(`${i} + ${j} = ${i + j}`);
  }
}
```

### 반복문 for(확장)

- for .. in 반복문
    - 객체의 key, value 형태를 반복하여 수행하는데 최적화 된 유형
    - 첫번째부터 마지막까지, 객체의 키 개수만큼 반복

```jsx
// for .. in
const person = { 
	fname: "John", 
	lname: "Bob", 
	age: 25 
}; 

let text = "";

for (let x in person) {
	 text += person[x];
}
console.log(text); // JohnBob25
```

- for .. of 반복문
    - Collection 객체 자체가 Symbol.iterator 속성을 가지고 있어야 동작 가능한 유형
    - ES6에 새로 추가된 Collection 기반의 반복 구문

```jsx
// for .. of
let language = "javascript";
let text = "";

for (let x of language){
	text += x;
	console.log(x);
}
console.log(text);
```

## while

- 조건문이 참일 때 코드 블록을 계속해서 반복 수행하는 반복문
- for문에 비해 선언문과 증감문 없이 loop를 수행하며, 무한 loop등 수행 시 많이 사용
- 조건문을 코드 블록보다 아래로 옮긴 do .. while 반복문도 존재(최소 한번 수행이 필요할 때 많이 사용)

```jsx
// while
let i = 0;
while (i < 3) {
	console.log(i); // 0 1 2 
	i++;
}

// do while
i = 0;
do {
	console.log(i); 
	i++;
} while (i < 3); // 4

i = 4;
do {
	console.log(i); 
	i++;
} while (i < 3);
```

## 반복문 제어

### break

- 반복문 수행 시 코드 블록을 탈출할 때 사용되는 식별자
- 다중 반복문일 경우 가장 안쪽의 반복문을 종료
- Label을 통하여 다중 반복문을 한번에 종료 가능
    - Label : 반복문 앞에 콜론과 함께 쓰이는 식별자

```jsx
// break
let text = "";
for (let i = 0; i < 10; i++) {
	 if (i === 3)
	 break;
	text = text + i;
}
console.log(text); // "012"
```

### continue

- 반복문 수행 시 코드 블록 실행을 해당 라인에서 중지하고 블록 코드를 종료 시킨 후 반복문 내 명시된 조건 판단

```jsx
// continue
let text = "";
for (let i = 0; i < 10; i++) {
	 if (i === 3) 
	 continue; 
	 text = text + i;
}
console.log(text); // "012456789"
```

### Label

- 프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자
- break와 continue를 사용하는 반복문 안에서만 사용 가능하며, break나 continue 지시자 위에 있어야 함

```jsx
// label
for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
	console.log(i + " * " + j + " = " + i * j); 
	break;
	}
}
end: for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				console.log(i + " * " + j + " = " + i * j); 
				break end;
			} 
}
```

## 연습문제

- 문제1
    - 반복문 for을 이용하여 0부터 10까지의 정수 중 짝수의 합을 구한 뒤 출력해주는 코드를 작성하시오.

```jsx
// 문제1
const UNTIL_NUM = 10; 
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
	if (i % 2 == 0) {
		sum += i;
	}
}

console.log(sum); // 30
```

- 문제2
    - 반복문 for 2개를 이용하여 2 ~ 9단까지 출력해주는 코드를 작성하시오.

```jsx
// 문제2
for (let i = 2; i <= 9; i++) { 
	for (let j = 1; j <= 9; j++) {
		console.log(i + " x " + j + " = " + i * j);
	}	
}
```
