# 데크 (Deque)

- Double-Ended Queue 약자로, 삽입과 삭제가 양쪽 끝에서 모두 발생할 수 있는 선형 자료구조
- 구현 메서드(method)
    - 데이터 전체 획득 / 비어 있는지 확인 : Deque.getBuffer(), Deque.isEmpty()
    - 데이터 추가 / 삭제 : Deque.pushFront(), Deque.popFront(), Deque.pushBack(), Deque.popBack()
    - 첫번째 & 끝 데이터 반환 / 사이즈 / 전체 삭제 : Deque.front(), Deque.back(), Deque.size(), Deque.clear()
    
- Deque(): 초기 속성값 설정을 위한 생성자 함수

```jsx
function Deque(array = []) {
  this.array = array;
}
```

- getBuffer(): 객체 내 데이터 셋 반환

```jsx
Deque.prototype.getBuffer = function () {
  return this.array.slice();
};
```

- isEmpty(): 데이터 비어 있는지 확인

```jsx
Deque.prototype.isEmpty = function () {
  return this.array.length == 0;
};
```

- 출력

```jsx
let dq = new Deque([1, 2, 3]);
console.log(dq);
let data = dq.getBuffer();
console.log(data === dq.array);
console.log(data);
console.log(dq.isEmpty());
console.log(Object.getOwnPropertyDescriptors(Deque.prototype));
```

- pushFront(): 앞쪽 데이터 추가

```jsx
Deque.prototype.pushFront = function (element) {
  return this.array.unshift(element);
};
```

- popFront(): 앞쪽 데이터 삭제

```jsx
Deque.prototype.popFront = function () {
  return this.array.shift();
};
```

- pushBack(): 뒤쪽 데이터 추가

```jsx
Deque.prototype.pushBack = function (element) {
  return this.array.push(element);
};
```

- popBack(): 뒤쪽 데이터 삭제

```jsx
Deque.prototype.popBack = function () {
  return this.array.pop();
};
```

- 출력

```jsx
let dq = new Deque([1, 2, 3]);
console.log(dq);
dq.pushFront(0);
dq.pushBack(4);
console.log(dq);

console.log(dq.popFront());
console.log(dq.popBack());
console.log(dq);
```

- front(): 가장 첫 데이터 반환

```jsx
Deque.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0];
};
```

- back(): 가장 끝 데이터 반환

```jsx
Deque.prototype.back = function () {
  return this.array.length == 0 ? undefined : this.array[this.array.length - 1];
};
```

- size(): 큐 내 데이터 개수 확인

```jsx
Deque.prototype.size = function () {
  return this.array.length;
};
```

- clear(): 큐 초기화

```jsx
Deque.prototype.clear = function () {
  this.array = [];
};
```

- 출력

```jsx
let dq = new Deque([1, 2, 3]);
console.log(dq);

console.log(dq.front());
console.log(dq.back());
console.log(dq.size());

dq.clear();
console.log(dq);
```
