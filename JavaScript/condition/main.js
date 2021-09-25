# 조건문(condition)

## if-else

- 알고리즘에서 논리적 비교를 할 때 사용되는 조건식
- if, if else, else 키워드를 통해 구성되며, 조건식에 맞을 경우 중괄호 {} 내에 있는 명령문을 수행
- 단, 실행 문장이 단일 문장인 경우에는 {} 생략 가능

```jsx
let apple_price = 9; 
if (apple_price >= 10) {
	// 10 ~
	console.log("very expensive :(");
 } else if (apple_price < 5) {
	// ~ 5
	console.log("very cheap :)");
 } else {
	// 5 ~ 9
	console.log("nice!"); // nice!
 }

let age = 10;
if (age < 10) // ~ 9 
	console.log("young!");
else // 10 ~
	console.log("old!"); // old!
```

## 3항 연산자

- 3항 연산자를 통해 if-else를 대체하여 사용 가능
- 3항 연산자 : 변수 = (조건식) ? 참일 때 값 : 거짓일 때 값

```jsx
// 3항 연산자
let age = 20;

// 조건문: if-else 
if (age < 19) {
	msg = "The user is not an adult.";
 } else {
	msg = "The user is an adult.";
 }
console.log(msg); // The user is an adult. 

// 조건문: 3항 연산자
msg_another = age < 19 ? "The user is not an adult." : "The user is an adult.";
console.log(msg_another); // The user is an adult.
```

## swith

- switch는 표현식을 평가하여 그 값이 일치하는 case문을 실행하는 조건문
- switch, case, break, default 키워드를 통해 구성되며, switch의 조건에 맞는 case 구문을 수행
- 일반적으로 하나의 case만 수행되도록 case 끝을 break로 끝맺음

```jsx
// switch
let day_number = 1;
let day = "";
switch (day_number) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday"; 
		break; 
	case 3:
		day = "Wednesday"; 
		break; 
	case 4:
		day = "Thursday"; 
		break; 
	case 5:
		day = "Friday"; 
		break; 
	case 6:
		day = "Saturday"; 
		break; 
	default:
		day = "error"; 
		break;
 }
console.log(day); // monday

////////////////////////////////////////////////////

let browser = "Chrome"; 
switch (browser) {
	case "Explorer":
		msg = "ActiveX installation required."; 
		break;
	case "Chrome":
	case "Firefox":
	case "Safari":
	case "Opera":
		msg = "Supported browsers!"; 
		break;
	default:
		msg = "Unsupported browsers!"; 
		break;
	}
	console.log(msg); //Supported browsers!
```

## 연습문제

- 조건문 switch를 이용하여 1 ~ 7 사이의 숫자를 입력 받으면 요일을 출력해주는 코드를 작성하시오.
- 1(월요일) ~ 7(일요일)로 맵핑된다.

```jsx
const day = 3;
let weekend = "";

switch (day) {
	case 1 : 
		weekend = "월요일";
		break;
	case 2 : 
		weekend = "화요일";
		break;
	case 3 : 
		weekend = "수요일";
		break;
	case 4 : 
		weekend = "목요일";
		break;
	case 5 : 
		weekend = "금요일";
		break;
	case 6 : 
		weekend = "토요일";
		break;
	case 7 : 
		weekend = "일요일";
		break;
}

console.log(weekend); // 수요일
```
