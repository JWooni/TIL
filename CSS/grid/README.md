# grid

## grid 개요

- CSS Grid(그리드)는 2차원(행과 열)의 레이아웃 시스템을 제공한다.
- Flexible Box도 훌륭하지만 비교적 단순한 1차원 레이아웃을 위하며, 좀 더 복잡한 레이아웃을 위해 우리는 CSS Grid를 사용할 수 있다.
- CSS Grid는 예전부터 핵(Hack)으로 불린 다양한 레이아웃 대체 방식들을 해결하기 위해 만들어진 특별한 CSS 모듈.
- Grid Properties CSS Grid는 CSS Flex와 같이 Container(컨테이너)와 Item(아이템)이라는 두 가지 개념으로 구분.

## 1. container - display

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/display)

- Grid Container(컨테이너)를 정의한다.
- 정의된 컨테이너의 자식 요소들은 자동으로 Grid Items(아이템)로 정의된다.

```css
.container {
    display: grid;
    width: 300px;
    height: 250px;
    border: 5px solid orange;
}

.item {
    border: 2px dashed red;
}
```

## 2. grid-template-rows

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)

- 명시적 행(Track)의 크기를 정의한다.
- 동시에 라인(Line)의 이름도 정의할 수 있다.
- fr(fraction, 공간 비율) 단위를 사용할 수 있다.
- repeat() 함수를 사용할 수 있다.

```css
.container-grid-rows {
    width: 600px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    border: 4px solid lightgray;
}

.item-grid-rows {
    border: 10px solid red;
    font-size: 30px;
}
```

## 3. grid-template-columns

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

- 명시적 열(Track)의 크기를 정의한다.
- 동시에 라인(Line)의 이름도 정의할 수 있다.
- fr(fraction, 공간 비율) 단위를 사용할 수 있다.
- repeat() 함수를 사용할 수 있다.

```css
.container-grid-rows {
    width: 600px;

    display: grid;

    grid-template-columns: repeat(3, 1fr);
    border: 4px solid lightgray;
}
```

## 4. grid-template-areas

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)

- 지정된 그리드 영역 이름(grid-area)을 참조해 그리드 템플릿을 생성한다.

```css
.container-grid-template-areas {
    display: grid;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
        "header header header"
        "main main aside"
        "footer footer footer";
    gap: 30px 15px;
}

.item-grid-template-areas {
    border: 10px solid red;
}

.item-grid-template-areas:nth-child(1) {
    grid-area: header;
}

.item-grid-template-areas:nth-child(2) {
    grid-area: main;
}

.item-grid-template-areas:nth-child(3) {
    grid-area: aside;
}

.item-grid-template-areas:nth-child(4) {
    grid-area: footer;
}
```

## 5. row-gap

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)

- 각 행과 행 사이의 간격(Gutter)을 지정한다.

```css
.container {
  row-gap: 50px;
}
```

## 6. column-gap

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)

- 각 열과 열 사이의 간격(Gutter)을 지정한다.

```css
.container {
  column-gap: 4em;
}
```

## 7. gap(grid-gap)

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/gap)

- 각 행과 행, 열과 열 사이의 간격(Gutter)을 지정한다.

```css
.container {
  gap: <grid-row-gap> <grid-column-gap>;
}

.container {
  display: grid;
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 10px;
}
/* 단축 */
.container {
  gap: 10px;

/* 하나의 값만 적용하고자 한다면 다음과 같이 사용할 수 있다. */
.container {
  gap: 10px 0; /* row-gap */
  gap: 0 10px; /* column-gap */
}
```

## 8. grid-auto-rows

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)

- 암시적 행(Track)의 크기를 정의한다.
- 아이템(Item)이 grid-template-rows로 정의한 명시적 행 외부에 배치되는 경우 암시적 행의 크기가 적용된다.

```css
.container-grid-auto {
    width: 600px;
    display: grid;
    grid-template-rows: repeat(2, 100px);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
}

.item:nth-child(3) {
  grid-row: 3 / 4;
}
```

## 9. grid-auto-columns

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)

- 암시적 열(Track)의 크기를 정의한다.
- 아이템(Item)이 grid-template-columns로 정의한 명시적 열 외부에 배치되는 경우 암시적 열의 크기가 적용된다.

```css
.container-grid-auto {
    width: 600px;
    display: grid;
    grid-template-rows: repeat(2, 100px);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
    grid-auto-columns: 1fr;
}

.item-grid-auto {
    border: 10px solid red;
}

.item-grid-auto:nth-child(1) {
    grid-column: 1 / 3;
}

.item-grid-auto:nth-child(2) {
    grid-column: 3 / 5;
}

.item-grid-auto:nth-child(3) {
    grid-column: span 2;
}

.item-grid-auto:nth-child(4) {
    grid-row: 5 / 7;
    grid-column: 6/ 7;
}
```

## 10. grid-auto-flow

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)

- 배치하지 않은 아이템(Item)을 어떤 방식의 ‘자동 배치 알고리즘’으로 처리할지 정의한다.
    - row : 각 행 축을 따라서 차례로 배치한다.
    - column : 각 열 축을 따라서 차례로 배치한다.
    - row dense(dense) : 각 행 축을 따라 차례로 배치, 빈 영역 메운다.
    - column dense	: 각 열 축을 따라 차례로 배치, 빈 영역 메운다.

```css
.container-grid-auto-flow {
    width: 600px;
    display: grid;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
}

.item-grid-auto-flow {
    border: 10px solid red;
}

.item-grid-auto-flow:nth-child(1) {
    grid-column: span 2;
}

.item-grid-auto-flow:nth-child(2) {
    grid-column: -1 / -3;
}
```
