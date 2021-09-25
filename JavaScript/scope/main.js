let x = 1;
let y = 2;
let z = 3;

console.log(x);
console.log(y);

{
	// local scope
	let x = 3;
	let y = 4;
	console.log(x);
	console.log(y);
	console.log(z);
}

console.log(x);
console.log(y);


// global scope
let A = 1;
let B = 2;

{
	let C = 3;
	let D = 4;
	console.log(A); // 1
	console.log(C); // 3
}
console.log(C); // Error


// global scope
let A = 1;

{
	// local scope
	let C = 3;
	let D = 4;

	console.log(C); // 3

	{
		// local scope
		let C = 5;
		let D = 6;
		console.log(C); // 5
	}
}


let index = 1000;

function local_func() {
	let index = 100;

	for (let index = 0; index < 10; index++){
		console.log(index); // 0 ~ 9
	} 
	console.log(index); // 100
}
local_func();
console.log(index); // 1000
