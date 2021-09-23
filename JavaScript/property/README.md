# property

- Property는 속성 이란 뜻으로, JavaScript에서는 객체 내부의 속성을 의미한다.
- Property의 속성
    - value
        - value는 일단 프로퍼티의 속성값을 말한다.
        - value는 단지 값을 의미할뿐 다른 기능은 없다.
        - value에 대한 접근 권한자를 설정하기 위해서 Enumerable, Writable, Configurable를 이용할 수 있다.
    - get & set
        - get & set 은 ES6에서 부터 나오기 시작한 문법으로 객체의 속성값에 대한 접근 권한자 역할을 할 수 있다.
        - get & set 자체로 writable의 역할을 가지고 있기 때문에 get & set 과 wriatable 속성을 함께 줄 수 없다.
    - enumerable
        - true이면 반복문을 사용해 나열할 수 있다. 그렇지 않다면 반복문을 사용해 나열할 수 없다.

        ```jsx
        let ob = {a:1, b:2};

        ob.c = 3;

        Object.defineProperty(ob, 'd', {
          value: 4,
          enumerable : false
        });

        // enumerable속성은 조회가능여부와 엄연히 다르다.
        ob.d; // => 4

        // enumerable속성은 열거가능여부와 관련이 있다.
        for( let key in ob ) console.log( ob[key] );
        // Console will print out
        // 1, 2, 3

        Object.keys( ob );  // => ["a", "b", "c"]

        JSON.stringify( ob ); // => "{a:1,b:2,c:3}"

        // enumerable속성은 조회가능여부와 엄연히 다르다.
        ob.d; // => 4
        ```

    - writable
        - true이면 값을 수정할 수 있다. 그렇지 않다면 읽기만 가능하다.
        - 원시 속성

        ```jsx
        let ob = {a: 1};
        Object.defineProperty( ob, 'B', {value: 2, writable:false} );

        ob.B = 6; // => 6
        ob.B = 1000; // => 1000

        // Wriatable속성은 값을 수정하는 것과 관련이 있다.
        ob.B; // => 2;

        function updateB(){
          'use strict';
          ob.B = 4; // Error
        }
        updateB(); // Error
        ```

        - 참소 속성

        ```jsx
        let ob = {a: 1};
        Object.defineProperty( ob, 'OB', {value: {c:3}, writable:false} );

        // Wriatable속성을 Object에 줬다면 객체 내부 수정은 가능하다.
        ob.OB.c = 4;
        ob.OB.d = 5;
        ob.OB; // => {c:4, d:5}

        // Wriatable속성을 Object에 줬다면 객체의 변경은 되지 않는다.
        ob.OB = 'hola';
        ob.OB; // => {c:4, d:5}
        ```

    - configurable
        - true이면 프로퍼티 삭제나 플래그 수정이 가능하다. 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능하다.

        ```jsx
        let ob = {};
        Object.defineProperty(ob, 'a', { configurable:false, writable:true });

        // throws a TypeError (이미 정의된 객체의 속성을 변경할 수 없다.)
        Object.defineProperty(ob, 'a', { enumerable: true });

        // throws a TypeError (이미 정의된 객체의 속성을 변경할 수 없다.)
        Object.defineProperty(ob, 'a', { value: 12 });  

        // This is allowed!!! (이부분만 가능하다. 수정가능 > 수정불가)     
        Object.defineProperty(ob, 'a', { writable: false });  

        // throws a TypeError (수정불가가 된 후로는 처리할 수 있다.)
        Object.defineProperty(ob, 'a', { writable: true });
        ```
