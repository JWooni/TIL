# 기본 문제 풀이

- 등차수열의 항 찾기
    - 문제 설명
        - 입력된 값을 통해서 등차 수열의 몇 번째 항인지를 구하는 프로그램을 작성하시오.
        - 입력은 초항 a, 인접한 차이 d, 찾는 항의 수 n이 주어지며, n값에 해당하는 항 번호를 반환한다.
        - 단, 만약 항 번호가 없을 시에는 -1를 반환한다.
        - 예를 들어 a = 1, d = 2, n = 7이 주어졌을 때
        - f(1) = 1, f(2) = 3, f(3) = 5, f(4) = 7가 되므로 n = 7에 해당하는 항인 4를 반환한다.

```jsx
// 등차수열의 항 찾기
function answer(a, d, n) {
	let index = -1; 
	let num;
	
	for (let i = 1; ; i++) { 
		num = a + d * (i - 1);
		if (num > n) {
			break;
		} 
		if (num == n) {
		index = i; 
		break;
	}
	// console.log(num);
	}
	return index; 
}

let input = [
	// TC: 1 
	[1, 2, 7],
	// TC: 2 
	[2, 3, 10],
	// TC: 3 
	[3, 5, 23],
];
for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i][0], input[i ][1], input[i][2])}`);
}
```

- 잃어버린 카드 찾기
    - 문제 설명
        - 등차 수열을 이루는 4개의 숫자 카드를 받았는데, 한 카드를 잃어버렸다. 잃어버린 카드를 찾아주자.
        - 입력은 자연수로 된 3개의 숫자 카드를 받고, 한 가지의 잃어버린 카드의 수를 반환한다.
        - 단, 잃어버린 카드는 가운데 숫자 카드로 한정한다.
        - 예를 들어 1, 7, 10을 입력 받았을 때
        - 초항이 1이고, 두 수의 차가 3인, 등차 수열 1, 4, 7, 10을 찾아 4를 반환하도록 한다.

```jsx
// 잃어버린 카드 찾기
function answer(a, b, c) {
  let number = 0;
  // sort
  num = [a, b, c];
  num.sort((x, y) => x - y); // get d
  let d = 0;
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;

  // get location
  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

  // calc number
  number = num[0] + d * index;

  return number;
}
let input = [
  // TC: 1
  [1, 7, 10],
  // TC: 2
  [3, 8, 18],
  // TC: 3
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
```
