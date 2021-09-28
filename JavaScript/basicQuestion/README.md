# 기본 문제 풀이

## 조건문

- 대소 비교
    - 문제 설명
        - 두 정수를 입력 받아 문자열 형태의 대소비교 부등호를 반환하는 함수를 작성하시오.
            - 첫번째 수가 두번째 수보다 크면 >
            - 첫번째 수가 두번째 수보다 작으면 <
            - 첫번째 수와 두번째 수가 같으면 =

```jsx
function answer(x, y) {
let result = "";

if (x > y) {
	result = ">";
} else if (x < y) {
	result = "<";
} else {
	result = "=";
}

return result;
}

let input = [
	// TC: 1 
	[3, 5],
	// TC: 2 
	[7, 4],
	// TC: 3 
	[2, 2],
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i][0], input[i ][1])}`);
}
```

- 나누기와 대소비교
    - 문제 설명
        - 4개의 수를 입력 받아 나누기 연산을 통해 대소를 판단하는 함수를 제작하시오.
        - 입력 값은 1000이하의 자연수 a, b, c, d가 주어지고 a/b > c/d일 때는 1, a/b = c/d일 때는 0, a/b < c/d일 때는 -1을 반환한다.

```jsx
function answer(a, b, c, d) { 
	let result;
	
	if (a/b > c/d) {
		result = 1;
	} else if(a/b == c/d) {
		result = 0;
	} else {
		result = -1;
	}

	return result;
}

let input = [
	// TC: 1
	[14, 2, 6, 6], 
	// TC: 2
	[6, 7, 8, 9], 
	// TC: 3
	[18, 2, 36, 4], 
];
		
for (let i = 0; i < input.length; i++) { 
	console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`); 
}
```

- 윤년 판별기
    - 문제 설명
        - 자연수를 입력으로 받아 윤년이면 true, 아니면 false 값을 반환하는 함수를 작성하시오.
        - 윤년이란 아래 두 가지 중 하나라도 참이면 윤년이다.
            - 4의 배수이고 100의 배수가 아닐 때
            - 400의 배수일 때

```jsx
function answer(year) {
	let result;

	if (year % 4 == 0 && year % 100 != 0) { 
		result = true;
	} else if (year % 400 == 0) { 
		result = true;
	} else {
	result = false; 
}	
	return result;
}

let input = [
	// TC: 1 
	4,
	// TC: 2 
	100, 
	// TC: 3 
	124, 
	// TC: 4 
	247, 
	// TC: 5 
	400,
];
for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
```

- ATM 기기
    - 문제 설명
        - 고객이 ATM 기기를 사용하려 한다. ATM 기기는 5만원 지폐밖에 사용하지 않아 5배수 금액만 취급한다. 그리고 인출 할 때 0.5만원(5천원)의 수수료가 필요하다.
        - 인출할 금액과 계좌의 총 금액을 입력 받아 계좌의 남은 금액을 반환하는 함수를 작성하시오.
        - 입력 값 중 첫번째 값은 인출할 금액이고, 두번째 값은 계좌의 금액이다. (입력 값은 만원 단위)
        - 단, 정상적인 인출이 불가능할 경우 돈은 출금되지 않고, 통장의 원래 금액을 반환한다.

```jsx
function answer(withdraw, total) { 
	let result;

	if (withdraw % 5 != 0){
		result = total;
	} else if (withdraw + .5 > total) {
		result = total;
	} else {
		result = total - withdraw - 0.5;
	}

	return result;
}

let input = [
	// TC: 1 
	[40, 130.0],
	// TC: 2 
	[33, 130.0],
	// TC: 3 
	[300, 300.0],
	];

for (let i = 0; i < input.length; i++) {
console.log(`#${i + 1} ${answer(input[i][0], input[i ][1])}`);
}
```

- 네 번째 좌표
    - 문제 설명
        - 고객이 평행한 직사각형을 만들기 위해 3점을 선택한 후 네번째 점을 구하는데 고생하고 있다.
        - 고객을 도와 네번째 점을 구하는 함수를 만드시오.
        - 입력 값은 x좌표 3개, y좌표 3개가 각각 배열로 입력되며, 네번째 [x, y]를 산출하여 반환한다.

```jsx
function answer(x_arr, y_arr) { 
		let result = [];
		if (x_arr[0] == x_arr[1]) 
			result[0] = x_arr[2]; 
		else if (x_arr[0] == x_arr[2]) 
			result[0] = x_arr[1]; 
		else if (x_arr[1] == x_arr[2]) 
			result[0] = x_arr[0];

		if (y_arr[0] == y_arr[1]) 
			result[1] = y_arr[2]; 
		else if (y_arr[0] == y_arr[2]) 
			result[1] = y_arr[1]; 
		else if (y_arr[1] == y_arr[2]) 
			result[1] = y_arr[0];
		return result; 
	}

let input = [
	// TC: 1
	[[5, 5, 8], [5, 8, 5]], 
	// TC: 2
	[[3, 1, 1], [2, 1, 2]], 
	// TC: 3
	[[7, 7, 3], [4, 1, 1]], 
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i][0], input[i][1])); 
}
```

## 반복문

- 별별별
    - 문제 설명
        - 자연수를 입력 받아 해당 수만큼 별을 찍는 문자열 반환 함수를 작성하시오.

```jsx
// 문제 : 별별별
// 설명 : 자연수를 입력 받아 해당 수만큼 별을 찍는 문자열 반환 함수를 작성하시오.
/* 
- 입력값
5
7
12
*/
/*
- 출력값
#1 *****
#2 *******
#3 ************
*/
function answer(num) {
	let result = "";

	for (let i = 0; i < num; i++) {
		result += "*";
	}
	return result;
}

/* main code */ 
let input = [
// TC: 1 
5,

// TC: 2 
7,

// TC: 3 
12,
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
```

- 두 수 사이 숫자
    - 문제 설명
        - 두 수 사이의 숫자들을 출력하는 함수를 작성하시오.
        - 입력은 두 숫자 값이 주어지며, 입력된 숫자를 포함한 두 수 사이의 자연수를 배열로 반환한다.

```jsx
/* user code */ 
function answer(x, y) {
	let result = [];

	if(x > y){
		let temp = x;
		x = y;
		y = temp;
	}

	for (let i = x; i <= y; i++) {
		result.push(i);
	}

	return result;

}

/* main code */ 
let input = [
	// TC: 1 
	[3, 7],
	// TC: 2 
	[8, 3],
	// TC: 3 
	[12, 10],
];

for (let i = 0; i < input.length; i++) { 
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i][0], input[i][1])); 
}
```

- 반평균
    - 문제 설명
        - 선생님의 업무 보조를 위해 시험 점수의 반 평균을 구해주는 프로그램을 만들고자 한다.
        - 학생 별 점수를 입력 받아 평균을 구해주는 함수를 작성하시오.
        - 입력은 배열 형태로 학생 별 시험 점수 값이 주어지며, 해당 반의 평균 점수를 반환한다.
        - 단, 평균 점수가 소수점으로 나올 수 있기 때문에 두번째자리까지 반올림하여 반환한다.

```jsx
/* user code */ 
function answer(score) {
	let average = 0;
	let sum = 0;

	for (let i = 0; i < score.length; i++) {
		sum += score[i];
	}
	
	average = sum / score.length;
	average = average.toFixed(2);

	return average;
	}

/*    main    code    */ 
let input = [
	// TC: 1
	[80, 95, 65, 70, 100], 

	// TC: 2
	[82, 77, 51, 64, 73, 90, 80], 

	// TC: 3
	[100, 71, 59, 88, 72, 75, 91, 93], 
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
```

- 핸드폰 판매
    - 문제 설명
        - 업무 성과를 보상해주기 위해, 가장 핸드폰을 많이 판매한 종업원에게 인센티비를 부여하고자 한다.
        - 핸드폰 판매 수량을 입력 받아서, 가장 많이 판매한 종업원 번호를 반환해주는 함수를 작성하시오.
        - 입력은 배열 형태로 종업원 별 판매 수량 값이 주어지며, 가장 많이 판매한 종업원 번호를 반환한다.
        - 가장 첫번째 번호는 1번이다.

```jsx
function answer(employee) { 
	let employee_id;
	let max = 0;

	for (let i = 0; i < employee.length; i++){
		
		if (employee[i] > max) {
			max = employee[i];
			employee_id = i + 1;
		}

	} // end for
	
	return employee_id;
}

/* main code */ 
let input = [
	// TC: 1
	[3, 7, 9, 6, 1], 

	// TC: 2
	[2, 7, 1, 4, 3, 0, 5], 

	// TC: 3
	[7, 5, 0, 1, 2, 12, 6], 
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
```

- 무한 뺄셈
    - 문제 설명
        - 두 자연수를 입력 받아 앞의 숫자에서 뒤의 숫자를 뺄셈하여 반복 연산하는 프로그램을 작성하시오.
        - 단, 무한 연산을 막기 위해 뺀 값이 음수일 때 프로그램이 종료된다.
        - 입력은 두 자연수가 주어지며, 연산 과정을 보여주기 위해 초기 입력된 수를 포함하여 뺄셈을 통해 나온 숫자 모두를 배열에 저장하여 반환한다.
        - 예를 들어 두 수 6, 3이 입력 값으로 주어졌을 때, 6-3=3, 3-3=0, 0-3=-3 순으로 계산되고, -3이 되었으므로 프로그램은 종료된다.
        - 이때 배열 형태로 반환되는 숫자는 [6, 3, 3, 0, 3]이 된다.

```jsx
function answer(s, e) {
	let sequence = []; 
	sequence.push(s);
	sequence.push(e); 

	let sum;

	while(1) {
		sum = s - e;
		s = e;
		e = sum;

		if (e < 0) {
			break;
		}
		sequence.push(e)
	} // end while

	return sequence;
}

let input = [
	// TC: 1 
	[9, 3],

	// TC: 2 
	[6, 3],

	// TC: 3 
	[13, 7]
];

for (let i = 0; i < input.length; i++) { 
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i][0], input[i][1]));
}
```

## 종합

- 최솟값 구하기
    - 문제 설명
        - 두 수의 정수를 입력 받아 최소값을 반환해주는 함수를 구현하시오.

```jsx
function answer(x, y) {
	let min;

	if (x > y) {
		min = y;
	} else {
		min = x;
	}

	return min;
	}

	let input = [
	// TC: 1 
	[16, 3],
	// TC: 2 
	[-3, 1],
	// TC: 3 
	[1000, 525],
];
		
for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i][0], input[i ][1])}`);
}
```

- 제곱 구현
    - 문제 설명
        - 두 수 x, y를 입력 받아 x의 y 제곱 값을 반환해주는 함수를 구현하시오.
        - 제곱 연산자(**)는 사용하지 않는다.

```jsx
function answer(x, y) {
	let result = 1;

	for (let i = 1; i <= y; i++) {
		result *=x; 
	}

	return result;
	}

	let input = [
		// TC: 1 
		[2, 3],
		// TC: 2 
		[4, 6],
		// TC: 3 
		[1, 100],
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i][0], input[i ][1])}`);
	}
```

- 놀이기구 입장 제한
    - 문제 설명
        - 본 놀이기구는 안전상의 이유로 키 150cm 이상만 탈 수 있다.
        - 탑승하려는 고객이 놀이기구를 탈 수 있는지 판단하는 함수를 구현하시오.
        - 입력 값은 객체로 이름 / 나이 / 키가 입력되며, 출력 값은 탑승 가능 시 true, 불가능 시 false를 반환한다.

```jsx
function answer(user) {
	let permit;

	permit = user.height >= 150;
	
	return permit;
	}

let input = [
	{ name: "john", age: 27, height: 181 }, 
	{ name: "alice", age: 12, height: 148 }, 
	{ name: "bob", age: 14, height: 156 }, ];

	for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
```

- 요일 구하기
    - 문제 설명
        - 날짜를 입력 받아 요일을 반환해주는 함수를 구현하시오.
        - 입력 값은 문자형 날짜(datestring) 값이 입력되며, 문자형 형태의 요일을 반환한다.

```jsx
function answer(str) {
	let week = new Array(
	"일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"
	);
	let day;

	let date = new Date(str); 
	day = week[date.getDay()];
	
	return day;
}	

let input = [
	// TC: 1
	"2021-01-27", 
	// TC: 2
	"2021-02-27", 
	// TC: 3
	"2021-03-14", ];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
```

- 중복 단어 제거
    - 문제 설명
        - 중복 단어를 제거해주는 함수를 구현하시오.
        - 입력 값은 배열 형태로 요소들은 문자형이 입력되고, 중복 단어가 제거된 배열을 반환한다.

```jsx
function answer(arr) {
	let new_arr = [];
	new Set(arr).forEach(function (item) { 
		new_arr.push(item);
	});
	return new_arr; 
}

let input = [
	// TC: 1
	["john", "alice", "alice"], 
	// TC: 2
	["Hello", "hello", "HELLO", "hello"], 
	// TC: 3
	["kiwi", "banana", "mango", "kiwi", "banana"], 
];

for (let i = 0; i < input.length; i++) { 
	process.stdout.write(`#${i + 1} `); 
	console.log(answer(input[i]));
}
```

- 배열 내 최대값 구하기
    - 문제 설명
        - 정수가 저장된 배열을 입력 받아 그 중 최대값을 반환해주는 함수를 구현하시오.
        - 입력 값은 배열 형태로 값은 정수가 입력되며, 그 중 최대값을 반환한다.

```jsx
function answer(arr) {
	let max;
	max = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < arr.length; i++) { 
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max; 
}

	let input = [
		// TC: 1
		[1, 6, 5, 2, 3], 
		// TC: 2
		[19, 41, 23, -4, 17], 
		// TC: 3
		[-64, -27, -41, -33, -59], 
	];
	
	for (let i = 0; i < input.length; i++) {
		console.log(`#${i + 1} ${answer(input[i])}`);
	}
```

- 스팸 메일
    - 문제 설명
        - 최근 스팸 메일이 급증하여, 메일 업무 처리에 저장이 생겼다.
        - 대소문자를 구분하지 않고 Advert로 시작하는 메일 제목은 스팸 처리하는 함수를 구현하시오.
        - 입력 값은 문자형이며, 출력 값은 스팸으로 판단할 경우 true, 아닐 경우 false를 반환한다.

```jsx
function answer(str) {
	let spam_flag;
	spam_flag = str.toLowerCase().includes("advert"); 
	return spam_flag;
}

let input = [
	// TC: 1
	"RE: Request documents", 
	// TC: 2
	"[Advertisement] free mobile!", 
	// TC: 3
	"50% off this week (advertising)", 
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
```

- 배열 회전
    - 문제 설명
        - 배열을 입력 받아 순서를 역으로 만들어 반환해주는 함수를 구현하시오.
        - 입력은 배열 형태로 값은 정수형과 문자형으로 구성되어 있으며, 역으로 변환된 배열을 반환한다.

```jsx
function answer(user) {
	let reverse = [];
	for (let i = user.length - 1; i >= 0; i--) { 
		reverse.push(user[i]);
	}
	return reverse; 
}

let input = [
	// TC: 1
	[1, 2, 3, 4], 
	// TC: 2
	[-1, 6, "hello", -15], 
	// TC: 3
	["apple", "banana", "mango"], 
];

for (let i = 0; i < input.length; i++) { 
		process.stdout.write(`#${i + 1} `); 
		console.log(answer(input[i]));
}
```

- 문자 교정
    - 문제 설명
        - 우리 출판사는 출판되는 모든 책의 단어들이 앞 글자가 대문자로 표기되어야 한다.
        - 업무로 바쁜 동료를 위해, 원고의 단어 앞 글자를 모두 대문자로 변경시켜주는 함수를 구현하시오.
        - 입력 값은 문자형 형태의 단어들이며, 교정된 문자형으로 치환시켜 변환한다.

```jsx
function answer(str) {
	let fix_str = "";
	for (let item of str.split(" ")) {
	fix_str += item[0].toUpperCase() + item.slice(1) + " "; }
	return fix_str; 
}

let input = [
	// TC: 1
	"Hello, My name is john", 
	// TC: 2
	"This week is closed due to COVID-19", 
	// TC: 3
	"fifty percent off this week", ];
	for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
```

- 2차원 배열의 곱셈 합
    - 문제 설명
        - 2차원 배열을 입력 받아 모든 요소를 곱한 값을 반환해주는 함수를 구현하시오.
        - 입력 값은 2차원 배열로 Number 자료형 값이 들어오며, 모든 요소를 곱한 값을 반환해준다.

```jsx
function answer(arr) {
	let product = 1;
	for (let i = 0; i < arr.length; i++) { 
		for (let j = 0; j < arr[i].length; j++) {
			product *= arr[i][j]; 
		}
	}
	return product; 
}

let input = [
	// TC: 1
	[[1], [2], [3]], 
	// TC: 2
	[
		[1, 2], 
		[3, 4], 
		[5, 6, 7],
	],
	// TC: 3
	[
		[5, 1],
		[0.2, 4, 0.5], 
		[3, 9],
	], 
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
```
