# 자료형

## 자료형 종류

- 목적에 따라 특별한 성질이나 정해진 범주를 갖고 있는 데이터의 종류
- 자바스크립에서는 6가지의 원시 타입 자료형과 1가지의 객체 타입 자료형으로 구성
- 원시타입(primitive type)
    - Boolean : 논리적 값으로 true, false
    - null : 존재하지 않거나 유효하지 않은 주소 표시
    - undefined : 선언 후 값을 할당하지 않은 변수
    - number : 정수, 실수 등의 숫자, 정수의 한계는 ±253
    - string : 빈 문자열이나 글자들을 표현하는 문자열
    - symbol : 문자열과 함께 객체 property로 사용, ES6에 추가
- 객체타입(object type)
    - object : 두개 이상의 복잡한 개체 저장 가능
- typeof
 [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)
    - typeof는 인수의 자료형을 반환하는 연산자
    - 연산자인 typeof x와 함수인 typeof(x)로 문법 지원

    ```jsx
    let str = "hello world";
    console.log(typeof str);

    console.log(typeof undefined);
    console.log(typeof 123);
    console.log(typeof 456n);
    console.log(typeof 123.123);
    console.log(typeof true);
    console.log(typeof "hello");
    console.log(typeof Symbol("id"));
    console.log(typeof Math);
    console.log(typeof null);
    console.log(typeof console.log);
    ```

- boolean
    - boolean은 논리적인 값을 표현하는 자료형
    - 참인 true와 거짓인 false, 두 가지 값만 존재
    - 주로 조건문 등에서 동작 판단의 기준으로 사용

    ```jsx
    // boolean
    let name_check = true; // 네, name 입력이 확인되었습니다.
    let age_check = false; // 아니요, age 입력이 확인되지 않았습니다.
    let value_check = 10 > 3; // 비교 결과: 참 -> true
    console.log(value_check); // output: true
    ```

- null & undefined
    - null
        - null은 값이 비어 있다는 의미로 표현되는 자료형
        - 존재하지 않는(nothing), 비어 있는(empty), 알 수 없는(unknown) 값을 나타내는데 사용

        ```jsx
        console.log(typeof null); // output: object  하위 버전 호환성으로 object 표기
        const null_check = null;
        console.log(null_check === null); // output: true
        ```

    - undefined
        - undefined는 값이 할당되어 있지 않은 상태를 나타날 때 사용되는 자료형
        - 변수 선언 후 초기화 하지 않는다면, undefined가 자동으로 할당

        ```jsx
        // undefined
        let name; // 할당 후 초기화 하지 않음 
        console.log(name); // output: undefined
        ```

- number
    - number(숫자형)은 정수, 부동소수점(floating point) 숫자를 표현하는 자료형
    - number와 관련된 연산은 사칙연산(+, -, *, /)가 대표적
    - number에는 일반적인 숫자 외에 Infinity, -Infinity, NaN(Not a Number) 같은 특수 숫자 값이 포함
    - number에서는 25<sup>3</sup>−1보다 큰 값을 사용할 수 없으며, 더 큰 정수를 다루고 싶다면 bigint 자료형 사용 필요

    ```jsx
    let num_1 = 123.0;
    let num_2 = 123.456;
    let num_3 = 1 / 0;
    let num_4 = 123456n; // BigInt("123456")
    console.log(num_1 - num_2); // output: -0.45600000000000307
    console.log((num_1 - num_2).toFixed(3)); // output: -0.456
    console.log(num_3); // Infinity
    console.log(num_1 / "hello"); // NaN
    console.log(typeof num_4); // bigint
    ```

- string
    - string은 문자, 문자열을 표현하는 자료형
    - 자바스크립트에서 문자열은 3가지 종류의 따옴표로 표현 가능
        - 큰 따옴표 : "hello"
        - 작은 따옴표 : "hello"
        - 역 따옴표(백틱, backtick) : `hello`

        ```jsx
        let str_1 = "hello_1";
        let str_2 = 'hello_2';
        let num = 3;
        let str_3 = `hello_${num}`;
        console.log(str_1); // output: hello_1
        console.log(str_2); // output: hello_2
        console.log(str_3); // output: hello_3
        ```
