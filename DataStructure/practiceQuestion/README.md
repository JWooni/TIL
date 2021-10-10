# 실전 문제 풀이

- 프린터
    - [https://programmers.co.kr/learn/courses/30/lessons/42587](https://programmers.co.kr/learn/courses/30/lessons/42587)

```jsx
function solution(priorities, select) {
  let result = -1;
  let vq = new Queue(); //    value
  let pq = new Queue(); //    priority
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
```

- 완주하지 못한 선수
    - [https://programmers.co.kr/learn/courses/30/lessons/42576](https://programmers.co.kr/learn/courses/30/lessons/42576)

```jsx
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i in participant) {
    if (participant[i] !== completion[i]) {
			return participant[i];
		}
  }
}
```

- 기능 개발
    - [https://programmers.co.kr/learn/courses/30/lessons/42586](https://programmers.co.kr/learn/courses/30/lessons/42586)

```jsx
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];
  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }
  retu
```

- 다리를 지나는 트럭
    - [https://programmers.co.kr/learn/courses/30/lessons/42583](https://programmers.co.kr/learn/courses/30/lessons/42583)

```jsx
function Truck(weight, time) {
  this.weight = weight;
  this.time = time;
}
function solution(bridge_length, weight, truck_weights) {
  let queue = [];
  let head = 0;
  let tail = 0;
  let truck_index = 0;
  let total_weight = 0;
  let time = 0;
  queue[tail++] = new Truck(truck_weights[truck_index], bridge_length + time);
  total_weight += truck_weights[truck_index++];
  time++;
  while (head != tail) {
    if (queue[head].time === time) total_weight -= queue[head++].weight;
    if (
      tail - head < bridge_length &&
      total_weight + truck_weights[truck_index] <= weight
    ) {
      queue[tail++] = new Truck(
        truck_weights[truck_index],
        bridge_length + time
      );
      total_weight += truck_weights[truck_index++];
    } else if (queue[head]) {
      time = queue[head].time - 1;
    }
    time++;
  }
  return time;
}
```

- 타겟 넘버
    - [https://programmers.co.kr/learn/courses/30/lessons/43165](https://programmers.co.kr/learn/courses/30/lessons/43165)

```jsx
function dfs(numbers, target, index, total) {
  if (index === numbers.length) {
    return target === total ? 1 : 0;
  }
  let count = 0;
  count += dfs(numbers, target, index + 1, total + numbers[index]);
  count += dfs(numbers, target, index + 1, total - numbers[index]);
  return count;
}
function solution(numbers, target) {
  return dfs(numbers, target, 0, 0);
}
```

- 네트워크
    - [https://programmers.co.kr/learn/courses/30/lessons/43162](https://programmers.co.kr/learn/courses/30/lessons/43162)

```jsx
function dfs(computers, visited, idx) {
  if (visited[idx]) {
    return 0;
  }
  visited[idx] = 1;
  for (let i = 0; i < computers[idx].length; i++) {
    if (computers[idx][i]) dfs(computers, visited, i);
  }
  return 1;
}
function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    answer += dfs(computers, visited, i);
  }
  return answer;
}
```

- 가장 먼 노드
    - [https://programmers.co.kr/learn/courses/30/lessons/49189](https://programmers.co.kr/learn/courses/30/lessons/49189)

```jsx
function solution(n, edge) {
  let answer = 0;
  return bfs(edge, 1, n);
}

function bfs(arr, start, end) {
  let visited = new Array(end + 1);
  let level = new Array(end + 1);
  let queue = [start];
  level[0] = 0;
  level[start] = 0;
  visited[start] = true;
  let lev;
  while (queue.length) {
    let node = queue.shift();
    lev = level[node] + 1;
    for (let edge of arr) {
      if (edge[0] == node && visited[edge[1]] == undefined) {
        queue.push(edge[1]);
        visited[edge[1]] = true;
        level[edge[1]] = lev;
      } else if (edge[1] == node && visited[edge[0]] == undefined) {
        queue.push(edge[0]);
        visited[edge[0]] = true;
        level[edge[0]] = lev;
      }
    }
  }
  return level.filter((i) => i == lev - 1).length;
}
```
