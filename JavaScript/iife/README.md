# IIFE(즉시 실행 함수)

- 즉시 실행 함수(Immediately Invoked Function Expression)란 정의되자마자 즉각적으로 실행되는 자바스크립트 함수(Function)이다.
1. 괄호로 둘러쌓인 익명함수부분 스코프기반의 자바스크립트에서 전역스코프로 자바스크립트의 불필요한 변수를 만들지 않고 마찬가지로 안쪽으로 불필요한 변수들이 선언되는 것을 방지할 수 있도록 한다.
2. 함수를 실행할때 사용되는 ()괄호이다. 자바스크립트 엔진이 문법을 읽고 선언된 함수를 즉각적으로 실행하게 된다.
    - 즉시실행 함수를 변수에 할당할 때, 함수가 담기는 것이 아닌 return 값만 담게된다.

    ```jsx
    let result = (function () {
            let name = 'jwooni'; 
            return name; 
        })(); 
    // 즉시 결과를 생성한다.

    console.log(result); // 'jwooni'
    ```

    - 외부에서 접근 불가

    ```jsx
    (function () {
        	// 즉시실행함수의 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다.
        	let str = 'jwooni';
        })();
        
    console.log(str); // throws "Uncaught ReferenceError: str is not defined"
    ```
