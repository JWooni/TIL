# Prototype

- 어떠한 객체가 만들어지기 위해 객체의 모캐가 되는 원형
- 자바스크립트는 일반적인 객체지향 언어와는 다르게, 프로토타입을 이용한 복사(Cloning)을 통해 새로운 객체 생성
- 일반적인 객체 생성 방식 : 속성 생성자, 메서드는 프로토타입에서 정의

```jsx
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
```

## 프로토타입 예제

- prototype을 이용하여 Person 객체에 메서드 추가

```jsx
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
```
