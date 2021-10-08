# Hash Table(해시테이블)

## 해시함수(Hash Function)

- 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수
- 해쉬 함수 특정
    - 압축성 : 다양한 가변 길이의 입력에 대해 고정된 크기의 결과값을 반환하는 성질
    - 효율성 : 어떤 입력 값에 대해서도 많은 자원과 시간이 소요되지 않고 처리되는 성질
    - 저항성 : 걸과값을 바탕으로 입력 값을 찾는 것이 불가능한 성질

## 해시테이블(Hash Table)

- Hash 함수를 사용하여 평균 O(1) 시간 복잡도로 특정 값을 신속하게 찾는 자료구조
- 충돌(Collision) 해결 방법
    - 해시 함수 변경 : 더 큰 숫자의 공간과 Modular 산술 값을 이용해 충돌 최소화
    - 자료구조 확장 : Open Addressing Method(선형 조사법, 이중해시), Close Addressing Method(체이닝)
- 구현 메서드(method)
    - 객체 초기화 / 크기 반환 : HashTable.clear(), HashTable.size()
    - 전체 데이터 반환, 전체 데이터 출력 : HashTable.getBuffer(), HashTable.print()
    - 데이터추가 / 삭제 / 반환 : HashTable.put(), HashTable.remove(), HashTable.get()

- Element(): Key, value 저장을 위한 생성자

```jsx
function Element(key, value) {
  this.key = key;
  this.value = value;
}
```

- HashTable(): 생성자

```jsx
function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}
```

- hashCode(): 해시 함수

```jsx
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};
```

- 출력

```jsx
let ht = new HashTable();
console.log(ht);

console.log(ht.hashCode("Ana"));
console.log(ht.hashCode("Sue"));
console.log(ht.hashCode("Paul"));
```

- put(): 데이터 추가

```jsx
HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);
  if (this.table[index] !== undefined) {
    return false;
  }
  this.table[index] = new Element(key, value);
  this.length++;
  return true;
};
```

- get(): 데이터 조회

```jsx
HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};
```

- remove(): 데이터 삭제

```jsx
HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];
  if (element !== undefined) {
    delete this.table[this.hashCode(key)];
    this.length--;
  }
  return element;
};
```

- 출력

```jsx
let ht = new HashTable(); 

ht.put("Ana", 172);
ht.put("Sue", 163); 
ht.put("Paul", 190);
console.log(ht);

console.log(ht.remove("Paul"));
console.log(ht.remove("Paul"));
console.log(ht);
```

- clear(): 초기화

```jsx
HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};
```

- size(): 크기 변환

```jsx
HashTable.prototype.size = function () {
  return this.length;
};
```

- getBuffer(): 데이터 셋 반환

```jsx
HashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};
```

- print(): 데이터 셋 출력

```jsx
HashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value);
    }
  }
};
```

- 출력

```jsx
let ht = new HashTable();

ht.put("Ana", 172);
ht.put("Sue", 163);
ht.put("Paul", 190);

ht.print();
console.log(ht.getBuffer());
console.log(ht.size());

ht.clear();
console.log(ht);
```

## 해시테이블 충돌 및 해결

- 충돌 문제(use loselose)

```jsx
const HASH_SIZE = 37;

// hashCode(): 해시 함수
HashTable.prototype.hashCode = function (key) {
  /* loselose hash function */
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

let ht = new HashTable();

ht.put("Ana", 172);
ht.put("Donnie", 183); // collision 
ht.put("Sue", 163);
ht.put("Jamie", 168); // collision 
ht.put("Paul", 190);

console.log(ht.size());
ht.print();
```

- 충돌 해결(use djb2)

```jsx
const HASH_SIZE = 1013; 

// hashCode(): 해시 함수
HashTable.prototype.hashCode = function (key) {
  /* djb2 hash function */
  let hash = 5381; // seed
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

let ht = new HashTable();

ht.put("Ana", 172);
ht.put("Donnie", 183); // collision 
ht.put("Sue", 163);
ht.put("Jamie", 168); // collision 
ht.put("Paul", 190);

console.log(ht.size());
ht.print();
```
