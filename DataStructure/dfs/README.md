# DFS (Depth First Search)

- 트리나 그래프 등에서 하나의 노드를 최대한 깊게 들어가면서 해를 찾는 탐색 기법
- 장/단점
    - 장점 : 인접한 후보 노드만 기억하면 되므로 적은 기억공간 소요, 노드가 깊은 단계에 있을 경우 빠르게 정답 산출
    - 단점 : 선택한 경로가 답이 아닐 경우 불필요한 탐색 가능, 최단 경로를 구할 시 찾은 해가 정답이 아닐 경우 발생
- 구현 메서드(method)
    - 재귀를 이용한 탐색 : Graph._dfsRecursiveVisit()
    - 스택을 이용한 탐색 : Graph._dfsLoopVisit()
    
- dfs(): DFS 탐색

```jsx
Graph.prototype.dfs = function (startVertex) {
  this._dfsRecursiveVisit(startVertex);
};
```

- _dfsRecursiveVisit(): 재귀를 이용한 DFS 탐색

```jsx
Graph.prototype._dfsRecursiveVisit = function (vertex) {
  if (this.visited[vertex]) {
    return;
  }
  this.visited[vertex] = true;
  console.log(`visit "${vertex}"`);
  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this._dfsRecursiveVisit(neighbors[i]);
  }
};
```

- 사용

```jsx
let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G ", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();
console.log("");

graph.dfs("A");
```

- dfs(): DFS 탐색

```jsx
import { Stack } from "./stack.mjs"; 
// dfs(): DFS 탐색
Graph.prototype.dfs = function (startVertex) {
  // this._dfsRecursiveVisit(startVertex);
  this._dfsLoopVisit(startVertex);
};
```

- _dfsLoopVisit(): 스택을 이용한 DFS 탐색

```jsx
Graph.prototype._dfsLoopVisit = function (vertex) {
  let stack = new Stack();
  stack.push(vertex);
  while (!stack.isEmpty()) {
    let vertex = stack.pop();
    if (this.visited[vertex]) {
      continue;
    }
    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);
    let neighbors = this.edge[vertex];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      stack.push(neighbors[i]);
    }
  }
};
```

- 사용

```jsx
let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G ", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();
console.log("");

graph.dfs("A");
```
