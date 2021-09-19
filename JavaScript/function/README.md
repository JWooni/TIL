# **함수**
   - 일을 구분하여 작성할 때
    - 코드의 중복을 줄일 수 있다.
    - 호출하여 사용(사용자 동작)
    - 제작사 함수, 사용자정의 함수
        - 제작사 함수 : W3C
        - 사용자정의 함수 : 개발자 생성
    - 작성법

    ```jsx
    - 반환형이 없다. (정의하지 않는다.)
        function 함수명(매개변수,,,){        // 매개변수는 전역형태 : var 붙이지 않는다.

        }

    - 호출
     <script> 영역호출
        함수명(값,,,);
      <body>에서 사용자의 동작에 의한 호출
         - 속성 : onXxx 함수명 (값,,,);
    ```

# **기명함수, 무기명함수**

 - 기명함수 : 이름이 있는 함수
        - 업무를 구분하여 처리할 때
        - 사용법

  ```jsx
  function 함수명(매개변수,,,){
  }
  ```

 - 무기명함수 : 이름이 없는 함수
     - 변수명으로 함수에 접근
     - 변수명(값,,,);
     - 사용법

        ```jsx
        let 변수명 = function(매개변수,,,){

        }
        ```

    - 속성
        - 속성이 동작하면 코드가 동시에 실행되어져야 한다.
        - 자동호출된다.

        ```jsx
        window.onload = function( ){

        }
        ```

        # **무기명함수 이벤트 처리**

    - 태그 하나를 얻어와서 태그 하나에 이벤트를 처리.
    - 이베트처리 코드의 재사용성이 낮다.
        - 문법

        ```jsx
        window.document.getElementById("id명").이벤트처리속성 = function(){

                이벤트가 발생했을 때 처리할 코드    

            }
            <input type="button" value="클릭" id="id명"/>
        ```

    # **태그를 얻는 함수**

    - name으로 얻기 : 값의 유효성검증
        - <form> : 반드시 필요
            - HTML Form Controll의 값을 back - end로 전송할 때 사용
            - 문법

            ```jsx
            window.document.폼이름.컨트롤명
            ```

    - id로 얻기 : HTML 특정부분의 디자인을 전송할때 (AJAX에서 DOM으로 디자인 변경할 때)
        - <form> : 필요없다.

        ```jsx
        window.document.getElementById("id명")
        ```

    - tag명으로 얻기
        - document.getElementByTagName("태그명")
        - 같은 태그가 여럿존재하기 때문에 특정태그에 접근하기 어렵다.

# ****이벤트를 Listener에 등록하여 처리****

- 이벤트처리 코드의 재사용성이 높아진다.
- 문법

```jsx
window.document.getElementById("id명").addEventListener("이벤트",함수명);  // on을 빼고 사용한다. ex) onclick => click

<script type = "text/javaScript>
    function 함수명(){
        
        이벤트처리 코드 정의

    }
    
    document.getElementById("id명").addEventListener("click", 함수명);

</script>

    <body>
        <input type="text" id="id명"/>

    </body>
```

# **HTML Form Control 값 얻기**

- name 속성

```jsx
- <form> 존재.
        - HTML 형상
        <form name="이름">
        - <input type="text" name="유일">
        - <input type="radio".checkbox">

    - 이름이 유일한 객체의 값 얻기
        window.document.폼이름.컨트롤명.value
            <script type="text/javaScript">
            window onload=function(){
                document.getElementById("btn").addEventListener("click",getValue);

    function getValue(){                                // var obj = document.form;
        let name = document.form.name.value;            // var name = obj.name.value;
        let addr = document.form.addr.value;            // var addr = obj.addr.value;
		}
```

- id로 얻기 (<form> x )

```jsx
let name = document.getElementById("id명").value;
let addr = document.getElementById("id명").value;
```

- 값을 하나 얻기

```html
<input type="text" password file "hidden" checkbox>    // 체크박스 하나만 사용
```

- 값이 여러개 나오는 경우 : 배열로 처리

```html
- checkboc, radio, select

    <input type = "checkbox" value="전송할값" name="[]"> 0

    - 문법   
     document.폼이름.컨트롤명[인덱스].value // 값얻기
                                   .checkbox // 선택상태얻기
```

- 선택된 모든 값 얻기

```jsx
1.
    for(var i = 0; i < document.폼이름.컨트롤명.length; i++){
        if(document.폼이름.컨트롤명[i].checked){
           document.폼이름.컨트롤명[i].value;
        } // end if

    } // end for
  
2. 
    var obj = document.폼이름;
    for(var i = 0; i < obj.컨트롤명.length; i++){
        if(obj.컨트롤명[i].checked){
           obj.컨트롤명[i].value;
        } // end if
    } // end for
```

- 선택된 값 하나를 얻기

```html
1.
    <select name="">
       <option value="값"> 보여줄 값 </option>

    </select>

2. 간단하게
    document.폼이름.컨트롤명.value
```

- 배열
    - select의 name 속성은 하나이나 옵션이 여러개이므로 배열로 처리할 수 있다.

```jsx
let obj = document.폼이름;

    for(var i = 0; i < obj.컨트롤명.length; i++){
        if(obj.컨트롤명[i].selected){
            obj.컨트롤명[i].value;
        }
    }
```

- JavaScript의 값을 HTML Form Control 설정
    - name 속성이 유일한 경우
        - document.폼이름.control명.value = 값;
    - checked 속성변경
        - document.폼이름.control명[인덱스].checked = true/false;
    - selected 속성변경
        - document.폼이름.control명[인덱스].selected = true/false;

# JavaScript에서 HTML <body>로 출력

```jsx
1. 출력 대상얻기
        let divNode = document.getElementById("div tag id명");

    2. HTML 생성
        let output = "<strong>ooo</strong>;

    3. 출력
        divNode.innerHTML=output;
```
