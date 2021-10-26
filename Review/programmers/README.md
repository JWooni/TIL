# 프로그래머스 문제 풀이

## 직사각형 별찍기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript)

- 풀이

```jsx
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    let str = "";
    for (let j = 0; j < a; j++) {
      str = str + "*";
    }
    console.log(str);
  }
});
```

## x만큼 간격이 있는 n개의 숫자

[문제](https://programmers.co.kr/learn/courses/30/lessons/12954)

- 풀이

```jsx
function solution(x, n) {
	let answer = [];

	for (let i = 1; i <= n; i++) {
		answer.push(x*i)
	}
	return answer;
}

let result = solution(2, 5);
console.log(result);
```

## 행렬의 덧셈

[문제](https://programmers.co.kr/learn/courses/30/lessons/12950)

- 풀이

```jsx
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}
```
