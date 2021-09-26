- Number 상수 값
    - 지수로 표기되는 양수 최대 / 최소 값 : Number.MAX_VALUE, Number.MIN_VALUE
    - 안전하게 표기되는 최대(양수) / 최소(음수) 값 : Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER
    - 무한대 양수 / 음수 값 : Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
    - 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석될 수 있는 숫자 데이터 유형 : Number.NaN

    ```jsx
    /* 형 변환 (Type casting) */
    console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
    console.log(Number.MIN_VALUE); // 5e-324
    console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
    console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
    console.log(Number.POSITIVE_INFINITY); // Infinity
    console.log(Number.NEGATIVE_INFINITY); // -Infinity
    console.log(Number.NaN); // NaN
    console.log(NaN); // NaN
    ```

    ## 대표 메서드

    - 형 변환
        - Number to String : Number.toString(), String(Number), Number+""를 통해 변환 가능

        ```jsx
        /* 형 변환 (Type casting) */
        let us = 1e-6; // micro sec, 왼쪽으로 6번 소수점 이동
        console.log(us.toString()); // 0.000001
        console.log(typeof us.toString()); // string
        console.log(typeof String(us)); // string
        console.log(typeof (us + "")); // string
        ```

    - 자리 수 표현
        - 소수의 자리 수 길이를 제한 : Number.toFixed(pos)
        - 정수와 소수의 자리 수를 합한 길이로 제한 : Number.toPrecision(pos)

        ```jsx
        /* 자리 수 표현 */
        let num_1 = 125.0; let num_2 = 123.456;
        console.log(num_1 - num_2); // 1.543999999999997
        console.log((num_1 - num_2).toFixed(3)); // 1.544
        console.log((num_1 - num_2).toPrecision(3)); // 1.54
        ```

    - Number 자료형 확인
        - 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값(NaN)인지 확인 : Number.isNan()
        - 정상적인 유한수인지 확인 : Number.isFinite()

        ```jsx
        /* Number 자료형 확인 */
        console.log(!Number.isNaN(0.123)); // true
        console.log(!Number.isNaN(123 / "hello")); // false
        console.log(Number.isFinite(-123)); // true
        console.log(Number.isFinite(Infinity)); // true
        console.log(Number.isFinite("hello")); // false
        ```

    - 정수와 실수 형 변환
        - 정수로 변환하는 방법(N진수로 명시적 변환도 가능) : Number.ParseInt()
        - 실수로 변환하는 방법 : parseFloat()

        ```jsx
        /* 정수와 실수 형 변환 */
        console.log(Number.parseInt("125px")); // 125
        console.log(Number.parseFloat("1.25em")); // 1.25
        console.log(Number.parseInt("1.25em")); // 1
        console.log(Number.parseInt("t123")); // NaN
        console.log(Number.parseInt("0f", 16)); // 15
        ```

    # String

    - 텍스트 길이에 상관없이 문자열 형태로 저장되는 자료형
    - 자바스크립트에서는 글자 하나만 저장할 수 있는 char 자료형이 없음
    - 자바스크립트에서 문자열은 페이지 인코딩 방식과 상관없이 항상 UTF-16 형식을 따름
    - 대표 속성과 메서드
        - 문자열 길이 : String.length
        - 문자열 접근 : String.charAt(index), String.charCodeAt(index)
        - 문자열 검색 : String.indexOf(), String.lastIndexOf(), String.includes(), String.startsWith() 등
        - 문자열 변환 : String.toUpperCase(), String.toLowerCase()
        - 문자열 치환 : String.replace()
        - 문자열 추출 : String.slice(), String.substring(), String.substr()
        - 문자열 분할 : String.split()

    ## 문자 정의 / 표기

    - 정의 방법
        - String 정의 방법 : "hello"(큰 따옴표), 'hello'(작은 따옴표), String()
        - 문자열과 변수 혼합 표현 방법 : `Hello`(역 따옴표)

    ```jsx
    let str_1 = "hello_1", str_2 = String("Hello_2"); 
    let num = 3, str_3 = `hello_${num}`;

    console.log(str_1); // hello_1
    console.log(str_2); // hello_2
    console.log(str_3); // hello_3
    console.log(`hello_${2 * 2}`); // hello_4
    ```

    - 문자 표기
        - 다양한 문자 표기 방법 : Line feed(\n), Carriage return(\r), Backslach(\\), Tab(\t), Unicode(\u{})

    ```jsx
    // 문자 표기
    console.log("line\nfeed"); // line <newline> feed
    console.log("carriage\rreturn"); // carriage <newline> return
    console.log("backslash \\"); // backslash \
    console.log("tab\ttab"); // tab tab
    console.log("smile: \u{1F60D}"); // smile: 😍
    ```

    ## 문자열 길이 / 접근

    - 문자열 길이
        - 문자열 길이 확인 방법 : String.length

    ```jsx
    // 문자열 길이
    let str = `hello world!!!`;
    let newline_string = "hello\nworld\n!!!"; 
    console.log(str.length); // 15
    console.log(newline_string.length); // 15
    ```

    - 문자 접근
        - 문자열 내 개별 문자 접근 방법 : String.charAt(index), String.charCodeAt(index), String[index]

    ```jsx
    // 문자열 내 개별 문자 접근
    let str = "hello, world!!!";
    console.log(str.charAt(1)); // e
    console.log(str.charCodeAt(1)); // 101
    console.log(str[0]); // h
    ```

    ## 문자열 검색 / 변환

    - 문자열 검색
        - 문자열 검색(index) : String.indexOf(substr, pos), String.lastIndexOf(substr, pos)
        - 문자열 검색(bool) : String.includes(substr, pos), String.startsWith(substr, pos), String.endsWith(substr, pos)

    ```jsx
    // 문자열 검색
    let text = "hello, world!!!";
    console.log(text.indexOf("l")); // 2
    console.log(text.indexOf("l", 3)); // 3
    console.log(text.lastIndexOf("l")); // 10
    console.log(text.includes("HeLlo")); // false
    console.log(text.startsWith("ello", 1)); // true
    console.log(text.endsWith("world")); // false
    ```

    - 문자열 대소문자 변환
        - 대소문자 변환 : String.toUpperCase(), StringLowerCase()

    ```jsx
    // 문자열 대소문자 변환
    let str = "HeLlO!!";
    console.log(str.toUpperCase()); // HELLO!! 
    console.log(str.toLowerCase()); // hello!!0
    ```

    ## 문자열 변환

    ### 문자열 치환

    - 처음 만나는 요소 문자열 치환(치환된 문자열 반환) : String.repalce(origin_str, change_str)
    - 정규 표현식 활용 문자열 치환 : 치환 문자열에 졍규 표현식 기입 → /치환문자열/g(전체)i(대소문자 구분 X)

    ```jsx
    // 문자열 치환
    let text = "helLo, world!!!"; let changed_text = "";
    changed_text = text.replace("world", "earth");
    console.log(changed_text); // helLo, earth!!!
    console.log(text); // helLo, world!!!
    console.log(text.replace("!", "?")); // helLo, world?!!
    console.log(text.replace("l", "i")); // heiLo, world!!!
    console.log(text.replace(/l/g, "i")); // heiLo, worid!!!
    console.log(text.replace(/l/gi, "i")); // heiio, worid!!!
    ```

    ## 문자열 추출

    - 위치 기반 문자열 추출 : String.slice(start, end), String.substring(start, end)
    - 길이 기반 문자열 추출 : String.substr(start, length)

    ```jsx
    // 문자열 추출
    let text = "hello, world!!!";

    console.log(text.slice(0, 5)); // hello
    console.log(text.slice(4, 5)); // o
    console.log(text.slice(4)); // o, world!!!
    console.log(text.slice(-4)); // d!!!

    // substring: end > start -> start > end
    console.log(text.slice(2, 6)); // llo,
    console.log(text.slice(6, 2)); // output:
    console.log(text.substring(2, 6)); // llo,
    console.log(text.substring(6, 2)); // llo,

    console.log(text.substr(2, 6)); // llo, w
    console.log(text.substr(-5, 3)); // ld!
    ```

    ## 문자열 분할

    - 배열로 문자열 분할 : String.split(Separator, limit)

    ```jsx
    // 문자열 분할
    let fruits = "apple banana melon"; 

    result = fruits.split(" ");

    console.log(result); // [ 'apple', 'banana', 'melon' ]
    console.log(result[0]); // apple
    console.log(result[1]); // banana
    console.log(result[2]); // melon

    let text = "hello"; 
    result = text.split("");
    console.log(result); // [ 'h', 'e', 'l', 'l', 'o' ]
    console.log(result.length); // 5
    console.log(result[0]); // h

    result = text.split("", 3);
    console.log(result); // [ 'h', 'e', 'l' ] 
    console.log(result.length); // 3
    ```

    ---

    # 배열

    - 여러 개체(Entity)값을 순차적으로 나열한 자료 구조(알고리즘 내 사용 빈도 많음)
    - 배열 내 값을 요소(element)라고 하며, 배열 요소는 index로 접근
    - 대표 속성과 메서드
        - 배열 크기 및 배열 여부 확인 : Array.length, Array.isArray()
        - 배열 추가 / 삭제 : Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array,splice(), Array.slice() 등
        - 배열 탐색 : Array.indexOf(), Array.lastIndexOf(), Array.includes()
        - 배열 변형 : Array.sort(), Array.reverse(), Array.join()

    ## 배열 선언 / 접근 / 속성

    - 선언 : "new Array()" 혹은 "[]"를 통해 선언하며, 사이즈 혹은 값을 입력하여 초기화도 가능
    - 접근 방법 : "Array[index]"를 통해 index를 통하여 0(1) 접근
    - 배열 속성 : "Array.length"를 통해 배열 요소의 개수 확인 가능

    ```jsx
    let arr_1 = new Array(10); 
    let arr_2 = [];
    console.log(arr_1); // [ <10 empty items> ] 
    console.log(arr_2); // []

    let fruits = ["apple", "orange", "melon"];
    console.log(fruits); // [ 'apple', 'orange', 'melon' ]
    console.log(fruits.length); // 3
    console.log(fruits[0]); // apple
    console.log(fruits[1]); // orange
    console.log(fruits[2]); // melon

    fruits[1] = "kiwi";
    console.log(fruits); // [ 'apple', 'kiwi', 'melon' ]
    ```

## 배열의 실체

- 자바스크립에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체
- 메모리가 연속적인 밀집 배열(dense array)이 아닌 비 연속적인 희소 배열(sparse array)

```jsx
// 배열의 실체
let nums = []; 
nums.push("one"); 
nums.push("two");
console.log(nums.length); // 2 
console.log(nums); // [ 'one', 'two' ]

nums["once"] = "once"; 
nums["twice"] = "twice";
console.log(nums.length); // 2
console.log(nums); // [ 'one', 'two', once: 'once', twice: 'twice' ]
console.log(Object.getOwnPropertyDescriptors(nums));
```

## 배열 타입 확인 및 요소 삭제

- 배열 타입 확인
    - 배열 타입 확인 방법 : Array.isArray(value)

```jsx
// 배열 타입 확인
let num = 123.456;
let str = "Here I am!";
let fruits = ["apple", "orange", "melon"];
console.log(Array.isArray(num)); // false
console.log(Array.isArray(str)); // false
```

- 배열 요소 삭제
    - 배열 일부 요소 삭제 : delete array[index] (삭제해도 배열 사이즈가 그대로인 문제점)

```jsx
// 배열 요소 삭제
let fruits = ["apple", "orange", "melon"];
console.log(fruits); // [ 'apple', 'orange', 'melon' ] 
console.log(fruits.length); // 3

delete fruits[1];
console.log(fruits); // [ 'apple', <1 empty item>, 'melon' ] 
console.log(fruits.length); // 3
```

## 배열 조작

- 배열 추가 / 삭제 (LIFO-Back)
    - 배열 추가 : Array.push(element), 배열 삭제 : Array.pop()

```jsx
let fruits = ["apple", "orange", "melon"]; 
ret = fruits.push("watermelon");
console.log(fruits); // [ 'apple', 'kiwi', 'melon', 'watermelon' ] 
console.log(ret); // 4
ret = fruits.pop();
console.log(fruits); // [ 'apple', 'kiwi', 'melon' ] 
console.log(ret); // watermelon
```

- 배열 추가 / 삭제 (LIFO-Front)
    - 배열 추가 : Array.unshift(element), 배열 삭제 : Array.shift()

```jsx
// 배열 추가 / 삭제 (LIFO-Front)
let fruits = ["apple", "orange", "melon"]; 

ret = fruits.shift();
console.log(fruits); // [ 'orange', 'melon' ] 
console.log(ret); // apple
ret = fruits.unshift("watermelon");
console.log(fruits); // [ 'watermelon', 'orange', 'melon' ] 
console.log(ret); // 3
```

- 배열 삭제 / 변경 (index)
    - 배열 요소 삭제 / 변경 : Array.splice(index[, deleteCount, elem1, ..., elemN])

```jsx
// 배열 삭제 / 변경 (index)
let fruits = ["apple", "orange", "melon"];

console.log(fruits.splice(1)); // [ 'orange', 'melon' ] 
console.log(fruits); // [ 'apple' ]
fruits = ["apple", "orange", "melon", "strawberry"];
console.log(fruits.splice(1, 1)); // [ 'orange' ]
console.log(fruits); // [ 'apple', 'melon', 'strawberry' ]
console.log(fruits.splice(1, 1, "mango", "kiwi")); // [ 'melon' ]
console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'strawberry' ]
```

- 배열 삭제 (index)
    - 배열 요소 삭제 : Array.slice([start], [end])

```jsx
// 배열 삭제 (index)
let fruits = ["apple", "orange", "melon"];
console.log(fruits.slice(1)); // [ 'orange', 'melon' ]
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.slice(1, 2)); // [ 'orange' ]
console.log(fruits.slice(-2)); // [ 'orange', 'melon' ]
```

- 배열 병합
    - 다중 배열 병합 : Array.concat(arg1, arg2, ...)

```jsx
// 배열 병합
// 다중 배열 병합
let fruits = ["apple", "orange", "melon"]; 
console.log(fruits.concat("strawberry")); // [ 'apple', 'orange', 'melon', 'strawberry' ] 
console.log(fruits.concat(["cherry", "banana"])); // [ 'apple', 'orange', 'melon', 'cherry', 'banana' ] 
console.log(fruits.concat(["cherry", "banana"], "mango")); // [ 'apple', 'orange', 'melon', 'cherry', 'banana', 'mango' ]
```

## 배열 반복문

- 다양한 반복문 문법을 통해 배열 요소에 접근 가능
- 반복문 문법 : for ... length(index접근), for ... of (element 접근), for ... in (key 접근)

```jsx
// 배열 반복문
let fruits = ["apple", "orange", "melon"]; 

// 1. use for (index)
// apple, orange, melon
for (let i = 0; i < fruits.length; i++) { 
	console.log(fruits[i]);
}

// 2. use for ...(element) of 
// apple, orange, melon 
for (let fruit of fruits) {
	console.log(fruit); 
}

// 3. use for ...(key) in
// apple, orange, melon 
for (let key in fruits) {
	console.log(fruits[key]); 
}
```

## 배열 탐색 / 변형

### 배열 탐색

- index 탐색(앞에서 부터) : Array.indexOf(item, from)
- index 탐색(뒤에서 부터) : Array.lastIndexOf(item, from)
- 값 포함 여부 확인 : Array.includes(item, from)

```jsx
// 배열 탐색
let fruits = ["apple", "orange", "banana", "orange", "melon"];
console.log(fruits.indexOf("orange")); // 1
console.log(fruits.indexOf("Orange")); // -1
console.log(fruits.indexOf("orange", 2)); // 3
console.log(fruits.lastIndexOf("orange")); // 3
console.log(fruits.lastIndexOf("orange", -3)); // 1
console.log(fruits.lastIndexOf("orange", 0)); // -1
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("Banana")); // false
console.log(fruits.includes(0)); // false
```

### 배열 변형

- 배열 정렬 / 반전
    - 배열 정렬 : Array.sort()
    - 배열 반전 : Array.reverse()

```jsx
// 배열 변형
// 배열 정렬 / 반전
let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort()); // [ -1, 0, 1, 2, 4, 5 ] 
console.log(nums.reverse()); // [ 5, 4, 2, 1, 0, -1 ]

let fruits = ["apple", "orange", "banana", "melon"];
console.log(fruits.sort()); // [ 'apple', 'banana', 'melon', 'orange' ] 
console.log(fruits.reverse()); // [ 'orange', 'melon', 'banana', 'apple' ]
```

- 배열 변환
    - 배열 값을 문자열로 변환 : Array.join(separator)

```jsx
// 배열 변환
let fruits = ["apple", "orange", "banana", "melon"]; 
let str = fruits.join();

console.log(str); // apple,orange,banana,melon 

let str_separator = fruits.join(";");
console.log(str_separator); // apple;orange;banana;melon 

let result = str_separator.split(";");
console.log(result); // [ 'apple', 'orange', 'banana', 'melon' ]
```
