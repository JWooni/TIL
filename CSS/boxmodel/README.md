# 박스 모델 (Box Model)

## 박스모델이란?

모든 HTML 요소는 박스(box) 모양으로 구성되며, 이것을 박스 모델(box model)이라고 부른다.

박스 모델은 HTML 요소를 패딩(padding), 테두리(border), 마진(margin), 그리고 내용(content)으로 구분한다.

- content : 콘텐츠가 표시되는 영역
- padding : 콘텐츠와 테두리 사이의 여백
- border : padding과 margin 사이의 테두리
- margin : 가장 바깥 쪽 레이어로 콘텐츠와 패딩, 테두리를 둘러싸면서 해당 박스와 다른 요소 사이의 공백 역할을 한다.

### width

- 요소 너비 (가로 길이) 지정
- 값을 지정하지 않으면 auto로 지정된다.

```css
.box {
    width: 150px;
}
```

### height

- 요소 높이 (세로 길이) 지정
- 값을 지정하지 않으면 auto로 지정된다.

```css
.box {
    height: 100%;
}
```

### max-width

- max-width CSS 속성은 요소의 최대 너비를 설정한다.
- max-width는 width 속성의 사용값이 자신의 값보다 커지는걸 방지한다.

```css
#container {
    width: 50%;
    max-width: 300px;
    height: 300px;
}
```

### min-width

- min-width CSS 속성은 요소의 최소 너비를 설정한다.
- min-width는 width 속성의 사용값이 자신의 값보다 작아지는걸 방지한다.

```css
#child {
    width: 50%;
    height: 100px;
    min-width: 100px;
}
```

### max-height

- max-height CSS 속성은 요소의 최대 높이를 설정한다.
- max-height는 height 속성의 사용값이 자신의 값보다 커지는걸 방지한다.

```css
#container {
    width: 50%;
    max-height: 700px;
    height: 300px;
}
```

### min-height

- max-height CSS 속성은 요소의 최소 높이를 설정한다.
- min-height는 height 속성의 사용값이 자신의 값보다 작아지는걸 방지한다.

```css
#child {
    width: 50%;
    height: 100px;
    min-height: 100px;
}
```

## margin

- margin CSS 속성은 요소의 네 방향 바깥 여백 영역을 설정한다.
- margin-top, margin-right, margin-bottom, margin-left의 단축 속성이다.
- %를 사용시 부모의 width의 %를 상속받는다.
- 사용법

```css
/* 네 면 모두 적용 */
margin: 1em;
margin: -3px;

/* 세로방향 | 가로방향 */
margin: 5% auto;

/* 위 | 가로방향 | 아래 */
margin: 1em auto 2em;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
margin: 2px 1em 0 auto;

/* 전역 값 */
margin: inherit;
margin: initial;
margin: unset;
```

## margin collapsing

> 마진 상쇄, 마진 겹침, 마진 중복 등등으로 불린다.

- 여러 블록 요소들의 위/아래 margin이 경우에 따라 가장 큰 크기를 가진 margin으로 결합되는 현상
- display 형태가 block인 것들에 한해서 발생하는 현상으로 좌우로는 적용되지 않고 오로지 수직방향으로만 적용된다.

1. **인접 형제**
- 두 형제 요소의 위/아래 여백이 만나 상쇄된다.
1. **부모 - 자식요소 간**
- 부모 블록에 border, padding, inline content가 없어서 부모와 자식의 margin-top이 만나는 경우
- 부모 블록에 border, padding, inline content가 없고, 부모-자식을 분리할 height값이 지정되지 않아 부모와 자식의 margin-bottom이 만나는 경우
1. **빈 블록**
- border, padding, content가 없고, height 또한 존재하지 않으면, 해당 블록의 margin-top과 margin-bottom이 상쇄된다.

## padding

- padding 속성은 내용(content)과 테두리(border) 사이의 간격인 패딩 영역의 크기를 설정한다.
- 이러한 패딩 영역은 background-color 속성으로 설정하는 배경색의 영향을 함께 받는다.
- CSS를 사용하면 패딩 영역의 크기를 방향별로 따로 설정할 수 있다.

### 패딩(padding) 속성

- CSS에서는 HTML 요소의 패딩 영역을 설정하기 위해 다음과 같은 속성을 제공한다.

1. padding-top

2. padding-right

3. padding-bottom

4. padding-left

```css
<style>

    div.pad {

        padding-top: 50px;

        padding-right: 10px;

        padding-bottom: 30px;

        padding-left: 100px;

    }

</style>
```

## border-style

- border-style은 테두리(border)의 모양을 정하는 속성이다.
- border-style 성질이 설정되지 않는 한, border 속성 중에 어떤 것도 효과가 없다.

```css
<style type="text/css">
      h1 {
        font-family: Georgia;
        font-style: italic;
        padding: 10px;
      }
      .none {
        border-style: none;
      }
      .hidden {
        border-style: hidden;
      }
      .dotted {
        border-style: dotted;
      }
      .dashed {
        border-style: dashed;
      }
      .solid {
        border-style: solid;
      }
      .double {
        border-style: double;
      }
      .groove {
        border-style: groove;
      }
      .ridge {
        border-style: ridge;
      }
      .inset {
        border-style: inset;
      }
      .outset {
        border-style: outset;
      }
    </style>
```

## border-width

- `border-width` 속성은 테두리의 너비를 설정하는 데 사용된다.
- 폭은 pixels 단위로  또는 세 개의 사전 정의 된 값(thin, medium, or thick)들 중 하나를 사용하여 설정한다.
- "border-width" 속성이 단독으로 사용되는 경우 작동하지 않는다. "border-style" 속성을 먼저 설정한다.

```css
p.one {
    border-style: solid;
    border-width: 5px;
}

p.two {
    border-style: solid;
    border-width: medium;
}

p.three {
    border-style: solid;
    border-width: 2px 10px 4px 20px;
}
```

# border-color

`border-color` 속성은 테두리의 색상을 설정하는 데 사용된다. color 는 다음과 같이 설정될 수 있다.

- name - specify a color name, like "red"
- RGB - specify a RGB value, like "rgb(255,0,0)"
- Hex - specify a hex value, like "#ff0000"
- HSL - specify a HSL value, like "hsl(0,100%,50%)"
- transparent

```css
p.one {
    border-style: solid;
    border-color: red;
}

p.two {
    border-style: solid;
    border-color: green;
}

p.three {
    border-style: solid;
    border-color: red green blue yellow;
}
```

# Border

- border 속성은 태그의 테두리를 설정하는 속성으로, background 속성과 비슷하게 세부적인 속성들을 한번에 쓸 수 있는 속성이다.
- width - style - color의 순서로 사용한다.

### - **border-width**

테두리의 두께로, 주로 `px` 단위를 사용한다.

### - **border-style**

테두리의 스타일로 실선, 점선, 이중선 등의 옵션이 존재한다.

### - **border-color**

테두리의 색상으로, 값은 [color 속성](https://ofcourse.kr/css-course/color-%EC%86%8D%EC%84%B1)의 포맷을 사용한다.

```html
<style>

	h1 {border: 5px solid red;}

	h2 {border: 4px dotted blue;}

	div {border: double;}

</style>
```

## Border-radius

- border-radius는 테두리를 둥글게 만드는 속성이다.
- CSS3에서 정의되었으며, IE는 버전 9부터 지원한다.
- **속성값의 개수에 따라서, radius를 적용하는 위치가 달라집니다.**
    - **속성값이 1개**

 모든 모서리에 radius 값을 적용합니다.

- **속성값이 2개**

첫번째 값은 왼쪽 상단, 오른쪽 하단 모서리

두번째 값은 오른쪽 상단, 왼쪽 하단 모서리

- **속성값이 3개**

첫번째 값은 왼쪽 상단 모서리

두번째 값은 오른쪽 상단, 왼쪽 하단 모서리

세번째 값은 오른쪽 하단 모서리

- **속성값이 4개**

순서대로 왼쪽 상단, 오른쪽 상단, 오른쪽 하단, 왼쪽 하단 (시계 방향)

```css
div {
				width: 200px;
				height: 200px;
				margin: 20px auto;
				background-color: orange;

				border-radius: 20px 40px 60px 80px
			}
```

- 각각 정의하는 방법

```css
border-top-left-radius
border-top-right-radius
border-bottom-right-radius
border-bottom-left-radius
```

## box-sizing

- box-sizing은 박스의 크기를 어떤 것을 기준으로 계산할지를 정하는 속성이다.
- 문법
    - content-box : 콘텐트 영역을 기준으로 크기를 결정한다.
    - border-box : 테두리를 기준으로 크기를 결정한다.
    - initial : 기본값으로 설정한다.
    - inherit : 부모 요소의 속성값을 상속 받는다.

```css
div {
        margin: 20px;
        padding: 20px;
        border: 20px solid #dddddd;
        width: 500px;
      }
      .box-content{
        box-sizing: content-box;
      }
      .box-border {
        box-sizing: border-box;
      }
```
