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
