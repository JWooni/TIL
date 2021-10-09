// Node(): value와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BinaryTree(): 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree() {
  this.root = null;
}

// _insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부 사용)
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

// insert(): 노드 추가
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

// 사용
let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

// preorder(node)
// 	print node.value
// 	if node.left ≠ null then preorder(node.left)
// 	if node.right ≠ null then preorder(node.right)

// _preOrderTraverseNode(): 재귀로 트리를 순회하 며 전위 순회 (내부 사용)
BinaryTree.prototype._preOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  callback(node);
  this._preOrderTraverseNode(node.left, callback);
  this._preOrderTraverseNode(node.right, callback);
};

// preOrderTraverse(): 전위 순회하며 노드 출력
BinaryTree.prototype.preOrderTraverse = function (callback) {
  this._preOrderTraverseNode(this.root, callback);
};

// 사용
let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("********* Pre-Order ***********");
tree.preOrderTraverse(printNode);
console.log("end");

// inorder(node)
// 	if node.left ≠ null then inorder(node.left)
// 	print node.value
// 	if node.right ≠ null then inorder(node.right)

// _inOrderTraverseNode(): 재귀로 트리를 순회하 며 중위 순회 (내부 사용)
BinaryTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};

// inOrderTraverse(): 중위 순회하며 노드 출력
BinaryTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
};

// 사용
let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("********* In-Order ***********");
tree.inOrderTraverse(printNode);
console.log("end");

// 후위 순위
// postorder(node)
// 	if node.left ≠ null then postorder(node.left)
// 	if node.right ≠ null then postorder(node.right)
// 	print node.value

// _postOrderTraverseNode(): 재귀로 트리를 순회하 며 후위 순회 (내부 사용)
BinaryTree.prototype._postOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this._postOrderTraverseNode(node.left, callback);
  this._postOrderTraverseNode(node.right, callback);
  callback(node);
};

// postOrderTraverse(): 후위 순회하며 노드 출력
BinaryTree.prototype.postOrderTraverse = function (callback) {
  this._postOrderTraverseNode(this.root, callback);
};

// 사용
let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("********* Post-Order ***********");
tree.postOrderTraverse(printNode);
console.log("end");

// 층별 순회
// levelorder(root)
// q.enqueue(root)
// 	while not q.empty do
// 	node := q.dequeue()
// 	print node.value
// 	if node.left ≠ null q.enqueue(node.left)
// 	if node.right ≠ null q.enqueue(node.right)

/* Queue 객체 추가 */
function Queue(array) {
  this.array = array ? array : [];
}
Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

// levelOrderTraverse(): 층별 순회하며 노드 출력
BinaryTree.prototype.levelOrderTraverse = function (callback) {
  let q = new Queue();
  let node;
  q.enqueue(this.root);
  while (!q.isEmpty()) {
    node = q.dequeue();
    callback(node);
    if (node.left !== null) q.enqueue(node.left);
    if (node.right !== null) q.enqueue(node.right);
  }
};

// 사용
let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("********* Level-Order ***********");
tree.levelOrderTraverse(printNode);
console.log("end");
