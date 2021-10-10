# 비선형 문제풀이

- 후위 순회
    - 문제 설명
        - 컴퓨터공학과에 들어간 사촌 동생이 후위순회를 궁금해한다.
        - 트리가 주어졌을 때, 후위 순회하며 방문했던 노드를 산출해주는 프로그램을 작성하시오.
        - 입력은 노드가 추가되는 순번대로 명시된 문자열이 주어지며, 트리를 만들어 갈 때 작은 값은 왼쪽으로 큰 값은 오른쪽으로 붙여가며 만든다. 왼쪽 → 오른쪽 → 루트순으로 후위 순회하며 방문한 노드를 배열에 저장하고 그 결과를 반환한다.

```jsx
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
```

- 바이러스
    - 문제 설명
        - 최근 웜 바이러스가 네트워크를 통해 전파되고 있는데, 한 컴퓨터라도 이 바이러스에 걸리면 컴퓨터와 연결되어 있는 모든 컴퓨터는 바이러스에 걸리게 된다. 현재 PC에 설정된 네트워크 기준으로, 한대의 PC에 바이러스가 걸렸을 때 총 몇 대의 PC가 바이러스에 걸릴지 계산하는 프로그램을 작성하시오.
        - 예를 들어 7번까지의 PC가 있고, 1, 2, 3, 4, 5, 6번 PC는 1번 네트워크, 4, 7번 PC는 2번 네트워크로 구성되어 있을 때, 1번 PC가 바이러스에 걸리면 총 5대의 PC가 바이러스에 걸리게 된다.
        - 입력은 PC의 총 대수와, PC와 PC가 연결된 네트워크 정보가 배열로 입력된다. 웜 바이러스에 감염된 PC는 무조건 1번으로 고정될 때, 바이러스에 걸리는 총 PC의 대수를 계산하여 반환하시오.

```jsx
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
```

- 미로 찾기
    - 문제 설명
        - 친구가 제주도 미로 공원에서 들어갔는데 1시간째 못 빠져 나오고 있다.
        - 친구를 도와 최단거리로 미로를 빠져나오는 경로를 구하는 프로그램을 작성하시오.
        - 미로 공원은 정사각형 형태이며, 길 0과 벽 1로 이루어진 X축 문자열 정보가 Y축 개수만큼 주어진다.
        - 정사각형으로 이루어진 2차원 미로 지도의 입구는 왼쪽 하단이고, 출구는 오른쪽 상단이다.
        - 최단 경로로 입구에서 출구를 나갈 때 거쳐야 하는 길의 개수를 반환하시오.
        - 만약 출구로 갈 수 있는 길이 없다면 -1을 반환한다.

```jsx
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
```
