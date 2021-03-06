# Chaining Hash Table

- 별도의 자료구조인 연결 리스트를 병합 사용하여 Hash 충돌을 해결한 해시테이블 기반 자료구조
- 구현 메서드(method)
    - 객체 초기화 / 크기 반환 : ChainingHashTable.clear(), ChainingHashTable.size()
    - 전체 데이터 반환, 전체 데이터 출력 : ChainingHashTable.getBuffer(), ChainingHashTable.print()
    - 추가 / 삭제 / 반환 : ChainingHashTable.put(), ChainingHashTable.remove(), ChainingHashTable.get()
    
- Element(): Key, value 저장을 위한 생성자

```jsx
import { LinkedList } from "./linked_list.mjs";

const HASH_SIZE = 37;

// Element(): Key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}
```

- ChainingHashTable(): 생성자

```jsx
function ChainingHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}
```

- hashCode(): 해시 함수

```jsx
ChainingHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};
```

- clear(): 초기화

```jsx
ChainingHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};
```

- size(): 크기 변환

```jsx
ChainingHashTable.prototype.size = function () {
  return this.length;
};
```

- 출력

```jsx
let cht = new ChainingHashTable();
console.log(cht);

console.log(cht.hashCode("Ana"));

let ll = new LinkedList();
ll.append(new Element("Ana", 172));
console.log(ll);
```

- put(): 데이터 추가

```jsx
ChainingHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);
  if (this.table[index] === undefined) {
    this.table[index] = new LinkedList();
  }
  this.table[index].append(new Element(key, value));
  this.length++;
  return true;
};
```

- 출력

```jsx
let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183); // collision
cht.put("Sue", 163);
cht.put("Jamie", 168); // collision
cht.put("Paul", 190);
console.log(cht);
```

- getBuffer(): 데이터 셋 반환

```jsx
ChainingHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      do {
        array.push(current.data);
        current = current.next;
      } while (current);
    }
  }
  return array;
};
```

- print(): 데이터 셋 출력

```jsx
ChainingHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      process.stdout.write(`#${i}`);
      do {
        process.stdout.write(` ->
	${current.data.key}: ${current.data.value}`);
        current = current.next;
      } while (current);
      console.log("");
    }
  }
};
```

- 출력

```jsx
let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183); // collision
cht.put("Sue", 163);
cht.put("Jamie", 168); // collision
cht.put("Paul", 190);
console.log(cht);

cht.print();
console.log(cht.getBuffer());
```

- get(): 데이터 조회

```jsx
ChainingHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  if (this.table[index] !== undefined && !this.table[index].isEmpty()) {
    let current = this.table[index].head;
    do {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.next;
    } while (current);
  }
  return undefined;
};
```

- 출력

```jsx
let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183); // collision
cht.put("Sue", 163);
cht.put("Jamie", 168); //    collision
cht.put("Paul", 190);

console.log(cht.get("Ana"));
console.log(cht.get("Donnie"));
console.log(cht.get("Kim"));
```

- remove(): 데이터 삭제

```jsx
ChainingHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let element = undefined;
  if (this.table[index] !== undefined) {
    let current = this.table[index].head;
    do {
      if (current.data.key === key) {
        element = current.data;
        this.table[index].remove(current.data);
        this.length--;
        if (this.table[index].isEmpty()) {
          delete this.table[index];
        }
      }
      current = current.next;
    } while (current);
  }
  return element;
};
```

- 출력

```jsx
let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183); // collision
cht.put("Sue", 163);
cht.put("Jamie", 168); // collision
cht.put("Paul", 190);

console.log("");
cht.print();

console.log(cht.remove("Sue"));
console.log("");
cht.print();

console.log(cht.remove("Jamie"));
console.log("");
cht.print();

console.log(cht);
```
