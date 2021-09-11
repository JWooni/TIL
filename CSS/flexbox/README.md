# flexbox

## 1. Flexbox 개요

- flexbox는 부모 요소인 flex container와 자식 요소인 flex item으로 구성된다.
- flex container가 flex 태그의 영향을 받는 공간이고, 그 안에서 flex item들의 배치, 정렬이 설정된 속성에 따라 변경된다.
- 요소의 사이즈가 불명확하거나 동적으로 변화할 때에도 유연한 레이아웃을 실현할 수 있다. 복잡한 레이아웃이라도 적은 코드로 보다 간단하게 표현할 수 있다.

## 2. 용어 정리

- flex container
    - 상위 부모 요소
- flex item
    - 복수의 자식 요소
- main axis
    - 주축
- cross axis
    - 교차축

## 3. container : display

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/display)

- 부모 요소인 container에서 display: flex 선언을 해줘야 한다.

## 4. container : flex-direction

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/flex-direction)

- 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정한다.
- flexbox 레이아웃에서 주축의 방향은 왼쪽에서 오른쪽으로 향하는 수평 방향이 기본이다. 하지만 요소를 수직으로 배열하려면 주축이 위에서 아래로 향하게 해야 한다. flex container의 flex-direction 속성의 값을 column으로 설정하면 주축의 방향을 바꿀 수 있다.
    - row : 요소들을 텍스트의 방향과 동일하게 정렬한다.
    - row-reverse : 요소들을 텍스트의 반대 방향으로 정렬한다.
    - colum : 요소들을 위에서 아래로 정렬한다.
    - colum-reverse : 요소들을 아래에서 위로 정렬한다.
    - column-reverse 또는 row-reverse를 사용하면 요소들의 start와 end의 순서도 뒤바뀐다.

```css
/* flex-direction */
.flex-direction-container {
	height: 500px;
	border: 5px dashed orange;
	display: flex;
	flex-direction: row-reverse;
}

.flex-direction-item {
	width: 50px;
	height: 50px;
	margin: 5px;
	background-color: paleturquoise;
	border: 3px solid blue;
	font-size: 30px;
}
```

## 5. container : flex-wrap

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/flex-wrap)

- flex-wrap은 flex item이 flex container를 벗어났을 때 줄을 바꾸는 속성이다.
- white-space 속성과 동일하게 작동한다.
- 속성의 기본값인 nowrap은 flex item의 전체 크기가 flex container보다 커져도 줄을 바꾸지 않고 한 줄로 flex item을 배치한다.
    - nowrap : 모든 요소들을 한 줄에 정렬한다.
    - wrap : 요소들을 여러 줄에 걸쳐 정렬한다.
    - wrap-reverse : 요소들을 여러 줄에 걸쳐 반대로 정렬한다.

```css
/* flex-wrap */
.flex-wrap-container {
	height: 500px;
	border: 5px dashed orange;
	display: flex;
	flex-wrap: wrap;
}

.flex-wrap-item {
	width: 100px;
	height: 100px;
	margin: 5px;
	background-color: paleturquoise;
	border: 3px solid blue;
	font-size: 30px;
}
```

## 6. container : flex-flow

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/flex-flow)

- flex-direction 속성과 flex-wrap 속성을 flex-flow 속성으로 단축해 사용할 수도 있다.
- flex-direction과 flex-wrap이 자주 같이 사용되기 때문에,flex-flow가 이를 대신할 수 있다.

```css
/* flex-flow */
.flex-flow-container {
	height: 500px;
	border: 5px dashed orange;
	display: flex;
	/* flex-direction: column; */
	/* flex-wrap: wrap; */
	flex-flow: column, wrap;
}

.flex-flow-item {
	width: 100px;
	height: 100px;
	margin: 5px;
	background-color: paleturquoise;
	border: 3px solid blue;
	font-size: 30px;
}
```

## 7. order

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/order)

- 만약 내용을 변경하지 않고 출력 순서만 바꾸고 싶다면 order 속성을 사용한다.
- 기본값은 0이고, 작은 값이 있는 요소부터 출력한다.
- 값이 같다면 입력한 순서대로 출력한다.

```css
/* order */
.flex-order-container {
	height: 500px;
	border: 5px dashed orange;
	display: flex;
}

.flex-order-item {
	width: 100px;
	height: 100px;
	margin: 5px;
	background-color: paleturquoise;
	border: 3px solid blue;
	font-size: 30px;
}

.flex-order-item:nth-child(3) {
	order: 3;
}

.flex-order-item:nth-child(5) {
	order: 8;
}

.flex-order-item:nth-child(4) {
	order: -100;
}
```

## 8. flex-grow

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow)

- `flex-grow` 속성은 flex item의 확장에 관련된 속성이다. `0`과 양의 정수를 속성값에 사용한다.
- 속성값이 `0`이면 flex container의 크기가 커져도 flex item의 크기가 커지지 않고 원래 크기로 유지된다.
- flex container의 크기가 커질 때 flex item의 크기도 커지게 하려면 `1` 이상의 값을 속성값으로 설정한다.
- 속성값이 `1` 이상이면 flex item의 원래 크기에 상관없이 flex container를 채우도록 flex item의 크기가 커진다.

```css
/* grow */
.flex-grow-container {
	height: 200px;
	border: 5px dashed orange;
	display: flex;
}

.flex-grow-item {
	width: 100px;
	height: 100px;
	margin: 5px;
	background-color: paleturquoise;
	border: 3px solid blue;
	font-size: 30px;

	/* flex-grow: 1; */
}

.flex-grow-item:nth-child(2) {
	flex-grow: 2;
}
.flex-grow-item:nth-child(3) {
	flex-grow: 1;
}
```
