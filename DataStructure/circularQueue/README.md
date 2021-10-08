# 원형 큐(Circular Queue)

- 원형 형태를 가지며, 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out)기반의 선형 자료구조
- 구현 메서드(method)
    - 데이터가 꽉 찼는지 / 비어 있는지 확인 : CircularQueue.isEmpty(), CircularQueue.isFull()
    - 데이터 추가 / 삭제 / 반환 : CircularQueue.enqueue(), CircularQueue.dequeue(), CircularQueue.getBuffer()
    - 첫번째 데이터 / 사이즈 / 전체 삭제 : CircularQueue.front(), CircularQueue.size(), CircularQueue.clear()

- CircularQueue(): 초기 속성값 설정을 위한 생성자 함수

```jsx
function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}
```

- getBuffer(): 객체 내 데이터 셋 반환

```jsx
CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};
```

- isEmpty(): 데이터 비어 있는지 확인

```jsx
CircularQueue.prototype.isEmpty = function () {
  return this.length == 0;
};
```

- isFull(): 데이터 꽉 차 있는지 확인

```jsx
CircularQueue.prototype.isFull = function () {
  return this.length == this.size;
};
```

- 출력

```jsx
let cq = new CircularQueue([1, 2, 3]);
console.log(cq);
console.log(cq.isEmpty());
console.log(cq.isFull());
console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));
```

- enqueue(): 데이터 추가

```jsx
CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;
  this.array[this.tail] = element;
  this.tail = (this.tail + 1) % this.size;
  this.length++;
  return true;
};
```

- dequeue(): 데이터 삭제

```jsx
CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;
  let element = this.array[this.head];
  delete this.array[this.head];
  this.head = (this.head + 1) % this.size;
  this.length--;
  return element;
};
```

- 출력

```jsx
let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq);

console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);

cq.enqueue(6);
console.log(cq);
```

- front(): 가장 첫 데이터 반환

```jsx
CircularQueue.prototype.front = function () {
  return this.length == 0 ? undefined : this.ar;
  ray[this.head];
};
```

- dataSize(): 큐 내 데이터 개수 확인

```jsx
CircularQueue.prototype.dataSize = function () {
  return this.length;
};
```

- clear(): 큐 초기화

```jsx
const DEFAULT_SIZE = 5;

CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};
```

- 출력

```jsx
let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);

cq.enqueue(6);
console.log(cq);
console.log(cq.front());
console.log(cq.dataSize());

cq.clear(10);
console.log(cq);
```
