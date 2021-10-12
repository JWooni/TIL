## 탐욕 알고리즘(Greedy Algorithm)

- 매 순간 최적 해를 선택하면서 최종적으로 최적해에 도달하는 알고리즘 설계 기법
- 탐욕 알고리즘 특징
    - 최적 부분 구조나 탐욕 선택 속성 문제를 해결하는데 적합
    - 매 순간 최적 해를 찾으면서 구하는 방법이 항상 최적임을 보장하지 않아 유의 필요
- 문제 : 거스름돈
    - [https://www.acmicpc.net/problem/5585](https://www.acmicpc.net/problem/5585)
    
    ```jsx
    function solution(n) {
      let coin = [500, 100, 50, 10, 5, 1];
      let answer = 0;
      n = 1000 - n;
      for (let i = 0; i < coin.length; i++) {
        while (n >= coin[i]) {
          n -= coin[i];
          answer++;
        }
      }
      return answer;
    }
    console.log(solution(380));
    console.log(solution(1));
    ```
    
- 문제 : 체육복
    - [https://programmers.co.kr/learn/courses/30/lessons/42862](https://programmers.co.kr/learn/courses/30/lessons/42862)
    
    ```jsx
    function solution(n, lost, reserve) {
      let losted = [...lost].filter((x) => !reserve.includes(x));
      let reserved = [...reserve].filter((x) => !lost.includes(x));
      let answer = n - losted.length;
      let db = {};
    
      for (let i = 0; i < reserved.length; i++) {
        db[reserved[i]] = true;
      }
    
      losted = losted.sort((x, y) => x - y);
    
      for (let i = 0; i < losted.length; i++) {
        if (db[losted[i] - 1]) {
          answer++;
          db[losted[i] - 1] = false;
        } else if (db[losted[i] + 1]) {
          answer++;
          db[losted[i] + 1] = false;
        }
      }
      return answer;
    }
    ```
