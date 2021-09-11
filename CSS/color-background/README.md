# 색상과 배경

## 1. color

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/color_value)

- 16진수
    - #뒤에 각 색상에 맞는 6자리 숫자, 알파벳을 나열해 색상을 표시하는 방법.
    - 같은 숫자나 알파벳이 반복되는 경우에는 줄여서 사용할 수 있다.

    ```css
    /* 16진수 */
    .hexadecimal {
        background-color: #09C;
    }
    ```

- rgb
    - rgb의 값을 숫자로 색상을 표시하는 방법.

    ```css
    /* rgb */
    .rgb {
        background-color: rgb(95, 139, 93);
    }
    ```

- rgba
    - 투명도를 주고 싶다면 rgba(숫자, 숫자, 숫자, 투명도)를 주면 투명도가 조절된다.
    - 투명도는 1~0 사이의 값을 가지며 1일때는 투명도가 없는 상태, 0이면 투명도가 100%로 눈에 보이지 않는 상태

    ```css
    /* rgba */
    .rgba {
        background-color: rgba(204, 43, 43, 0.8);
    }
    ```

- color name
    - 직접적으로 색상의 이름을 입력해서 색상을 표시하는 방법.
    - 140여종의 컬러네임이 있는데 이 중에서 17개가 표준 컬러인데 우리가 흔히 아는 컬러를 영어로 표기하면 된다.

    ```css
    .alphabet {
        background-color: black;
    }
    ```

## 2. opacity

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/opacity)

- opactiy는 요소의 투명도를 지정하는 속성.
- 1은 완전 불투명, 0은 완전 투명하다.
- 기본 값은 1으로 불투명이다.
- 소수점 단위로 지정한다.

```css
/* opactiy */
.floating-box {
    width: 150px;
    height: 150px;

    position: fixed;
    top: 10px;
    left: 10px;

    background-color: cadetblue;

    /* 요소 전체가 투명도 */
    opacity: .5;

    /* 배경색에만 투명도 */
    /* background-color: rgba(100, 100, 100, .5); */
}
```

## 3. background-color

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/background-color)

- background-color 속성은 백그라운드 색을 설정한다.
- border와 padding을 포함한 영역을 칠합니다. margin 영역은 칠하지 않는다.

```css
/* 배경 색상 */
.bg-color {
    background-color: royalblue;    
}
```

## 4. background-image

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/background-image)

- background-image 속성은 백그라운드 이미지 및 배경 속성을 설정한다.

```css
/* 배경 이미지 */
.bg-image {
    width: 600px;
    height: 600px;

    background-image: url("https://cdn.iconsumer.or.kr/news/photo/202105/18501_22274_3050.jpg");
}
```

## 5. background-repeat

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/background-repeat)

- background-repeat로 배경 이미지의 반복 여부와 반복 방향을 결정한다.
    - repeat : 가로 방향, 세로 방향으로 반복한다.
    - repeat-x : 가로 방향으로 반복한다.
    - repeat-y : 세로 방향으로 반복한다.
    - no-repeat : 반복하지 않는다.
    - initial : 기본값으로 설정한다.
    - inherit : 부모 요소의 속성값을 상속받는다.

```css
/* 배경 이미지 반복 */
.bg-repeat {
    height: 600px;
    border: solid 1px red;
    background-image: url("https://interactive-examples.mdn.mozilla.net/media/examples/moon.jpg");    
    background-repeat: no-repeat;
}
```

## 6. background-position

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)

- background-position은 배경 이미지의 위치를 정하는 속성.
    - x-position y-position : 가로 위치와 세로 위치를 결정한다.
    - initial : 기본값으로 설정한다.
    - inherit : 부모 요소의 속성값을 상속받는다.
    - 가로 위치 값 : left, center, right, 백분율, 길이
    - 세로 위치 값 : top, center, bottom, 백분율, 길이

    ```css
    /* 배경 이미지 위치 */
    .bg-posistion {
        height: 600px;
        border: solid 1px red;
        background-image: url("https://interactive-examples.mdn.mozilla.net/media/examples/moon.jpg");    
        background-repeat: no-repeat;

        /* background-position: 150px 200px; */
        background-position: top center;
    }
    ```

## 7. background-origin

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/background-origin)

- HTML 요소는 박스로 이루어져 있고, 바깥 여백 영역(Margin Area), 테두리 영역(Border Area), 안쪽 여백 영역(Padding Area), 내용 영역(Content Area)으로 구분하는데 background-origin으로 배경 이미지를 어느 영역부터 채워나갈지를 결정한다.
    - border-box : 테두리 영역 왼쪽 위부터 채운다.
    - padding-box : 안쪽 여백 영역 왼쪽 위부터 채운다.
    - content-box : 내용 영역 왼쪽 위부터 채운다.
    - initial : 기본값으로 설정한다.
    - inherit : 부모 요소의 속성값을 상속받는다.

    ```css
    /* 배경 이미지 채우기 */
    .bg-origin {
        height: 500px;
        border: dashed 30px blue;
        padding: 30px;
        background-image: url("https://interactive-examples.mdn.mozilla.net/media/examples/moon.jpg");    
        background-repeat: no-repeat;

        background-origin: content-box;
    }
    ```

## 8. background-size

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/background-size)

- background-size로 배경 이미지의 가로 크기와 세로 크기를 결정할 수 있다.
    - auto : 이미지 크기를 유지한다.
    - length : 값을 두 개 넣으면 첫번째 값이 가로 크기, 두번째 값이 세로 크기이다. 값을 한 개 넣으면 가로 크기이며, 세로 크기는 원본 이미지의 가로 세로 비율에 맞게 자동으로 정해진다. 백분율을 사용할 수도 있다.
    - cover : 배경을 사용하는 요소를 다 채울 수 있게 이미지를 확대 또는 축소한다. 가로 세로 비율을 유지한다.
    - contain : 배경을 사용하는 요소를 벗어나지 않는 최대 크기로 이미지를 확대 또는 축소한다. 가로 세로 비율을 유지한다.
    - initial : 기본값으로 설정한다.
    - inherit : 부모 요소의 속성값을 상속받는다.

    ```css
    /* 배경 크기 */
    .bg-size {
        height: 400px;
        border: solid 5px red;
        background-image: url("https://interactive-examples.mdn.mozilla.net/media/examples/hand.jpg");
        background-repeat: no-repeat;

        background-size: contain;
    }
    ```

## 9. background

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/background)

- background 속성은 태그의 배경을 지정하는 속성으로, font 속성과 비슷하게 세부적인 속성들을 한번에 쓸 수 있는 속성이다.
- background 단축 속성은 색상, 이미지, 원점, 크기, 반복 등 여러 배경 스타일을 한 번에 지정할 수 있다.

```css
/* background 단축 속성 */
.bg-shorthand {
    height: 400px;
    border: solid 5px blue;

    background: #09C url('https://interactive-examples.mdn.mozilla.net/media/examples/hand.jpg') no-repeat 10px center;
}
```
