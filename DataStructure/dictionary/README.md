# 딕셔너리(Dictionary)

- key-value 형태로 다양한 자료형 개체(Entity)를 저장하는 자료구조(::Map)
- 구현 메서드(method)
    - 전체 개체 획득 / 초기화 / 크기 반환 : Dictionary.getBuffer(), Dictionary.clear(), Dictionary.size()
    - 개체 추가 / 삭제 / 반환 / 여부 : Dictionary.set(), Dictionary.remove(), Dictionary.has()
    - key, value 배열 반환 / 고차 함수 : Dictionary.keys(), Dictionary.values(), Dictionary.each()
    
- Dictionary(): 개체(Entity)를 저장할 생성자

```jsx
function Dictionary(items = {}) {
  this.items = items;
}
```

- getBuffer(): 모든 개체(Entity) 반환

```jsx
Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};
```

- clear():

```jsx
Dictionary.prototype.clear = function () {
  this.items = {};
};
```

- size(): 크기

```jsx
Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};
```

- 출력

```jsx
let dict = new Dictionary({ age: 19, name: "alice" });
console.log(dict);

console.log(dict.getBuffer());
console.log(dict.size());
dict.clear();
console.log(dict);
```

- has(): 개체 존재 여부 확인 (key 정보를 배열로 반환)

```jsx
Dictionary.prototype.has = function (key) {
  //return value in this.items;
  return this.items.hasOwnProperty(key);
};
```

- set(): 개체(Entity) 추가

```jsx
Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};
```

- get(): 개체(Entity)의 value 반환

```jsx
Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};
```

- remove(): 개체(Entity) 삭제

```jsx
Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};
```

- 출력

```jsx
let dict = new Dictionary();
dict.set("age", 19);
dict.set("name", "alice");
dict.set("height", 172);
console.log(dict);

dict.remove("age");
console.log(dict);

console.log(dict.has("age"));
console.log(dict.has("name"));
console.log(dict.get("age"));
console.log(dict.get("name"));
```

- keys(): 모든 key 값을 배열 형태로 반환

```jsx
Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
};
```

- values(): 모든 value 값을 배열 형태로 반환

```jsx
Dictionary.prototype.values = function () {
  // let values = [];
  // for (let k in this.items) {
  // values.push(this.items[k]);
  // }
  // return values;
  return Object.values(this.items);
};
```

- each(): 모든 개체 요소에 대해 callback 함수 수 행 (:= foreach)

```jsx
Dictionary.prototype.each = function (fn) {
  for (let k in this.items) {
    fn(k, this.items[k]);
  }
};
```

- printDictionary(): 개체 출력 callback

```jsx
function printDictionary(key, value) {
  console.log(`key: ${key}`);
  console.log(`value: ${value}`);
}

let dict = new Dictionary();
dict.set("age", 19);
dict.set("name", "alice");
dict.set("height", 172);
console.log(dict);

console.log(dict.keys());
console.log(dict.values());
dict.each(printDictionary);
```
