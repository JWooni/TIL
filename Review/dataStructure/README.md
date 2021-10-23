# 자료구조 복습

## 선형 자료구조

### 배열

- 여러 개체(Entity)값을 순차적으로 나열한 선형 자료구조
- 대표 속성(property)과 메서드(method)
    - 배열 크기 및 배열 여부 확인 : Array.length, Array.isArray()
    - 배열 추가 / 삭제 : Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array.unshift(), Array.splice() 등
    - 배열 탐색 : Array.indexOf(), Array.lastIndexOf(), Array.includes()
    - 배열 변형 : Array.sort(), Array.reverse(), Array.join()
    - 배열 반복 : Array.sort(), Array.forEach(), Array.map(), Array.find(), Array.filter(), Array.reduce()
    - 배열 논리 연산 : Array.some(), Array.every()

- 배열 기본 메서드
    - 배열 선언/접근/속성
        - 선언 : "new Array()" 혹은 "[]"를 통해 선언하며, 사이즈 혹은 값을 입력하여 초기화 가능
        - 접근방법 : "Array[index]"를 통해 index를 통하여 O(1) 접근
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
        
- 배열의 실체
    - 자바스크립트에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체
    - 메모리가 연속적인 밀집 배열(dense array)가 아닌 비연속적인 희소 배열(sparse array)
    
    ```jsx
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
    /* output:
    {
        '0': { value: 'one', writable: true, enumerable: true, configurable: true },
        '1': { value: 'two', writable: true, enumerable: true, configurable: true },
        length: { value: 2, writable: true, enumerable: false, configurable: false },
        once: { value: 'once', writable: true, enumerable: true, configurable: true },
        twice: { value: 'twice', writable: true, enumerable: true, configurable: true}
    }
    */
    ```
    
- 배열 타입 확인 및 요소 삭제
    - 배열 타입 확인
        - 배열 타입 확인 방법 : Array.isArray(value)
        
        ```jsx
        let num = 123.456;
        let str = "Here I am!";
        let fruits = ["apple", "orange", "melon"];
        
        console.log(Array.isArray(num)); // false
        console.log(Array.isArray(str)); // false
        console.log(Array.isArray(fruits)); // true
        ```
        
    - 배열 요소 삭제
        - 배열 일부 요소 삭제 : delete array[index] (삭제해도 배열 사이즈가 그대로인 문제점)
        
        ```jsx
        let fruits = ["apple", "orange", "melon"];
        console.log(fruits); // [ 'apple', 'orange', 'melon' ]
        console.log(fruits.length); // 3
        delete fruits[1];
        console.log(fruits); // [ 'apple', <1 empty item>, 'melon' ]
        console.log(fruits.length); // 3
        ```

- 배열 조작
    - 배열 추가/삭제(LIFO-Back)
        - 배열 추가 : Array.push(element)
        - 배열 삭제 : Array.pop()
        
        ```jsx
        let fruits = ["apple", "orange", "melon"];
        ret = fruits.push("watermelon");
        
        console.log(fruits); // [ 'apple', 'kiwi', 'melon', 'watermelon' ]
        console.log(ret); // 4
        
        ret = fruits.pop();
        console.log(fruits); // [ 'apple', 'kiwi', 'melon' ]
        console.log(ret); // watermelon
        ```
        
    
- 배열 추가/삭제(LIFO-Front)
    - 배열 추가 : Array.unshift(element)
    - 배열 삭제 : Array.shift()
    
    ```jsx
    let fruits = ["apple", "orange", "melon"];
    ret = fruits.shift();
    
    console.log(fruits); // [ 'orange', 'melon' ]
    console.log(ret); // apple
    
    ret = fruits.unshift("watermelon");
    console.log(fruits); // [ 'watermelon', 'orange', 'melon' ]
    console.log(ret); // 3
    ```
    
- 배열 삭제/변경(index)
    - 배열 요소 삭제/변경 : Array.splice(index[, deleteCount, elem1, ..., elemN])
    
    ```jsx
    let fruits = ["apple", "orange", "melon"];
    console.log(fruits.splice(1)); // [ 'orange', 'melon' ]
    console.log(fruits); // [ 'apple' ]
    
    fruits = ["apple", "orange", "melon", "strawberry"];
    console.log(fruits.splice(1, 1)); // [ 'orange' ]
    console.log(fruits); // [ 'apple', 'melon', 'strawberry' ]
    console.log(fruits.splice(1, 1, "mango", "kiwi")); // [ 'melon' ]
    console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'strawberry' ]
    ```
    
- 배열 삭제(index)
    - 배열 요소 삭제 : Array.slice([start], [end])

    ```jsx
    let fruits = ["apple", "orange", "melon"];

    console.log(fruits.slice(1)); // [ 'orange', 'melon' ]
    console.log(fruits); // [ 'apple', 'orange', 'melon' ]
    console.log(fruits.slice(1, 2)); // [ 'orange' ]
    console.log(fruits.slice(-2)); // [ 'orange', 'melon' ]
    ```

- 배열 병합
    - 다중 배열 병합 : Array.concat(arg1, arg2...)

    ```jsx
    let fruits = ["apple", "orange", "melon"];

    console.log(fruits.concat("strawberry")); // [ 'apple', 'orange', 'melon', 'strawberry' ]
    console.log(fruits.concat(["cherry", "banana"])); // [ 'apple', 'orange', 'melon', 'cherry', 'banana' ]
    console.log(fruits.concat(["cherry", "banana"], "mango")); // [ 'apple', 'orange', 'melon', 'cherry', 'banana', 'mango' ]
    ```
- 배열 반복문
    - 다양한 반복문 문법을 통해 배열 요소에 접근 가능
    - 반복문 문법 : for ... length(index 접근), for ... of (element 접근), for ... in (key 접근)

    ```jsx
    let fruits = ["apple", "orange", "melon"];
    // 1. use for (index)
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]); // apple, orange, melon
    }

    // 2. use for ...(element) of
    for (let fruit of fruits) {
        console.log(fruit); // apple, orange, melon
    }

    // 3. use for ...(key) in
    for (let key in fruits) {
        console.log(fruits[key]); // apple, orange, melon
    }
    ```
