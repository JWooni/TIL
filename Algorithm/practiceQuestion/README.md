## 실전 문제 풀이

- 가장 큰 수
    - [https://programmers.co.kr/learn/courses/30/lessons/42746](https://programmers.co.kr/learn/courses/30/lessons/42746)
    
    ```jsx
    function solution(numbers) {
        let answer = numbers
    
        .map((n) => n + "")
        .sort((x, y) => (y + x) - (x + y))
        .join("");
    
        return answer.split(0).join("") ? answer : "0";
    }
    ```
    
- H-Index
    - [https://programmers.co.kr/learn/courses/30/lessons/42747](https://programmers.co.kr/learn/courses/30/lessons/42747)
    
    ```jsx
    function solution(citations) {
      let answer = 0;
    
      citations = citations.sort((x, y) => y - x);
      while (answer + 1 <= citations[answer]) answer++;
    
      return answer;
    }
    ```
    
- 입국심사
    - [https://programmers.co.kr/learn/courses/30/lessons/43238](https://programmers.co.kr/learn/courses/30/lessons/43238)
    
    ```jsx
    function solution(n, times) {
      let high = n * Math.max.apply(null, times);
      let low = 0;
      let mid, pass;
    
      while (low <= high) {
        mid = Math.floor((low + high) / 2);
        pass = times.reduce((sum, time) => (sum += Math.floor(mid / time)), 0);
        if (n <= pass) high = mid - 1;
        else low = mid + 1;
      }
      return low;
    }
    ```
