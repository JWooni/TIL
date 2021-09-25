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


// 2중 for문
for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		console.log(`${i} + ${j} = ${i + j}`);
  }
}

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

// for .. of
let language = "javascript";
let text = "";

for (let x of language){
	text += x;
	console.log(x);
}
console.log(text);


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

// break
let text = "";
for (let i = 0; i < 10; i++) {
	 if (i === 3)
	 break;
	text = text + i;
}
console.log(text); // "012" 

// continue
let text = "";
for (let i = 0; i < 10; i++) {
	 if (i === 3) 
	 continue; 
	 text = text + i;
}
console.log(text); // "012456789"

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


// 연습문제
// 문제1
const UNTIL_NUM = 10; 
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
	if (i % 2 == 0) {
		sum += i;
	}
}

console.log(sum); // 30

// 문제2
for (let i = 2; i <= 9; i++) { 
	for (let j = 1; j <= 9; j++) {
		console.log(i + " x " + j + " = " + i * j);
	}	
}
