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
