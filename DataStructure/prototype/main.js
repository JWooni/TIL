// 생성자에서 속성 정의 

function Test(a, b) {
 // 속성 정의
}

// 첫 메서드 정의 
Test.prototype.x = function() { … }; 

// 두번째 메서드 정의
Test.prototype.y = function() { ... }; 

// 객체 생성
let test = new Test(1, 2); 


// 생성자 속성 정의
function Person(name, age) { 
    this.name = name;
    this.age = age; 
}

// prototype을 이용한 Person 메서드 정의 
Person.prototype.isAudlt = function () {
 return this.age > 18; 
};

// 객체 생성
const p1 = new Person("bob", 26); 
const p2 = new Person("alice", 16);

// 객체 메서드 호출
console.log(p1.isAudlt()); // true 
console.log(p2.isAudlt()); // false
