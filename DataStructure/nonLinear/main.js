// 비선형 문제풀이
// 후위 순회
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinaryTree() {
  this.root = null;
}
BinaryTree.prototype._insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value);
  }
  return node;
};
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

BinaryTree.prototype.postOrderTraverse = function (node, array) {
  if (node === null) {
    return;
  }
  this.postOrderTraverse(node.left, array);
  this.postOrderTraverse(node.right, array);
  array.push(node.value);
};
function answer(str) {
  let result = [];
  let tree = new BinaryTree();
  for (let i = 0; i < str.length; i++) {
    tree.insert(str[i]);
  }
  tree.postOrderTraverse(tree.root, result);
  return result;
}

/* main code */ let input = [
  // TC: 1
  "ABC",
  // TC: 2
  "FBADCEGIH",
  // TC: 3
  "CBAEDFG",
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 바이러스
function Graph() {
  this.edge = {};
  this.visited = {};
}
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;
};
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v2].push(v1);
  this.edge[v1].push(v2);
};
Graph.prototype.dfs = function (vertex) {
  if (this.visited[vertex]) return;
  this.visited[vertex] = true;
  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this.dfs(neighbors[i]);
  }
};

function answer(v, e_list) {
  let result = 0;
  let g = new Graph();
  for (let i = 1; i <= v; i++) {
    g.addVertex(i);
  }
  for (let i = 0; i < e_list.length; i++) {
    let e = e_list[i];
    g.addEdge(e[0], e[1]);
  }
  g.dfs(1);
  for (let vertex in g.visited) {
    result += g.visited[vertex] ? 1 : 0;
  }
  return result;
}

/* main code */ let input = [
  // TC: 1
  [
    7,
    [
      [1, 2],
      [2, 3],
      [1, 5],
      [1, 5],
      [5, 2],
      [5, 6],
      [4, 7],
    ],
  ],
  // TC: 2
  [
    10,
    [
      [8, 6],
      [5, 7],
      [9, 10],
      [7, 4],
      [1, 8],
      [5, 10],
      [7, 2],
    ],
  ],
  // TC: 3
  [
    10,
    [
      [6, 9],
      [9, 4],
      [4, 8],
      [9, 7],
      [6, 8],
      [10, 1],
      [10, 9],
    ],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 미로 찾기
function Node(x, y, c) {
  this.x = x;
  this.y = y;
  this.c = c;
}
function Queue() {
  this.array = [];
}
Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};
Queue.prototype.dequeue = function () {
  return this.array.shift();
};
Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

function answer(input) {
  let result = -1;
  let size = input.length;
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let map = [];
  for (let i = 0; i < size; i++) {
    map[i] = [];
    for (let j = 0; j < size; j++) map[i][j] = Number(input[i][j]);
  }
  let s = [0, size - 1];
  let e = [size - 1, 0];
  let q = new Queue();
  q.enqueue(new Node(s[0], s[1], 1));
  while (!q.isEmpty()) {
    let v = q.dequeue();
    if (v.x < 0 || v.y < 0 || v.x >= size || v.y >= size) continue;
    if (map[v.y][v.x]) continue;
    if (v.x == e[0] && v.y == e[1]) {
      result = v.c;
      break;
    }
    map[v.y][v.x] = 1;
    for (let i = 0; i < dir.length; i++)
      q.enqueue(new Node(v.x + dir[i][0], v.y + dir[i][1], v.c + 1));
  }
  return result;
}

/* main code */ let input = [
  // TC: 1
  ["00110", "00010", "00110", "00000", "01011"], 

	// TC: 2
  ["00110", "00010", "00110", "00010", "01011"], 
	
	// TC: 3
  [
    "1111111100",
    "1111111101",
    "1111111101",
    "1000111101",
    "1010111101",
    "1010011101",
    "1011011101",
    "1011011101",
    "1011000001",
    "0011111111",
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
