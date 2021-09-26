# Method

[mdn](https://developer.mozilla.org/ko/docs/Glossary/Method)

- 객체에 저장된 값이 함수인 경우, 이를 메서드(method)라고 부름

```jsx
let user = {
	name: "john",
	age: 27,
	hello_func() {
	console.log("hello");
  }
};
```

## method 변경

- method 변경 : 객체 내 초기 선언된 함수를 다른 함수로 변경

```jsx
function hello_func() { 
	console.log("hello"); 
} 

function hi_func() { 
	console.log("hi"); 
}

let obj = { 
	name: "john", 
	age: 27,
  func: hello_func, 
};

hello_func(); // hello 
obj.func(); // hello
console.log(hello_func == obj.func); // true 

obj.func = hi_func;
hi_func(); // hi 
obj.func(); // hi
console.log(hello_func == obj.func); // false 
console.log(hi_func == obj.func); // true
```

## this

- 메서드에서 객체 내부의 속성(property) 값을 접근할 수 있는 지시자

```jsx
// this
let obj = { 
	name: "john", 
	age: 27, 
	hello_func() {
	console.log(
		"hello " + this.name); 
	},
};
```

### this 예제

- this를 사용하는 method는 추가 가능하며, 이 때 this는 runtime에 결정되어 호출한 객체에 따라 다름

```jsx
// this 예제
let user = { 
	name: "john" 
};
let admin = { 
	name: "admin" 
};

// hello_func 내 this 값은 런타임에 결정 
function hello_func() {
	console.log("hello " + this.name); 
}

user.func = hello_func; // user.func 수행할 때, (this == user.name) 
admin.func = hello_func; // admin.func 수행할 때, (this == admin.name)

user.func(); // hello john 
admin.func(); // hello admin

user["func"](); // hello john 
admin["func"](); // hello admin
```
