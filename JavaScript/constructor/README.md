# 생성자(constructor)

- 유사한 객체를 다중으로 만들 때 사용되는 함수 (타 언에서의 class 개념과 유사)
- 일반적으로 생성자 함수의 첫 글자는 대문자로 시작
- 생성자 함수로 객체 생성 시 new 연산자를 통해 객체 생성

## 생성자 함수 예제

- 생성자 함수와 new 연산자를 통해 빠른 객체 생성 가능

```jsx
function FishBread(flavor, price) {
	this.flavor = flavor;
	this.price = price;
	this.base = "flour"; 
}

let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);	// FishBread { flavor: 'cream', price: 1200, base: 'flour' } 
console.log(bread_2);	// FishBread { flavor: 'redbean', price: 1000, base: 'flour' } 
console.log(bread_3);	//  FishBread { flavor: 'milk', price: 1500, base: 'flour' }
```

## new.target

- [new.target](http://new.target) 속성을 사용하여 new와 함께 호출했는지 확인 가능

```jsx
function User(name) { 
	console.log(new.target); 
	this.name = name;
}
// not use new keyword -> function 
let result_1 = User("john"); 
console.log(result_1);
/* output undefined undefined    */
// use new keyword -> constructor function 
let result_2 = new User("john");
console.log(result_2);

///////////////////////////////////////////////////////////

function User(name) {
	if (!new.target) { 
		return new User(name);
	}
	this.name = name; 
}
let result_1 = User("john"); 
console.log(result_1); // User { name: 'john' } 

let result_2 = new User("john");
console.log(result_2); // User { name: 'john' }
```

## [new.target](http://new.target) 처리 추가

- 유연한 생성자 함수를 만들기 위해 new.target이 없을 때 new 키워드 추가하여 호출되도록 처리

```jsx
// new.target 처리 추가
function FishBread(flavor, price) { 
	if (!new.target) {
		return new FishBread(flavor, price); 
	}
	this.flavor = flavor;
	this.price = price;
	this.base = "flour"; 
}

let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);	// FishBread { flavor: 'cream', price: 1200, base: 'flour' } 
console.log(bread_2); // FishBread { flavor: 'redbean', price: 1000, base: 'flour' } 
console.log(bread_3); // FishBread { flavor: 'milk', price: 1500, base: 'flour' }
```
