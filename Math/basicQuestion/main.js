// 기본 문제 풀이
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
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}

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
