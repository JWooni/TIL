# CSS

## CSS 소개

- Cascading Style Sheets
- CSS3부터는 모듈화
- CSS는 어떻게 생겼을까

```html
				<h1>Welcome!</h1>
        <ul>
            <li>Toy Story</li>
            <li>Zootopia</li>
            <li>Inside Out</li>
        </ul>
```

- CSS는 룰 기반 (Rule-based)의 언어이다.
- CSS를 통해 특정 요소, 혹은 특정 요소들의 집합의 스타일 규칙을 정의할 수 있다.

```css
h1 {
    color: red;
    font-size: 12px;
}
```

- 선택자(Selector) : h1
- 속성(property) : font-size:
- 값(value) : 12px;

- 선택자(Selector) : 스타일을 지정할 HTML 요소를 선택
- 선언 블록(declation block) : 중괄호 ```{ }``` 내부의 여러 선언들을 작성
- 선언(declations) : 프로퍼티와 값으로 이루어진 쌍
- 선택자 ```{ 하나 이상의 선언 }``` 의 형태로 이루어진 하나의  Rule (혹은 Rule Set)

### CSS 주석(Comments)

- /* 내용 */  의 형식으로 작성

```css
/* 한 줄 주석 */

/* 
    여러
    줄을
    차지하는
    주석
*/

/* 
span {
    color : bule;
    font-size : 1.5em;
}
*/
```

## CSS를 적용하는 방법

1. 내부 스타일 (embedded)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        h1 {
            color: red;
        }
    </style>
    <title>CSS</title>
</head>
<body>
    <h1>Welcome!</h1>
</body>
</html>
```

1. 인라인 스타일 (inline)

```html
<body>
	<h1 style="color:red">welcome!</h1>
</body>
```

1. 외부 스타일 (external)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>CSS</title>
    <link rel="stylesheet" href="style/main.css">
</head>
<body>
    <h1>Welcome!</h1>
</body>
</html>
```

## Cascading

1. **스타일 우선순위**
- 동일한 스타일이라도 선언된 곳에 따라 우선순위가 정해진다.
    - 브라우저에 의해 정의된 스타일 <개발자가 선언한 스타일 < 사용자가 구성한 스타일
- 적용 범위가 적을 수록 우선시 된다.
    - tag 스타일 < class 스타일 < id 스타일 < 인라인 스타일
- 소스코드의 순서가 뒤에 있으면 덮어쓴다.

1. **스타일 상속**
- 부모 요소에 있는 스타일 속성들이 자식 요소로 전달된다.
    - 자식 요소에서 재정의 할 경우, 부모의 스타일을 덮어쓴다.
- 상속이 되지 않는 속성도 있다. (예 : 배경 이미지, 배경 색 등)

## MDN

MDN 웹 문서는 웹 표준과 모질라 프로젝트에 대한 개발 문서들이 담긴 모질라의 공식 웹사이트이다.

---

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
    1. :first-child

        :first-child 클래스는 형제 요소 중 제일 첫 요소를 나타낸다.

        ```css
        li:first-child {
            color: green;
        }
        ```

    2. :last-child

        :last-child 클래스는 형제 요소 그룹 중 마지막 요소를 나타낸다.

        ```css
        span:last-child {
            color: tomato;
        }
        ```

    3. :nth-child()

        :nth-child() 클래스는 형제 사이에서의 순서에 따라 요소를 선택한다.

        ```css
        li:nth-child(3) {
            color: hotpink;
        }
        ```

    4. :first-of-type

        :first-of-type 클래스는 형제 요소 중 자신의 유형과 일치하는 제일 첫 요소를 나타낸다.

        ```css
        p:first-of-type {
            color: red;
        }
        ```

    5. :last-of-type

        :last-of-type 클래스는 형제 요소 그룹 중 해당 유형의 마지막 요소를 나타낸다.

        ```css
        p:last-of-type {
            color: blue;
        }
        ```

    6. :nth-last-of-type()

        :nth-last-of-type() 클래스는 형제 자매의 그룹 사이에서 자신의 위치를 기반으로 지정된 유형 (태그 이름)의 요소를 선택한다.

        ```css
        p:nth-of-type(even) {
            color: blue;
        }
        ```
