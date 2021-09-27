/* 1. MAX/MIN */
console.log(Math.max(1, -1)); // 1
console.log(Math.min(1, -1)); // -1
console.log(Math.max(1, -1, 5, 23, 17, -4)); // 23
console.log(Math.min(1, -1, 5, 23, 17, -4)); // -4

let nums = [1, -1, 5, 23, 17, -4]; 

// apply
console.log(`Max: ${Math.max.apply(null, nums)}`); // MAX: 23 
console.log(`Min: ${Math.min.apply(null, nums)}`); // MIN: -4 

// spread
console.log(`Max: ${Math.max(...nums)}`); // MAX: 23 
console.log(`Min: ${Math.min(...nums)}`); // MIN: -4

/* 2. ABS */
console.log(Math.abs(1)); // 1
console.log(Math.abs(-1)); // 1
console.log(Math.abs(-Infinity)); // Infinity


// 속성 및 랜덤
/* 1. Math property */
console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793

/* 2. Random */
for (let i = 0; i < 3; i++) { 
	console.log(Math.random());
}

for (let i = 0; i < 3; i++) {
	console.log(Number.parseInt(Math.random() * 10)); 
}


// 제곱 / 제곱근 / 소수점 처리
/* 1. pow */
console.log(Math.pow(2, 3)); // 8 
console.log(2 ** 3); // 8

/* 2. sqrt */
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(2)); // 1.4142135623730951 

/* 3. round, ceil, floor */
console.log(Math.round(3.5)); // 4
console.log(Math.round(-2.3)); // -2
console.log(Math.round(-2.7)); // -3
console.log(Math.ceil(3.5)); // 4
console.log(Math.ceil(-2.3)); // -2
console.log(Math.ceil(-2.7)); // -2
console.log(Math.floor(3.7)); // 4
console.log(Math.floor(-2.3)); // -3
console.log(Math.floor(-2.7)); // -3
