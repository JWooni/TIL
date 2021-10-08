// 1
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

// 2번
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

// 3번
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

// 4번
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
