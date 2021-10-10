# BFS (Breadth First Search)

- 트리나 그래프 등에서 인접한 노드를 우선 방문하면서 넓게 움직이며 해를 찾는 탐색 기법
- 장/단점
    - 장점 : 최단 경로 탐색에서 구한 해가 정답임을 보장
    - 단점 : 경로가 매우 길어질 경우, 탐색 범위가 증가하면서 DFS보다 많은 기억 공간이 필요
- 구현 메서드(method)
    - 큐를 이용한 탐색 : Graph.bfs(), Graph._bfsLoopVisit()
    - 최단 경로 탐색 : Graph.shortestPath(), Graph._bfsShortestPath(), Graph._from_to_path()
    
- bfs(): BFS 탐색

```jsx
import { Queue } from "./queue.mjs"; 
// bfs(): BFS 탐색
Graph.prototype.bfs = function (startVertex) {
  this._bfsLoopVisit(startVertex);
};
```

- _bfsLoopVisit(): 큐를 이용한 BFS 탐색

```jsx
Graph.prototype._bfsLoopVisit = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);
  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    if (this.visited[vertex]) {
      continue;
    }
    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);
    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      queue.enqueue(neighbors[i]);
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

graph.bfs("A");
```

- _bfsShortestPath(): 다른 정점 간 최단 경로 비용 산출

```jsx
Graph.prototype._bfsShortestPath = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);
  let distance = {};
  let pre_visit = {};
  for (let vertex in this.edge) {
    distance[vertex] = 0;
    pre_visit[vertex] = null;
  }
  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);
    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      if (!this.visited[neighbors[i]]) {
        distance[neighbors[i]] = distance[vertex] + 1;
        pre_visit[neighbors[i]] = vertex;
        queue.enqueue(neighbors[i]);
      }
    }
  }
  return { distance, pre_visit };
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

console.log(graph._bfsShortestPath("A"));
```

- _from_to_path(): from 정점에서 to 정점으로 최단 경로 출력

```jsx
Graph.prototype._from_to_path = function (pre_visit, from, to) {
  let stack = new Stack();
  for (let v = to; v !== from; v = pre_visit[v]) {
    stack.push(v);
  }
  stack.push(from);
  while (!stack.isEmpty()) {
    let v = stack.pop();
    process.stdout.write(`${v} -> `);
  }
  console.log("end");
};
```

- shortestPath(): 다른 정점 간 최단 경로 탐색

```jsx
Graph.prototype.shortestPath = function (startVertex) {
  let result = this._bfsShortestPath(startVertex);
  console.log(result.distance);
  console.log(result.pre_visit);
  for (let vertex in this.edge) {
    if (vertex === startVertex) continue;
    this._from_to_path(result.pre_visit, startVertex, vertex);
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

graph.shortestPath("A");
```
