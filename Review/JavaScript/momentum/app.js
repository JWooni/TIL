/**
 * let과 const 차이
 * let : 재선언 불가, 재할당 가능
 * const : 재선언 불가, 재할당 불가능
 * var는 사용하지 말 것
 */
// 재할당 불가능
const a = 5;
const b = 2;

// 재할당 가능
let myName = "jwooni";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Kim";

console.log("your new name is " + myName);

/* 데이터 타입 */
// boolean
const amIFat = true;
console.log(amIFat);

// undefined
let something;
console.log(something);

/* 배열 */
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonesense = [1, 2, "hello", false, null, true, undefined];

console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek);

// Add one more day yo the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

/* Object */
const player = {
  name: "jwooni",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
player.fat = false;
console.log(player.fat);
player.points = player.points + 15;
console.log(player.points);

/* function */
console.log("Hello my name is Jwooni");

function sayHello(name, age) {
  console.log("Hello! my name is " + name + " and I'm " + age);
}

sayHello("JWooni", 30);
sayHello("Kim", 20);
sayHello("Kakao", 25);

function plus(a, b) {
  console.log(a + b);
}
plus(5, 10);

function divide(a, b) {
  console.log(a / b);
}
divide(98, 20);

const playerTwo = {
  name: "JWooni",
  sayHelloTwo: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName + " Nice to meet you!");
  },
};

console.log(playerTwo.name);
playerTwo.sayHelloTwo("Park");
playerTwo.sayHelloTwo("Lee");

/* 복습 */
function plusTwo() {
  console.log(2 + 2);
}
plusTwo();

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  min: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  mul: function (a, b) {
    return a * b;
  },
  pow: function (a, b) {
    return a ** b;
  },
};
calculator.add(1, 2);
calculator.min(1, 2);
calculator.div(1, 2);
calculator.mul(1, 2);
calculator.pow(1, 2);

const plusResult = calculator.add(2, 3);
const minusResult = calculator.min(plusResult, 3);
const timesResult = calculator.mul(10, minusResult);
const divideResult = calculator.div(timesResult, plusResult);
const powerResult = calculator.pow(divideResult, minusResult);

console.log(plusResult);

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

/* 조건문 */
const ageTwo = prompt("몇살이세요?");
console.log(ageTwo);

if (isNaN(ageTwo)) {
  console.log("Please write a number");
} else if (ageTwo < 18) {
  console.log("Thank you for writing your age");
} else if (ageTwo >= 18 && ageTwo <= 50) {
  console.log("You can drink");
} else if (ageTwo > 50 && ageTwo <= 80) {
  console.log("You should exercise");
} else if (ageTwo === 100) {
  console.log("wow you are wise");
} else if (ageTwo > 80) {
  console.log("You can do whatever you want.");
}

if ((a && b) || (c && d) || x || w) {
}

/* querySelector */
// 첫번째 element만 가져온다.
// step1. element를 찾아라
const h1 = document.querySelector("div.hello:first-child h1");
// title.innerHTML = "Hello!";

// step3. 그 event에 반응해라
// function handleTitleClick() {
// const currentColor = h1.style.color;
// let newColor;
// if (currentColor === "blue") {
//   newColor = "tomato";
// } else {
//   newColor = "blue";
// }
// h1.style.color = newColor;
// }

// step2. event를 listen해라
h1.addEventListener("click", handleTitleClick);

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

// function handleTitleClick() {
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//   alert("copier!");
// }

// function handleWindowOffline() {
//   alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//   alert("GOOD!!");
// }

// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

/* querySelectorAll */
// 배열 형태로 모두 가져온다.
// const title = document.querySelectorAll(".hello h1");
// console.log(title);
