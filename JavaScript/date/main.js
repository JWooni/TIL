// Date
// Date 생성자

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


// parse
let ms_parse = Date.parse("2021-09-30T00:00:00.000"); 

console.log(ms_parse); // 1632927600000
console.log(new Date(ms_parse)); // 2021-09-29T15:00:00.000Z
console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z"))); // 2020-03-31T00:00:00.000Z


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
