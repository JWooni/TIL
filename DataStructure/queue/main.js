// Queue(): 생성자 함수로 초기 데이터 설정
function Queue(array) {
  this.array = array ? array : [];
}

// getBuffer(): 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty(): 객체 내 데이터 존재 여부 파악
Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};
let queue = new Queue([1, 2, 3]);
console.log(queue); // queue { array: [ 1, 2, 3 ] }

let data = queue.getBuffer();
console.log(data === queue.array); // false
console.log(data); // [ 1, 2, 3 ]
console.log(queue.isEmpty()); // false
console.log(Object.getOwnPropertyDescriptors(Queue.prototype));

// enqueue(): 데이터 추가
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

// dequeue(): 데이터 삭제
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

let queue = new Queue([1, 2]);
console.log(queue); // Queue { array: [ 1, 2 ] }
queue.enqueue(3);
queue.enqueue(4);
console.log(queue); // Queue { array: [ 1, 2, 3, 4 ] }
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue); // Queue { array: [ 3, 4 ] }

// front(): 가장 첫 데이터 반환
Queue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0];
};

// size(): 큐 내 데이터 개수 확인
Queue.prototype.size = function () {
  return this.array.length;
};

// clear(): 큐 초기화
Queue.prototype.clear = function () {
  this.array = [];
};

// 출력
let queue = new Queue([1, 2, 3, 4]);
queue.dequeue();
console.log(queue.front()); // 2
console.log(queue); // Queue { array: [ 2, 3, 4 ] }
console.log(queue.size()); // 3
queue.clear();
console.log(queue); // Queue { array: [] }
console.log(queue.size()); // 0

// 큐 최적화
function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}
Queue.prototype.enqueue = function (element) {
  return (this.array[this.tail++] = element);
};
Queue.prototype.dequeue = function () {
  if (this.tail === this.head) return undefined;
  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};

let queue = new Queue([1, 2]);
console.log(queue); // Queue { array: [ 1, 2 ], tail: 2, head: 0 }

queue.enqueue(3);
queue.enqueue(4);
console.log(queue); // Queue { array: [ 1, 2, 3, 4 ], tail: 4, head: 0 }

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue); // Queue { array: [ <2 empty items>, 3, 4 ], tail: 4, head: 2 }


// benchmark
let queue_1 = new Queue_1();
let queue_2 = new Queue_2();
const count = 100000;
function benchmark(queue, enqueue) {
  let start = Date.now();
  for (let i = 0; i < count; i++) {
    enqueue ? queue.enqueue() : queue.dequeue();
  }
  return Date.now() - start;
}
console.log("enqueue queue_1: " + benchmark(queue_1, 1) + "ms"); // queue_1: 8ms
console.log("enqueue queue_2: " + benchmark(queue_2, 1) + "ms"); // queue_2: 6ms
console.log("dequeue queue_1: " + benchmark(queue_1, 0) + "ms"); // queue_1: 5695ms
console.log("enqueue queue_2: " + benchmark(queue_2, 0) + "ms"); // queue_2: 9ms
