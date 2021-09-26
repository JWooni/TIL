# Collection

- 구조 혹은 비구조화 형태로 프로그래밍 언어가 제공하는 값을 담을 수 있는 공간
- 자바스크립트에서 제공하는 Collection
    - Indexed Collection - Arrays, Typed Array
    - Keyed Collection - Objects, Map, Set, Weak Map, Weak Set

## Map

- 다양한 자료형의 key를 허용하고, key-value 형태의 자료형을 저장 가능할 수 있는 Collection
- Map은 Object 대비 비교하면 다양한 key의 사용을 허용하고, 값의 추가 / 삭제 시 메서드를 통해 수행이 필요함
- 대표 속성 및 메서드
    - 생성자 : new Map()
    - 개수 확인 : Map.size
    - 요소 추가 : Map.set(key, value)
    - 요소 접근 : Map.get(key)
    - 요소 삭제 : Map.delete(key)
    - 전체 삭제 : Map.clear()
    - 요소 존재 여부 확인 : Map.has(key)
    - 그 밖의 메서드 : Map.keys(), Map.values(), Map.entires()

```jsx
// map
let map = new Map();

map.set("name", "john");
map.set(123, 456); // number key
map.set(true, "bool_type"); // boolean key

console.log(map);// Map(3) { 'name' => 'john', 123 => 456, true => 'bool_type' }
console.log(map.get(123)); // 456
console.log(map.get("name")); // john
console.log(map.size); // 3

// chaining 
map.clear();
console.log(map); // Map(0) {}
map.set("name", "alice").set(123, 789).set(false, "bool_type"); 
console.log(map); // Map(3) { 'name' => 'alice', 123 => 789, false => 'bool
```

## Map 반복문

- Collection 객체인 Map이 가지고 있는 iterator 속성을 이용하여 for ... of 구문을 통해 반복문 수행 가능

```jsx
// map 반복문
let recipe_juice = new Map([ 
	["strawberry", 50], 
	["banana", 100],
	["ice", 150], 
]);

for (let item of recipe_juice.keys()) 
console.log(item); // strawberry banana ice

for (let amount of recipe_juice.values()) 
console.log(amount); // 50 100 150

for (let entity of recipe_juice) 
console.log(entity); //[ 'strawberry', 50 ] [ 'banana', 100 ] [ 'ice', 150 ] 

console.log(recipe_juice); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 } 
console.log(recipe_juice.entries());
```

## Map ↔ Object 변환

- Object.entries(Object), Object.fromEntries(Map)를 통해 Map과 Object간 변환이 가능

```jsx
// Map ↔ Object 변환
let recipe_juice = new Map([ 
	["strawberry", 50], 
	["banana", 100],
	["ice", 150], 
]);

let recipe_juice_obj = Object.fromEntries(recipe_juice);
let recipe_juice_kv = Object.entries(recipe_juice_obj); // [key, value]
let recipe_juice_map = new Map(recipe_juice_kv);

console.log(recipe_juice); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 } 
console.log(recipe_juice_obj); // { strawberry: 50, banana: 100, ice: 150 } 
console.log(recipe_juice_kv); // [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ] 
console.log(recipe_juice_map); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
```
