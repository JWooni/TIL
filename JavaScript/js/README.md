# **JavaScript 개요**

- 1996년 brendan Eich(브랜던 아이크)가 개발 발표한 Script 언어
- 객체기반언어 : 프로그래머가 생성하기 보다 생성된 객체들을 주고 사용하는 언어
- 동적인 데이터형 ( 값이 할당될때 데이터형이 정해지는 데이터형)
    - 개발자가 데이터형을 사용하지 않는다.
- 대수문자를 구별
- ;을 사용하지 않아도 된다.
- Script 언어 종류
    - VB Script : VB기반
    - JavaScript : C개발
- C언어로 만들어진 언어
- HTML에 정의하여 사용하는 언어
- Mocha -> Live Script -> JavaScript
- inline, embed, external File 방식으로 사용할 수 있다.
- 줄단위로 실행하여 Error가 발상하게 된다.
- library가 많이 개발되어 있다. (JQuery, Node.js, Angular js, vue.js,,,)
- ECMA Script 262 Edition 6.
- 최상위 객체 window (생략가능)
    - window
        - document
        - history
        - location
- 모두 문자열

```html
- <body> 태그 안 출력
     window.document.write("출력할 내용");

   - 경고창 출력
     alert("출력할 내용")    //코드의 실행을 멈춘다.

    - console 출력 : 출력을 숨겨서 하거나 debugging 할 때
     console.log("메세지")
```

- **inline 방식**
    - 태그에 넣어 작성하는 방식.
    - 우선순위가 가장 높다.
    - 코드 중복성이 가장높다.
    - <태그명 on[Xxx]="코드">      // on뒤에 오는 것은 다양하다.
- **embed 방식**
    - html에 정의하는 방식

```html
<html>
     <head>
        <title> 타이틀 </title>
        <script type="text/javascript">
            코드작성
        </script>
    </head>
    <body>
     .
     .
    </body>
    </html>
```

- **external file 방식**
    - 파일을 따로 정의하여 작성하는 방식
    - js 파일을 생성하고 코드를 정의하는 방식.
    - 필요한 HTML에서 <script type='text/javascript' src="jsurl"></script>
    - JQuery 등 외부라이브러리를 사용할 때 많이 사용.

# **기본문법**

- 변수
- 연산자
- 제어문 (if, else, switch ~ case, for, while, do, break, continue, return)
- 함수 (사용자정의 함수, 제작사함수), 함수 호출, 유효성 검증, popup, location, history, localStorage, sessionStorage, canvas
