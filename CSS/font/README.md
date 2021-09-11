# 폰트 관련 속성

## font-size:

- font-size는 글자 크기를 정하는 속성.
- 숫자+단위로 사용
- 브라우저의 기본값은 16px

```css
div {
	font-size: 50px;
}
```

## font-style:

- 보통 이탤릭체를 사용하기 위해 많이 사용한다.
- 기본값은 normal

```css
.normal {
    font-style: normal;
}

.italic {
    font-style: italic;
}

.oblique {
    font-style: oblique;
}
```

## font-weight:

- 폰트의 굵기 지정
- 기본값은 normal(400, initial)
- 상속이 가능하다.

```css
.normal {
    font-weight: normal;
}

.bold {
    font-weight: 600;
}

.bolder {
    font-weight: bolder;
}
```

## font-family:

- 글꼴 설정
- 여러 개를 나열해서 사용할 경우, 콤마를 사용하여 나열하며 사용자의 os에 있는 폰트부터 사용한다.

```css
font-family: Georgia, "Times New Roman", serif;
```

- `line-height`
    - 폰트의 위, 아래 (줄) 간격 설정

### font와 단축속성(shorthand)

- font {} 로 단축속성을 사용하여 한 줄로 작성할 경우, `font-size`와 **font-family**는 포함해야한다.
- `font-style`, `font-variant`, `font-weight`, `line-height` 는 필수 속성은 아니며, 초기 값으로 설정된다.
- `font-style`, `font-variant`, `font-weight`는 `font-size`의 **앞**에 와야 한다.
- `font-variant`는 CSS 2.1에서 정의한 `normal`과 `small-caps`만 사용할 수 있다.
- `line-height`는 `font-size` 바로 다음에 와야 하며 "/"로 구분해야 한다. (예: `16px/3)`
- `font-family`는 마지막 값이어야 한다.

### 폰트 간격 설정

`letter-spacing`

- **글자**간의 간격
- 음수도 사용이 가능하다.

`word-spacing`

- **단어**간의 간격
- 음수도 사용이 가능하다.

### `text-align`

- **폰트 정렬**에 사용하는 속성
- left, right, center
- 너비값이 있기 때문에 블록 요소에서는 적용이 가능하다. 인라인 요소에 적용하면 너비값이 없으므로 적용이 되지 않는다.
- 만약 인라인 요소에 text-align 속성을 주고 싶다면, 부모 요소(블록)에서 적용해야 한다.

### `text-indent`

- 들여쓰기 속성
- 기본값은 0

### `text-decoration`

- 단축속성
- `text-decoration-line` (필수 작성), `text-decoration-color`, `text-decoration-style`, `text-decoration-thickness`

### `word-break`

- 문자가 내용 밖으로 벗어날 경우, 이를 줄바꿈할 것인지에 대한 여부를 설정하는 속성으로, 속성값에 따라서 줄바꿈은 단어 또는 글자 기준이 된다
- `normal` : 기본 값
- `break-all` : 문자 단위로 줄바꿈 - 문자 단위로 줄바꿈을 해주는 속성. 문자를 강제로 줄바꿈
- `keep-all` : 단어 단위로 줄바꿈 - 단어 단위로 줄바꿈을 해주는 속성. 단어단위로 강제로 줄바꿈

### `text-transform`

- 대문자로 또는 소문자로 바꾸는 속성으로, 한글에는 적용할 수 없는 속성이다.

```css
text-transform: none | capitalize | uppercase | lowercase | initial | inherit
```

- none : 입력된 그대로 출력
- capitalize : 단어의 첫번째 글자를 대문자로 변경
- uppercase : 모든 글자를 대문자로 변경
- lowercase : 모든 글자를 소문자로 변경
- initial : 기본값으로 설정
- inherit : 부모 요소의 속성값을 상속받음

## CCS의 단위와 값

### 숫자, 길이 및 백분율

- normal, number, length, percentage 등 사용 가능

### 절대길이 - px

- 상위 요소 또는 창 크기에 관계없이 **동일한 크기**를 의미
- 반응형을 고려하지 않는 작업에 유용하며 주로 인쇄물에서 많이 사용되는 방법
- 상속 된 다른 CSS로부터 영향을 받지 않는다.
    - `px` : 화면을 구성하는 가장 기본이 되는 단위로, pixel은 해상도에 따라 상대적인 크기를 갖음 (주로 사용)
    - in(inch) : 인치는 물리적 측정이지만, CSS에서는 pixel에 직접 매칭됨. (1in == 96px)
    - cm : 1cm == 37.8px
    - mm : 1mm == 0.1cm == 3.78px
    - pc : 1피카, 1pc == 12pt == 1/6 lin
    - pt : One point. 1pt == 1/72nd of lin
- 절대길이는 사용자 설정을 따르지 않기 때문에 접근성 문제를 유발할 수 있으므로, `font-size`를 설정할 땐 `em`, `rem` 등 **상대길이를 사용하는 것이 좋다**.

### 상대길이

- **글꼴 - em, rem**
    - 다른 요소나 부모 또는 창 크기에 비례여 크기가 조정되기 때문에 **반응형 사이트의 스타일을 지정하는데 유용**하다.
    - `em`
        - 1em === 부모의 font-size
        - 부모의 font-size에 따라 계속 바뀐다.
        - 부모의 값을 알아야 하기 때문에 번거로운 점이 있을 수 있다.
    - `rem`
        - root 요소의 글꼴 크기
        - 1rem === root의 font-size
        - 계단식이 아닌 root의 요소에서 영향을 받기 때문에 상대 길이 단위 작업을 크게 단순화한다.
- **뷰포트 백분율 길이 - vw, vh, vmin, vmax**
    - viewport란?
        - *현재 화면에 보여지고 있는 다각형(보통 직사각형)의 영역을 뜻하며, 웹 브라우저에서는 현재 창에서 문서를 볼 수 있는 부분을 말한다.*
        - 보통 viewport는 device-width와 initial-scale=1.0로 많이 설정한다.
    - `vw`
        - viewport 가로 값
        - 100vw의 경우 디바이스 가로 영역의 100%를 차지한다.
    - `vh`
        - viewport 세로 값
        - 100vh의 경우 디바이스 세로 영역의 100%를 차지한다.
    - `vmin`
        - viewport 의 작은 치수의 1%
        - vw 또는 vh 중 더 작은 값
    - `vmax`
        - viewport 의 큰 치수의 1%
        - vw 또는 vh 중 더 큰 값

## 퍼센트

- 백분율 값을 나타내며, 기호(%)로 표기
- 보통 부모 객체와의 상대적 크기를 지정할 때 사용
- 계산된 값만 상속받을 수 있다.

## 함수 표기법

1.  `calc()` : 괄호 안의 식을 **계산한 결과를 속성값으로 사용**하게 해주는 함수
    - +는 덧셈, -는 뺄셈, *는 곱셈, /는 나눗셈. 사칙연산을 지원한다.
    - CSS3 부터 제공되는 함수
    - 브라우저의 크기에 따라 요소의 너비가 높이가 변화해야하는 경우 사용하기 적절하다.
    - 주의할 점은 곱셈과 나눗셈의 좌우에는 공백이 없어도 되지만, 덧셈과 뺄셈의 좌우에는 공백이 있어야 한다.

    ```css
    #abc {
      width: calc(100% - 250px);
      background-color: red;
    }

    font-size: calc( 10px + 10px ); /* 글자 크기를 20px로 만든다.*/
    ```

    - 계산 순서
        - 왼쪽에서 오른쪽으로 계산한다.
        - 곱셈과 나눗셈을 먼저 하고, 덧셈과 뺄셈은 나중에 한다.
        - 괄호가 있으면 괄호 안 부터 계산한다.
2. `min()` : 2개 이상의 대소비교가 가능한 값이 주어졌을 때, 그 중에서 **작은 값을 반환**하는 함수
    - 다른 단위의 값을 비교할 때, 특히 상대 단위와 절대 단위의 값을 비교할 때는 어떤 값이 작은지가 유동적인 경우가 있는데, 이때 사용하면 유용하다.
    - **max-width 대체**
        - 웹페이지 레이아웃을 잡을 때 특정 영역을 너비를 상한선을 제한하기 위해서 `max-width` 속성을 많이 사용하는데,

            ```css
            width: 70%;
            max-width: 1000px;
            ```

            위와 같이 부모 엘리먼트의 70%를 차지하되, 1000px이 넘을 경우 1000px로 너비가 고정되도록하는 코드이다. 위 코드를 `min()`함수 사용 시, 아래와 같이 한 줄로 작성할 수 있다.

            ```css
            width: min(70%, 1000px);
            ```

3. `max()` : min() 함수와 정반대의 경우로 사용한다. 
- max() 함수를 사용하면 절대 값의 하한선을 두고 어떤 엘리먼트의 크기를 상대적으로 가져갈 수 있다.

