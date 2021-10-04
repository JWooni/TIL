# 원형 연결 리스트(Circular Linked List)

- 각 노드가 데이터와 포인터를 가지며, 원형 형태로 연결되어 있는 방식으로 데이터를 저장하는 자료구조
- 구현 메서드 (method)
    - 노드 개수 / 비어 있는지 확인 : CircularLinkedList.size(), CircularLinkedList.isEmpty()
    - 노드 추가 : CircularLinkedList.append(), CircularLinkedList.insert()
    - 노드 삭제 : CircularLinkedList.remove(), CircularLinkedList.removeAt()
    - 데이터 위치 확인 / 노드 출력 : CircularLinkedList.indexOf(), CircularLinkedList.printNode()

- Node(): data와 point를 가지고 있는 객체

```jsx
function Node(data) {

	this.data = data;
	this.next = null;
}
```

- LinkedList(): head와  length를  가지고  있는  객체

```jsx
function CircularLinkedList() {

	this.head = null;
	this.length = 0;
}
```

- size(): 연결  리스트  내  노드  개수  확인

```jsx
CircularLinkedList.prototype.size = function () {
	return this.length;	
};
```

- isEmpty(): 객체 내 노드 존재 여부 파악

```jsx
CircularLinkedList.prototype.isEmpty = function() {
	return this.length === 0;
};
```

- printNode(): 노드 출력

```jsx
CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");

  if (this.length != 0) {
    process.stdout.write(`${this.head.data} -> `);

    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
  }
  console.log("null");
};
```

- append(): 연결 리스트 가장 끝에 노드 추가

```jsx
CircularLinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != this.head) {
      current = current.next;
    }
    current.next = node;
  }
  node.next = this.head;

  this.length++;
};
```

- insert(): position 위치에 노드 추가

```jsx
CircularLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    node.next = current;
    if (this.isEmpty()) {
      current = node;
    } else {
      while (current.next != this.head) {
        current = current.next;
      }
    }
    this.head = node;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
    if (node.next === null) {
      node.next = this.head;
    }
  }
  this.length++;
  return true;
};
```

- remove(): value 데이터를 찾아 노드 삭제

```jsx
CircularLinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current,
    data;

  while (current.data != value && current.next != this.head) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  data = current.data;

  if (current === this.head) {
    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    prev.next = current.next;
  }

  this.length--;
  return data;
};
```

- removeAt(): position 위치 노드 삭제

```jsx
CircularLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
    index = 0,
    prev,
    data;

  if (position === 0) {
    data = current.data;

    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;

      current = current.next;
    }
    data = current.data;

    prev.next = current.next;
  }
  this.length--;
  return data;
};
```

- indexOf(): value 값을 갖는 노드 위치 반환

```jsx
CircularLinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  do {
    if (current.data === value) {
      return index;
    }

    index++;

    current = current.next;
  } while (current != this.head);

  return -1;
};
```

- remove2(): indexOf + removeAt = remove

```jsx
CircularLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);

  return this.removeAt(index);
};
```
