// if else
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

console.log("done");

let age = 10;
if (age < 10) // ~ 9 
	console.log("young!");
else // 10 ~
	console.log("old!"); // old!


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


// 연습문제
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
