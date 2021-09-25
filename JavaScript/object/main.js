// object
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

user.weight = 72;

console.log(user);

delete user.age;
console.log(user);

// 얕은 복사
let user = {
	name : "john",
	age : 30
};

// for loop
let admin = {};

for (let key in user){
	admin[key] = user[key];
}

admin.name = "park";
console.log(admin.name); // "park" 
console.log(user.name); // "john

user.age = 30;
console.log(user.age);
console.log(admin.age); // 30

// Object.assign()
let admin = Object.assign({}, user); 

admin.name = "park";
user.age = 30;

console.log(admin.name); // "park"
console.log(user.name); // "john"
console.log(admin.age); // 23
console.log(user.age); // 30

// 전개 연산자(Spread Operator)
let admin_spread = { ...user };

admin_spread.name = "park";
user.age = 30;

console.log(admin_spread.name); // "park"
console.log(user.name); // "john"
console.log(admin_spread.age); // 23
console.log(user.age); // 30


// 깊은 복사
let user = {
	name: "john",
	age: 23,
	sizes: {
		 height: 180,
		 weight: 72
	},
};

// 재귀함수
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

// JSON
// stringfy: js object -> string, parse: string -> js object 
let admin_json = JSON.parse(JSON.stringify(user));

admin_json.sizes.weight++;
--admin_json.sizes.height;

console.log(admin_json.sizes.weight); // 73
console.log(admin_json.sizes.height); // 179
console.log(user.sizes.weight); // 72
console.log(user.sizes.height); // 180
