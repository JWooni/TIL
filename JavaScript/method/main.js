let user = {
	name: "john",
	age: 27,
	hello_func() {
	console.log("hello");
  }
};


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


// this
let obj = { 
	name: "john", 
	age: 27, 
	hello_func() {
	console.log(
		"hello " + this.name); 
	},
};

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

user.func = hello_func; 
admin.func = hello_func; 

user.func(); // hello john 
admin.func(); // hello admin

user["func"](); // hello john 
admin["func"](); // hello admin
