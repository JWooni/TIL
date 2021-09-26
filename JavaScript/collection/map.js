// map
let map = new Map();

map.set("name", "john");
map.set(123, 456); // number key
map.set(true, "bool_type"); // boolean key

console.log(map);// Map(3) { 'name' => 'john', 123 => 456, true => 'bool_type' }
console.log(map.get(123)); // 456
console.log(map.get("name")); // john
console.log(map.size); // 3

map.delete(123);
console.log(map);

// chaining 
map.clear();
console.log(map); // Map(0) {}
map.set("name", "alice").set(123, 789).set(false, "bool_type"); 
console.log(map); // Map(3) { 'name' => 'alice', 123 => 789, false => 'bool

// map 반복문
let recipe_juice = new Map([ 
	["strawberry", 50], 
	["banana", 100],
	["ice", 150], 
]);

for (let item of recipe_juice.keys()) console.log(item); // strawberry banana ice
for (let amount of recipe_juice.values()) console.log(amount); // 50 100 150
for (let entity of recipe_juice) console.log(entity); //[ 'strawberry', 50 ] [ 'banana', 100 ] [ 'ice', 150 ] 

console.log(recipe_juice); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 } 
console.log(recipe_juice.entries());

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
