# 실전 문제 풀이

- 문자열을 정수로 바꾸기
    - [https://programmers.co.kr/learn/courses/30/lessons/12925](https://programmers.co.kr/learn/courses/30/lessons/12925)

```jsx
function solution(s) {
    return Number(s);
}
```

- 짝수와 홀수
    - [https://programmers.co.kr/learn/courses/30/lessons/12937](https://programmers.co.kr/learn/courses/30/lessons/12937)

```jsx
function solution(num) {
    var answer = '';
    if (num % 2 == 0) {
        answer = "Even";
    } else {
        answer = "Odd"
    }
    return answer;
}
```

- 2016년
    - [https://programmers.co.kr/learn/courses/30/lessons/12901](https://programmers.co.kr/learn/courses/30/lessons/12901)

```jsx
function solution(a, b) {
    let answer = "";
    let day = new Date(2016, a - 1, b).getDay();
    
    switch(day) {
        case 0: 
            answer = "SUN";
                break;
        case 1: 
            answer = "MON";
                break;
        case 2: 
            answer = "TUE";
                break;
        case 3: 
            answer = "WED";
                break;
        case 4 : 
            answer = "THU";
                break;
        case 5 : 
            answer = "FRI";
                break;
        case 6 : 
            answer = "SAT";
            break;
    }
    
    return answer;
}
```

- 폰켓몬
    - [https://programmers.co.kr/learn/courses/30/lessons/1845](https://programmers.co.kr/learn/courses/30/lessons/1845)

```jsx
function solution(nums) {
    let n = nums.length / 2; 
    let m = new Set(nums).size;
    
    return m > n ? n : m;
}
```

- 가운데 글자 가져오기
    - [https://programmers.co.kr/learn/courses/30/lessons/12903](https://programmers.co.kr/learn/courses/30/lessons/12903)

```jsx
function solution(s) {
    let answer = s.substr(Math.round(s.length / 2) - 1, s.length % 2 == 0 ? 2 : 1);
    return answer
}
```

- 문자열 내 마음대로 정렬하기
    - [https://programmers.co.kr/learn/courses/30/lessons/12915](https://programmers.co.kr/learn/courses/30/lessons/12915)

```jsx
function solution(strings, n) { 
    return strings.sort((x, y) =>
        x[n] == y[n] ? (x > y ? 1 : -1) : x[n] > y[n] ? 1 : -1 );
}
```

- 직사각형 별찍기
    - [https://programmers.co.kr/learn/courses/30/lessons/12969](https://programmers.co.kr/learn/courses/30/lessons/12969)

```jsx
process.stdin.on('data', data => { 
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]); 

    for (let r = 0; r < b; r++) {
        let star = "";
        for (let c = 0; c < a; c++) 
					star += '*';
        console.log(star); 
		}
   });
```

- 두 정수 사이의 합
    - [https://programmers.co.kr/learn/courses/30/lessons/12912](https://programmers.co.kr/learn/courses/30/lessons/12912)

```jsx
function solution(a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2; 
}
```

- 부족한 금액 계산하기
    - [https://programmers.co.kr/learn/courses/30/lessons/82612](https://programmers.co.kr/learn/courses/30/lessons/82612)

```jsx
function solution(price, money, count) { 
    let answer = 0;
    for (let i = 1; i <= count; i++) { 
        answer += i;
    }
    answer *= price;
    return money >= answer ? 0 : answer - money;
}
```

- K번째 수
    - [https://programmers.co.kr/learn/courses/30/lessons/42748](https://programmers.co.kr/learn/courses/30/lessons/42748)

```jsx
function solution(array, commands) { 
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        let tmp = array.slice(commands[i][0] - 1, commands[i][1]); 
        tmp.sort((x, y) => x - y);
        answer.push(tmp[commands[i][2] - 1]); 
    }
    return answer; 
}
```

- 나누어 떨어지는 숫자 배열
    - [https://programmers.co.kr/learn/courses/30/lessons/12910](https://programmers.co.kr/learn/courses/30/lessons/12910)

```jsx
function solution(arr, divisor) { 
    let answer = [];

    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]); 
        }
    }
    return answer.length ? answer.sort((x, y) => x - y) : [-1];
}
```

- 같은 숫자는 싫어
    - [https://programmers.co.kr/learn/courses/30/lessons/12906](https://programmers.co.kr/learn/courses/30/lessons/12906)

```jsx
function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length - 1; i++) { 
        if (arr[i] != arr[i + 1]) {
            answer.push(arr[i]); 
        }
    }
    answer.push(arr[arr.length - 1]); 
    return answer;
}
```
