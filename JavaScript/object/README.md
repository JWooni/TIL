# object(객체)

[mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)

- object는 다수의 원시 자료형을 포함하거나 복잡한 개체(Entity)를 표현할 수 있는 자료형
- object는 Object() 혹은 중괄호({})를 통해 생성
- object의 개체는 key:value 형태로 표현하며, 접근은 object.key 형태로 표현

```jsx
let user = {
	name : "john",
	age : 30
};

console.log(typeof user);
console.log(typeof user.name);
console.log(typeof user.age);

console.log(user.name);
console.log(user.age);

user.age = 30;
console.log(user.age);
```

## object 복사

- object의 값을 복사할 때는 대상 전체가 아닌 object 내 주소 값만 복사되는 문제 발생
- 가리키는 대상 전체를 복사하는 방법은 얕은 복사(Shallow copy), 깊은 복사(Deep copy)를 통해 가능
- object 복사 문제점

```jsx
let user = { 
	name: "john", 
	age: 23,
};

let admin = user; admin.name = "park";

console.log(admin.name); // "park" 
console.log(user.name); // "park"

user.age = 30;
console.log(user.age); // 30 
console.log(admin.age); // 30
```

### 얕은 복사(Shallow copy)

- 반복문 for문을 통한 객체 복사

```jsx
let user = {
 name: "john",
 age: 23,
};

let admin = {}; 

// shallow copy
for (let key in user) {
 admin[key] = user[key];
}

admin.name = "park";

console.log(admin.name); // "park" 
console.log(user.name); // "john"
```

- Object.assing() 함수를 이용한 복사

```jsx
let user = {
 name: "john",
 age: 23,
};

let admin_obj = Object.assign({}, user); 

admin_obj.name = "park";
user.age = 30;

console.log(admin_obj.name); // "park"
console.log(user.name); // "john"
console.log(admin_obj.age); // 23
console.log(user.age); // 30
```

### 얕은 복사(Shallow copy) 문제점

- 객체 내 또 다른 객체가 있다면 복사되지 않음

```jsx
let user = {
 name: "john",
 age: 23,
 sizes: {
		height: 180,
	  weight: 72,
		},
 };

let admin_obj = Object.assign({}, user); 

admin_obj.sizes.weight++;
--admin_obj.sizes.height;

console.log(admin_obj.sizes.weight); // 73
console.log(admin_obj.sizes.height); // 179
console.log(user.sizes.weight); // 73
console.log(user.sizes.height); // 179
```

### 깊은 복사(Deep copy)

- 재귀함수를 이용한 깊은 객체 복사

```jsx
let user = {
	name: "john",
	age: 23,
	sizes: {
		 height: 180,
		 weight: 72
	},
};

function copyObj(obj) {
	 let result = {};
	for (let key in obj) {
		if (typeof obj[key] === "object") result[key] = copyObj(obj[key]); else result[key] = obj[key];
	}
	return result;
}

let admin = copyObj(user);

admin.sizes.weight++;

console.log(admin.sizes.weight); // 73 
console.log(user.sizes.weight); // 72
```

- JSON 객체를 이용한 깊은 복사, stringify는 객체를 문자열로 변환하는데 이때 원본 객체와의 참조가 끊김

```jsx
// JSON
// stringfy: js object -> string, parse: string -> js object 
let admin_json = JSON.parse(JSON.stringify(user));

admin_json.sizes.weight++;
--admin_json.sizes.height;

console.log(admin_json.sizes.weight); // 73
console.log(admin_json.sizes.height); // 179
console.log(user.sizes.weight); // 72
console.log(user.sizes.height); // 180
```
