// 열차 연결
function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(nums) {
  let ll = new LinkedList();

  let current, prev;

  for (let i = 0; i < nums.length; i++) {
    current = new Train(nums[i]);

    if (i === 0) {
      ll.head = current;
    } else {
      prev.next = current;
    }

    prev = current;
  }

  return ll;
}


// 서류 정리
function File(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(ll) {
  let current = ll.head,
    prev = null,
    next;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;

    current = next;
  }

  ll.head = prev;

  return ll;
}


// 대표 선출
function Node(data) {
  this.data = data;
  this.next = null;
}
function LinkedList() {
  this.head = null;
}
function answer(n, m, k) {
  let result = [];

  // make circular linked list 
	let ll = new LinkedList(); 
	let current, prev;

  for (let i = 1; i <= n; i++) {
    current = new Node(i);
    if (i === 1) {
      ll.head = current;
    } else {
      prev.next = current;
    }
    prev = current;
  }
  current.next = ll.head;

  // find first node
  current = ll.head;
  while (--m) {
    prev = current;
    current = current.next;
  }
  // remove representative 
	
	let count;
  while (current.next != current) {
    result.push(current.data);
    prev.next = current.next;
    count = k;
    while (count--) {
      prev = current;
      current = current.next;
    }
  }
  result.push(current.data);
  return result;
}
