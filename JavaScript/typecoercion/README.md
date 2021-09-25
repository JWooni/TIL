# 형 변환

- 자바스크립트는 느슨한 타입 언어 혹은  동적 타입 언어로 변수의 자료형을 명시적으로 선언할 필요가 없는 언어
- 연산자로 인한 계산이나 변수에 전달되는 값은 자동으로 암묵적 형 변환 수행
- 강제적 형 변환을 위해서는 자료형 함수를 이용해 명시적 형 변환 수행

```jsx
console.log(String(123));
console.log(String(1 / 0));
console.log(String(-1 / 0));
console.log(String(Nan));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));
```

- Number
    - Number는 정수와 실수를 모두 포함하는 자료형 변환이므로, 정수 혹은 실수의 명시적 변환은 parse 함수
    - 정수 변환 : parseInt(피연산자), 실수 변환 : parseFloat(피연산자)

    ```jsx
    // Number
    console.log(Number("")); 
    console.log(Number("123")); 
    console.log(Number("hello")); 
    console.log(Number("123hello")); 
    console.log(Number(true)); 
    console.log(Number(false));
    console.log(Number(null));
    console.log(Number(undefined));
    ```

- Boolean

```jsx
// Boolean
console.log(Boolean(""));  
console.log(Boolean("123")); 
console.log(Boolean("hello"));  
console.log(Boolean("0"));
console.log(Boolean(0));  
console.log(Boolean(123));  
console.log(Boolean(NaN));
console.log(Boolean(null)); 
console.log(Boolean(undefined));
```
