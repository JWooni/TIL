# 큐 & 데크 문제풀이

- 큐 만들기
    - 문제 설명
        - 자연수를 저장하는 큐를 만들고자 한다. 입력으로 주어지는 큐 명령어를 처리하는 프로그램을 작성하시오.
        - 명령어의 종류는 총 6가지며 아래와 같으며, 명령에 따라 반환된 값을 result 배열에 넣도록 한다.
            - enqueue X : 자연수 X를 큐 뒤쪽에 넣는다.
            - deque : 큐 앞쪽에 있는 값을 제거하고 그 값을 반환한다. 만약 값이 없다면 -1를 반환한다.
            - empty : 큐가 비어 있다면 1, 아니면 0을 반환한다.
            - size : 큐에 들어 있는 자연수 개수를 반환한다.
            - front : 큐 앞쪽에 값이 있다면 해당 값을, 없다면 -1을 반환한다.
            - back : 큐 뒤쪽에 값이 있다면 해당 값을, 없다면 -1을 반환한다.

```jsx
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};

Queue.prototype.dequeue = function () {
  let ret = this.array.shift();
  return ret === undefined ? -1 : ret;
};

Queue.prototype.size = function () {
  return this.array.length;
};

Queue.prototype.empty = function () {
  return this.array.length === 0 ? 1 : 0;
};

Queue.prototype.front = function () {
  return this.array.length === 0 ? -1 : this.array[0];
};

Queue.prototype.back = function () {
  return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
};

function answer(cmds) {
  let result = [];
  let queue = new Queue();
  for (let i = 0; i < cmds.length; i++) {
    let cmd = cmds[i].split(" ")[0];
    switch (cmd) {
      case "enqueue":
        queue.enqueue(Number(cmds[i].split(" ")[1]));
        break;
      case "dequeue":
        result.push(queue.dequeue());
        break;
      case "size":
        result.push(queue.size());
        break;
      case "empty":
        result.push(queue.empty());
        break;
      case "front":
        result.push(queue.front());
        break;
      case "back":
        result.push(queue.back());
        break;
    }
  }
  return result;
}

let input = [
  // TC: 1
  ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "de queue"],
  // TC: 2
  [
    "enqueue 3",
    "enqueue 4",
    "enqueue 5",
    "enqueue 6",
    "front",
    "back",
    "dequeue",
    "size",
    "empty",
  ],
  // TC: 3
  [
    "enqueue 7",
    "enqueue 8",
    "front",
    "back",
    "size",
    "empty",
    "dequeue",
    "dequeue",
    "dequeue",
    "size",
    "empty",
    "dequeue",
    "enqueue 9",
    "empty",
    "front",
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
```

- 카드 뽑기
    - 문제 설명
        - 친구와 카드 게임을 하려고 한다. 카드는 총 N장 있으며, 1부터 N까지 번호가 차례대로 붙어 있다.
        - 카드의 순서는 1번 카드가 가장 위에 있고 N번 카드가 가장 아래인 상태로 높여 있다.
        - 이때 맨 위에 있는 한 장을 빼서 나누고, 그 다음 맨 위에 있는 한장을 아래로 집어 넣으면서, 모든 카드를 분배할 때까지 카드 한 장씩 빼고 넣는 작업을 반복한다.
        - 이러한 규칙으로 분배된 카드의 순서를 알려주는 프로그램을 작성하시오.
        - 입력 값은 자연수가 주어지며, 규칙에 따라 분배되는 카드의 순서를 기록해 배열 형태로 반환하시오.

```jsx
function Queue() {
  this.array = [];
}
Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};
Queue.prototype.dequeue = function () {
  return this.array.shift();
};
function answer(n) {
  let result = [];
  let queue = new Queue();
  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }
  while (queue.array.length != 0) {
    result.push(queue.dequeue());
    if (queue.array.length != 0) {
      queue.enqueue(queue.dequeue());
    }
  }
  return result;
}

let input = [
  // TC: 1
  4,
  // TC: 2
  7,
  // TC: 3
  10,
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
```

- 프린터 출력
    - 문제 설명
        - 새로 구매한 프런트는 우선 순위를 고려해 프린트 결과물을 출력해주기 때문에 아래 규칙으로 동작한다.
        - 현재 등록된 프린트 문서들의 우선 순위를 확인하고, 가장 높은 우선순위 문서가 먼저 출력되며 현재 선택된 문서가 가장 높은 우선수위 문서가 아니라면, 취소되고 다시 뒤쪽 순서로 설정돼 추가된다.
        - 만약, 3개의 문서 A, B, C가 대기 상태이고, 중요도가 1, 2, 3이라면 "ABC → BCA → CAB → C 출력 → AB → BA → B출력 → A → A"출력으로 동작한다.
        - 현재 등록된 문서 우선순위를 보고, 내가 등록한 문서가 현재 출력될 지 계산하는 프로그램을 작성하시오.
        - 입력은 우선순위와 0번부터 시작하는 문서 번호가 주어지고, 주어진 문서번호가 출력될 순서를 반환한다.

```jsx
function Queue() {
  this.array = [];
}
Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};
Queue.prototype.front = function () {
  return this.array[0];
};
Queue.prototype.dequeue = function () {
  return this.array.shift();
};
Queue.prototype.max = function () {
  return Math.max(...this.array);
};
function answer(priorities, select) {
  let result = -1;
  let vq = new Queue(); // value
  let pq = new Queue(); // priority
  for (let i = 0; i < priorities.length; i++) {
    vq.enqueue(i);
    pq.enqueue(priorities[i]);
  }
  let count = 0;
  while (true) {
    if (pq.front() === pq.max()) {
      count++;
      if (vq.front() === select) {
        result = count;
        break;
      } else {
        vq.dequeue();
        pq.dequeue();
      }
    } else {
      vq.enqueue(vq.dequeue());
      pq.enqueue(pq.dequeue());
    }
  }
  return result;
}

let input = [
  // TC: 1
  [[3], 0],
  // TC: 2
  [[3, 4, 5, 6], 2],
  // TC: 3
  [[1, 1, 5, 1, 1, 1], 0],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
```

- 대표 선출
    - 문제 설명
        - 자연수를 저장하는 데크를 만들고자 한다. 입력으로 주어진 명령어를 처리할 수 있는 프로그램을 작성하시오.
        - 명렁의 종류는 총 8가지며 아래와 같으며, 명령어에 따라 반환된 값을 result배열에 넣도록 한다.
            - push_front X : 자연수 X를 앞쪽에 넣는다.
            - push_back X : 자연수 X를 뒤쪽에 넣는다.
            - pop_front : 앞쪽에 있는 값을 제거하고 그 값을 반환한다. 만약 값이 없다면 -1를 반환한다.
            - pop_back : 뒤쪽에 있는 값을 제거하고 그 값을 반환한다. 만약 값이 없다면 -1를 반환한다.
            - empty : 큐가 비어 있다면 1, 아니면 0을 반환한다.
            - size : 큐에 들어 있는 자연수 개수를 반환한다.
            - front : 앞쪽에 값이 있다면 값을, 없다면 -1을 반환한다.
            - back : 큐 뒤쪽에 값이 있다면 값을, 없다면 -1을 반환한다.

```jsx
function Deque(array = []) {
  this.array = array;
}
Deque.prototype.push_front = function (element) {
  return this.array.unshift(element);
};
Deque.prototype.push_back = function (element) {
  return this.array.push(element);
};
Deque.prototype.pop_front = function () {
  let ret = this.array.shift();
  return ret === undefined ? -1 : ret;
};
Deque.prototype.pop_back = function () {
  let ret = this.array.pop();
  return ret === undefined ? -1 : ret;
};
Deque.prototype.front = function () {
  return this.array.length == 0 ? -1 : this.array[0];
};
Deque.prototype.back = function () {
  return this.array.length == 0 ? -1 : this.array[this.array.length - 1];
};
Deque.prototype.empty = function () {
  return this.array.length == 0 ? 1 : 0;
};
Deque.prototype.size = function () {
  return this.array.length;
};
function answer(cmds) {
  let result = [];
  let dq = new Deque();
  for (let i = 0; i < cmds.length; i++) {
    let cmd = cmds[i].split(" ")[0];
    switch (cmd) {
      case "push_front":
        dq.push_front(Number(cmds[i].split(" ")[1]));
        break;
      case "push_back":
        dq.push_back(Number(cmds[i].split(" ")[1]));
        break;
      case "pop_front":
        result.push(dq.pop_front());
        break;
      case "pop_back":
        result.push(dq.pop_back());
        break;
      case "size":
        result.push(dq.size());
        break;
      case "empty":
        result.push(dq.empty());
        break;
      case "front":
        result.push(dq.front());
        break;
      case "back":
        result.push(dq.back());
        break;
    }
  }
  return result;
}
let input = [
  // TC: 1
  ["push_back 1", "push_front 2", "pop_front", "pop_ba ck", "pop_front"],
  // TC: 2
  [
    "push_back 3",
    "push_front 4",
    "push_back 5",
    "pus h_front 6",
    "front",
    "back",
    "pop_front",
    "size",
    "emp ty",
  ],
  // TC: 3
  [
    "push_back 7",
    "push_front 8",
    "front",
    "back",
    "size",
    "empty",
    "pop_front",
    "pop_back",
    "pop_front",
    "size",
    "empty",
    "pop_back",
    "push_front 9",
    "empty",
    "front",
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
```
