## 이상한 문자 만들기

[문제](https://programmers.co.kr/learn/courses/30/lessons/12930)

- 풀이

```jsx
function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      let result = "";
      for (let i = 0; i < word.length; i++) {
        if (i % 2) {
          result += word[i].toLowerCase();
        } else {
          result += word[i].toUpperCase();
        }
      }
      return result;
    })
    .join(" ");
}
```
