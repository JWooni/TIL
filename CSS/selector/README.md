# 선택자(셀렉터)

CSS 선택자는 CSS 규칙을 적용할 요소를 정의한다.

## 선택자의 종류

1. 타입 선택자

```css
/* Type Selector */
h2 {
    color: purple;
}
```

1. ID 선택자

`id` 특성에 따라 요소를 선택한다. 주어진 ID를 가진 요소가 하나만 존재해야 한다.

```css
/* ID Selector */
#welcome-title {
    color: red;
}
```

1. Class 선택자

주어진 class 특성을 가진 모든 요소를 선택한다.

```css
/* Class Selector */
.blue {
    color: blue;
}
```

1. 속성 선택자

주어진 특성을 가진 모든 요소를 선택한다.

```css
/* Attribute Selector (속성 선택자)*/
/* 1. [attr] */
a[target] {
    color: hotpink;
}

/* 2. [attr=value] */
a[href="https://example.org"] {
    color: indigo;
}

input[type="submit"] {
    background-color: green;
}

/* 3. attr[^=value] */
a[href^="https://"] {
    font-style: italic;
}

/* 4. [attr$=value]  */
a[href$=".com"] {
    color: silver;
}

/* 5. [attr*=vlaue] */
a[href*="example"] {
    color: sienna;
}
```

1. 가장 클래스 선택자
- :first-child

    :first-child 클래스는 형제 요소 중 제일 첫 요소를 나타낸다.

    ```css
    li:first-child {
        color: green;
    }
    ```

- :last-child

    :last-child 클래스는 형제 요소 그룹 중 마지막 요소를 나타낸다.

    ```css
    span:last-child {
        color: tomato;
    }
    ```

- :nth-child()

    :nth-child() 클래스는 형제 사이에서의 순서에 따라 요소를 선택한다.

    ```css
    li:nth-child(3) {
        color: hotpink;
    }
    ```

- :first-of-type

    :first-of-type 클래스는 형제 요소 중 자신의 유형과 일치하는 제일 첫 요소를 나타낸다.

    ```css
    p:first-of-type {
        color: red;
    }
    ```

- :last-of-type

    :last-of-type 클래스는 형제 요소 그룹 중 해당 유형의 마지막 요소를 나타낸다.

    ```css
    p:last-of-type {
        color: blue;
    }
    ```

- :nth-last-of-type()

    :nth-last-of-type() 클래스는 형제 자매의 그룹 사이에서 자신의 위치를 기반으로 지정된 유형 (태그 이름)의 요소를 선택한다.

    ```css
    p:nth-of-type(even) {
        color: blue;
    }
    ```

- :not()

    :not(X)는 인수로 간단한 선택자(selector) X를 취하는 기능 표기법이다. 인수로 표시되지 않은 요소와 일치한다.

    ```css
    input:not(.pw) {
        background-color: indianred;
    }
    ```
- :link : 방문 전 링크 상태
    - 링크를 가진 a요소에 적용한다. (href="" 가 없는 a는 적용되지 않는다.)

    ```css
    a:link {
    	color: red;
    }
    ```

- :visited : 방문 후 링크 상태
- :hover : 마우스 오버 했을 때 적용한다. 링크 뿐만 아니라 모든 요소에 적용할 수 있다.
- :active : 마우스를 클릭했을 때 상태
- 스타일 적용 순서 : link → visited → hover → active 순 (순서대로 하지 않을 경우, 제대로 적용이 안 될 수 있음)

- :checked : 체크 상태의 `input` 태그를 선택
- :focus : `<input>` 같은 요소에 커서 위치해 선택된 동안의 스타일 지정
- :enabled : 사용 가능한 `input` 태그를 선택
- :disabled : 사용 불가능한 `input` 태그를 선택

### 가상 요소 선택자

1. ```::before``` , ```::after```
    - 내용의 일부만 선택해 스타일을 적용할 때 사용
    - 가상 클래스와 구별하기 위해 클래스 이름 앞에 콜론 두개(::)를 붙여 표시한다.
        - 콜론 하나를 붙여도 브라우저에서는 가상 요소로 인식하지만, 웹 브라우저 익스플로러에서는 인식이 되지 않을 수 있다.
    - 가상 요소는 인라인 요소이므로, 특정 영역을 갖기 위해서는 css에서 ```display: block;``` 을 사용한다.
    - ::before, ::after가 필요한 경우
        - 홈페이니 헤더나 푸터에 구분선을 삽입할 때
            - 로그인 | 회원가입 | 마이페이지 ...
    - 특정 요소의 앞(```::before``` )이나 뒤(```::after``` )에 지정한 내용(text or image)를 추가할 수 있다.
    - content 속성을 반드시 작성해주어야 한다. before와 after와 함께 쓰이는 가짜 속성이다.
        - normal : 아무 것도 표시하지 않는 기본값
        - string : 문자열 생성
        - image : 이미지나 비디오를 불러올 수 있으나, 크기 조절 불가능
        - none: 아무것도 표시 안 함
        - attr : 해당 속성의 속성값 표시

2. ```first-letter``` , `first-line` , `selection`
    - `first-letter` : 요소의 첫 번째 문자를 선택하는 선택자이며, 블록 요소에만 적용할 수 있다.
    - `first-line` : 지정요소의 첫 번째 줄 선택
    - `selection` : 요소 내에서 사용자가 더블클릭 또는 드래그해서 선택한 부분을 의미
        - ::selection 선택자엔 아래 4가지 속성만 사용 가능.
            - color, background, cursor, outline
            
## 선택자 결합

CSS 선택자는 하나 이상의 선택자를 포함할 수 있다. 결합 선택자는 연관된 선택자들 간의 관계를 설정해 준다.

- 하위 선택자

하위 선택자는 해당 요소의 하위 요소 중에서 특정 타입의 요소를 모두 선택한다.

```css
ul li:last-of-type {
    color: red;
}
```

- 자식 선택자

자식 선택자는 해당 요소의 바로 밑에 존재하는 하위 요소 중에서 특정 타입의 요소를 모두 선택한다.

```css
/* 자식 선택자 */
#list > li:last-of-type {
    color: red;
}
```

- 형제 선택자

행제 선택자는 형제 관계에 있는 요소 중에서 해당 요소보다 뒤에 존재하는 특정 타입의 요소를 모두 선택한다.

 - 일반 형제 선택자 결합 ( ~ )

일반 형제 선택자는 해당 요소와 형제 관계에 있으며, 해당 요소보다 뒤에 존재하는 특정 타입의 요소를 모두 선택한다.

```css
code ~ p {
    color: red;
} 
```

 - 인접 형제 선택자 결합 ( + )

영어로 adjacent는 인접한, 가까운 이라는 의미가 있다. 인접 형제 선택자는 해당 요소와 형제 관계에 있으며, 해당 요소의 바로 뒤에 존재하는 특정 타입의 요소를 모두 선택한다.

```css
code + p {
    color: blue;
}
```

- 그룹화
```
p, span {
    color: purple;
}
```	    


## 범용 선택자

HTML 문서 내 전체에 적용

```css
* {
    color: fuchsia;
}
```	    

## 상속 제어하기
1. ```initial```
    - 부모의 상속값을 받고 싶지 않을 때 사용. 초기값으로 돌린다.
    - 모든 부모의 값을 상속 받고 싶지 않다면 아래와 같이 ```all``` 속성을 사용한다.

        ```css
        .color {
        	all: initial;
        }
        ```

2. `inherit`
    - 강제로 상속받게 만드는 것
    - all 속성 사용도 가능하다.
3. `unset`
- 부모로부터 상속받을 값이 있을 때 : `inherit` 로 동작
- 부모로부터 상속받을 값이 없을 때 : `inital` 로 동작

## 우선순위

1. 속성 값 뒤에 `!important` 를 붙인 속성
2. `HTML`에서 `[style](https://ofcourse.kr/html-course/%ED%83%9C%EA%B7%B8%EC%9D%98-%EC%86%8D%EC%84%B1#style-%EC%86%8D%EC%84%B1)`을 직접 지정한 속성
3. `#id` 로 지정한 속성
4. `.클래스`, `:추상클래스` 로 지정한 속성
5. `태그이름` 으로 지정한 속성
6. 상위 객체에 의해 **상속**된 속성

같은 우선 순위에 있는 경우, 부모-자식 관계가 많은 경우가 우선되며, 모든 설정이 같은 경우 **나중**에 선언한 것이 우선되어 적용된다.
