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

## 11. grid(shorthand)
[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/grid)
- grid-template-xxx과 grid-auto-xxx의 단축 속성
```css
.container {
  grid: auto-flow dense 150px / 100px 100px;
}
```

## 12. justify-content
[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
- grid 콘텐츠(Contents)를 수평(행 축) 정렬
    - normal : stretch와 같다                                   
    - start : 시작점(위쪽) 정렬 
    - center : 수직 가운데 정렬 
    - end : 끝점(아래쪽) 정렬 
    - space-around : 각 열 위아래에 여백을 고르게 정렬 
    - space-between : 첫 열은 시작점에, 끝 열은 끝점에 정렬되고 나머지 여백으로 고르게 정렬 
    - space-evenly : 모든 여백을 고르게 정렬 
    - stretch : 행 축을 채우기 위해 그리드 콘텐츠를 늘림
```css
.container {
  width: 450px;
  height: 450px;
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
  justify-content: <justify-content>;
}
```

## 13. align-content
[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/align-content)
- grid 콘텐츠(Contents)를 수직(열 축) 정렬합니다.
    - normal : stretch와 같다                                   
    - start : 시작점(위쪽) 정렬 
    - center : 수직 가운데 정렬 
    - end : 끝점(아래쪽) 정렬 
    - space-around : 각 행 위아래에 여백을 고르게 정렬 
    - space-between : 첫 행은 시작점에, 끝 행은 끝점에 정렬되고 나머지 여백으로 고르게 정렬 
    - space-evenly : 모든 여백을 고르게 정렬 
    - stretch : 열 축을 채우기 위해 그리드 콘텐츠를 늘림
```css
.container {
  width: 450px;
  height: 450px;
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
  align-content: <align-content>;
}
```

## 14. align-items
[mdm](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
- grid 아이템(Items)들을 수직(열 축) 정렬한다.
- grid 아이템의 세로 너비가 자신이 속한 그리드 행(Track)의 크기보다 작아야 한다.
    - normal : stretch와 같다
    - start : 시작점(위쪽) 정렬 
    - center : 수직 가운데 정렬 
    - end : 끝점(아래쪽) 정렬 
    - stretch : 열 축을 채우기 위해 그리드 아이템을 늘림
```css
.container {
  width: 450px;
  height: 450px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: <align-items>;
}
```

## 15. justify-items
[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
- grid 아이템(Items)들을 수평(행 축) 정렬한다.
- grid 아이템의 가로 너비가 자신이 속한 그리드 열(Track)의 크기보다 작아야 한다.
    - normal : stretch와 같다
    - start : 시작점(왼쪽) 정렬	
    - center : 수평 가운데 정렬	
    - end : 끝점(오른쪽) 정렬	
    - stretch : 행 축을 채우기 위해 그리드 아이템을 늘림
```css
.container {
  width: 450px;
  height: 450px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: <justify-items>;
}
```

## 16. grid-row
[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
- grid-row-start과 grid-row-end의 단축 속성
```css
.item {
  grid-row-start: span 3;
  grid-row-end: 4;
}
.item {
  grid-row: span 3 / 4;
}
.item {
  grid-row: 1 / 4;
}
```

## 17. grid-column
[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
- grid-column-start과 grid-column-end의 단축 속성
```css
.item {
  grid-column-start: 2;
  grid-column-end: -1;
}
.item {
  /* Column 2번에서 끝(-1번)까지 */
  grid-column: 2 / -1;
}
```

## 18. grid-area
[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
- grid-row-start, grid-column-start, grid-row-end 그리고 grid-column-end의 단축 속성
- 혹은 grid-template-areas가 참조할 영역(Area) 이름을 설정할 수도 있다.
- 영역 이름을 설정할 경우 grid-row와 grid-column 개념은 무시된다.
```css
.container {
  display: grid;
  grid-template-rows: repeat(4, 90px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "header header header"
    "main main aside"
    "main main ."
    "footer footer footer";
}
header.item { grid-area: header; }
main.item   { grid-area: main;   }
aside.item  { grid-area: aside;  }
footer.item { grid-area: footer; }
```

## 19. order
[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
- grid 아이템이 자동 배치되는 순서를 변경할 수 있다.
- 숫자가 작을수록 앞서 배치된다.
```css
.container {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
.item:nth-child(1) { order: 1; }
.item:nth-child(3) { order: 5; }
.item:nth-child(5) { order: -1; }
```

## 20. z-index
[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)
- z-index 속성을 이용해 아이템이 쌓이는 순서를 변경할 수 있다.
```css
.item:nth-child(1) {
  grid-area: 1 / 1 / 2 / 3;
}
.item:nth-child(2) {
  grid-area: 1 / 2 / 3 / 3;
  z-index: 1;
}
.item:nth-child(3) {
  grid-area: 2 / 2 / 3 / 4;
}
```

# Grid 단위
## 1. fr
[mdn](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fr)
- fr(fractional unit)은 사용 가능한 공간에 대한 비율을 의미한다.
```css
.container {
  grid-template-columns: 1fr 2fr 100px 25%;
}
```

## 2. min-content
[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/min-content)
- gird 아이템이 포함하는 내용(Contents)의 최소 크기를 의미한다.
```css
.container {
  grid-template-columns: min-content 1fr;
}
```

## 3. max-content
[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/max-content)
- grid 아이템이 포함하는 내용(Contents)의 최대 크기를 의미한다.
```css
.container {
  grid-template-columns: max-content 1fr;
}
```

## 4. auto-fill, auto-fit
[mdn]()
- 행/열(Track)의 개수를 그리드 컨테이너(Container) 및 행/열 크기에 맞게 자동으로(암시적) 조정한다.
- repeat() 함수와 같이 사용하며, 행/열과 아이템(Item) 개수가 명확할 필요가 없거나 명확하지 않은 경우 유용하다.(반응형 그리드)
- auto-fill과 auto-fit은 간단한 차이점을 제외하면 동일하게 동작한다.
```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
```

### 차이점
- auto-fill과 auto-fit은 차이점은 그리드 컨테이너가 하나의 행/열(Track)에 모든 아이템을 수용하고 남는 공간이 있을 때 발생한다.
```css
.container.auto-fill {
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
.container.auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}
```
