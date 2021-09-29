# 점화식(=재귀식)

- 점화식(재귀식)이란 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타낸 관계식
- 대표적인 점화식
    - 등차 수열 : F(n) = F(n - 1) + a
    - 등비 수열 : F(n) = F(n - 1) * a
    - 팩토리얼 : F(n) = F(n - 1) * n
    - 피보나치 수열 : F(n) = F(n - 1) + F(n - 2)

### 등차수열

```jsx
// 등차수열
// for문
let result;
function forloop(s, t, number) { 
	let acc = 0;
	for (let i = 1; i <= number; i++) { 
		if (i == 1){
			acc += s;
		} else{
			acc += t; 
		}
		console.log(i, acc);
	}
	return acc; 
}
result = forloop(3, 2, 5); 
console.log(result);

// 재귀
let result;
function recursive(s, t, number) { 
	if (number == 1) {
	return s; 
	}
	return recursive(s, t, number - 1) + t; 
}
result = recursive(3, 2, 5); 
console.log(result); // 11
```

### 등비수열

```jsx
// 등비수열
// for문
let result;
function forloop(s, t, number) { 
	let acc = 1;
	for (let i = 1; i <= number; i++) { 
		if (i == 1){
			acc *= s;
		} else{
			acc *= t; 
		}
		console.log(i, acc);
	}
	return acc; 
}
result = forloop(3, 2, 5); 
console.log(result);

// 재귀
let result;
function recursive(s, t, number) { 
	if (number == 1) {
		return s; 
	}
	return recursive(s, t, number - 1) * t; 
}
result = recursive(3, 2, 5); 
console.log(result); // 48
```

### 팩토리얼

```jsx
// 재귀
let result;
function recursive(number) { 
	if (number == 1) {
		return number; 
	}
	return recursive(number - 1) * number; 
}
result = recursive(5);
console.log(result); // 120
```

### 피보나치 수열

```jsx
// 피보나치 수열
let result;
function recursive(number) {
	if (number == 1 || number == 0) { 
		return number;
	}
	return recursive(number - 1) + recursive(number - 2); 
}
result = recursive(5);
console.log(result); // 5
```
