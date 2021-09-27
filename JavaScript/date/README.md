# Date

[mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)

- 표준 Built-in 객체로써 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
- Date 객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값으로 표현
- 생성자 및 대표 메서드
    - Date 객체 생성자 : new Date()
    - 현재 시간 기준 문자열 : Date()
    - 날짜 정보 얻기 (년/월/일) : Date.getFullYear(), Date.getMonth(), Date.getDate()
    - 날짜 정보 얻기 (시/분/초/ms) : Date.getHours(), Date.getMinutes(), Date.getSeconds()
    - 날짜 정보 설정 (년/월/일) : Date.setFullYear(), Date.setMonth(), Date.setDate()
    - 날짜 정보 설정 (시/분/초/ms) : Date.setHours(), Date.setMinutes(), Date.setSeconds()
    - 그 외 날짜 정보 얻기 : Date.getDay(), Date.getTime(), Date.getTimezoneOffset()
    - 그 외 날짜 정보 설정 : Date.parse(string)

## Date 생성자

- Date 생성자 종류
    - new Date()
    - new Date(miniseconds)
    - new Date(datestring)
    - new Date(year, month, date, hours, minutes, seconds, ms)
    - month 값 범위는 1월(0) ~ 12월(11)

```jsx
/* 1. Default */
let date_now = new Date(); 
let date_now_str = Date();

console.log(date_now); // 2021-07-31T13:35:00.570Z 
console.log(date_now_str); // Sat Jul 31 2021 22:35:00 GMT+0900 (대한민국 표준시) 
console.log(typeof date_now); // object
console.log(typeof date_now_str); // string 

/* 2. milliseconds (1/1000)sec */
let date_ms_1 = new Date(0);
let date_ms_2 = new Date(24 * 3600 * 1000); 
console.log(date_ms_1); // 1970-01-01T00:00:00.000Z 
console.log(date_ms_2); // 1970-01-02T00:00:00.000Z

/* 3. date string */
let date_str = new Date("2020-01-01"); 
console.log(date_str); // 2020-01-01T00:00:00.000Z 

/* 4. year, month, …, ms */
let date_params_1 = new Date(2021, 0, 1);
let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24));
let date_params_3 = new Date(Date.UTC(2021, 0, 1)); 
console.log(date_params_1); // 2020-12-31T15:00:00.000Z 
console.log(date_params_2); // 2021-01-01T06:12:18.024Z 
console.log(date_params_3); // 2021-01-01T00:00:00.000Z
```

## 날짜 정보 얻기

- 날짜 정보 얻기 (년/월/일/요일) : Date.getFullYear(), Date.getMonth(), Date.getDate()
- 날짜 정보 얻기 (시/분/초/ms) : Date.getHours(), Date.getMinutes(), Date.getSeconds()
- 주어진 일시 - 1970/1/1 차분(ms) : Date.getTime(), 현지시간 - 표준 시간 차분(min) : Date.getTimezoneOffset()

```jsx
// 날짜 정보 얻기
let date = new Date();
console.log(date); // 2021-09-27T11:03:33.064Z

/* 1. year, month, day: 0(sun) ~ 6(sat) */
console.log(date.getFullYear()); // 2021
console.log(date.getMonth()); // 8
console.log(date.getDay()); // 1

/* 2. hours */
console.log(date.getHours()); // 20
console.log(date.getUTCHours()); // 11

/* 3. getTime: (now - date(0)) milliseconds getTimezoneOffset: (UTC+0 - currentZone) minutes */
console.log(date.getTime()); // 1632740613064 
console.log(date.getTimezoneOffset()); // -540
```

## 날짜 정보 설정

- 날짜 정보 설정 (년/월/일) : Date.setFullYear(), Date.setMonth(), Date.setDate()
- 날자 정보 설정 (시/분/초/ms) : Date.setHours(), Date.setMinutes(), Date.setSeconds()

```jsx
// 날짜 정보 설정
let date = new Date();
console.log(date); // 2021-09-27T11:14:35.927Z

/* 1. set year */
let ms_year = date.setFullYear(2020, 3, 15);
console.log(date); // 2020-04-15T11:14:35.927Z
console.log(new Date(ms_year)); // 2020-04-15T11:14:35.927Z

/* 2. set date */
date.setDate(1);
console.log(date); // 2020-04-01T11:14:35.927Z
date.setDate(0); // setDate(0) => 이전 달의 마지막 날 
console.log(date); // 2020-03-31T11:14:35.927Z

/* 3. set hours */
date.setHours(date.getHours() + 2);
console.log(date); // 2020-03-31T13:14:35.927Z
```

## parse

- 날짜 정보 설정
    - 문자열 기반 날짜 정보 설정 : Date.parse(YYYY-MM-DDTHH:mm:ss:sssZ)
        - YYYY-MM-DD → 날짜(연-월-일), "T" → 구분 기호, HH:mm:ss.sss → 시:분:초.밀리초
        - 'Z'(option) → 미 설정할 경우 현재 로컬 기준 UTC로, 설정할 경우 UTC+0 기준으로 시간 설정

```jsx
// parse
let ms_parse = Date.parse("2021-09-30T00:00:00.000"); 

console.log(ms_parse); // 1632927600000
console.log(new Date(ms_parse)); // 2021-09-29T15:00:00.000Z
console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z"))); // 2020-03-31T00:00:00.000Z
```

## benchmark

- 성능 측정
    - 벤치마크 측정 대상 함수 전후로 시간을 비교하여 알고리즘 성능 측정

```jsx
// benchmark
function dateSub(old_date, new_date) { 
	return new_date - old_date;
}

function getTime(old_date, new_date) {
	return new_date.getTime() - old_date.getTime(); 
}

function benchmark(callback_func) {
	let date_1 = new Date("2021-01-01");
	let date_2 = new Date();
	let start = Date.now();
	for (let i = 0; i < 100000; i++) { 
		callback_func(date_1, date_2);
	}
	return Date.now() - start; 
}

console.log("dateSub: " + benchmark(dateSub) + "ms"); // dateSub: 16ms 
console.log("getTime: " + benchmark(getTime) + "ms"); // getTime: 3ms
```
