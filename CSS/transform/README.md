# Transform

## 1. transform(변형) 개요

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/transform)

- transform 속성을 사용하여 HTML 요소의 모양, 크기, 위치 등을 자유롭게 바꿀 수 있다.

## 2. translate()

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate())

- translate() 메소드는 현재 위치에서 해당 요소를 주어진 x축과 y축의 거리만큼 이동시킨다.
- 주어진 거리가 양수이면 해당 축의 양의 방향으로, 음수이면 해당 축의 음의 방향으로 이동시킨다.

```css
#translate {
    width: 300px;

    transform: translate(100px);
    transform: translate(100px, 150px);
    transform: translateX(100px);
    transform: translatey(150px);
    transform: translate(50%, 30%);

}
```

## 3. rotate()

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate())

- rotate() 메소드는 해당 요소를 주어진 각도만큼 시계 방향이나 반시계 방향으로 회전시킨다.
- 주어진 각도가 양수이면 시계 방향으로, 음수이면 반시계 방향으로 회전시킨다.
- <angle>
    - [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/angle)
- angle에는 각의 크기를 입력한다.
- 단위는 deg, rad, grad, turn 등을 사용한다.
- turn은 1회전, 즉 360deg를 의미한다.

```css
#rotate {
    width: 300px;

    transform: rotate(45deg);

}
```

## 4. scale()

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale())

- scale() 메소드는 해당 요소의 크기를 주어진 배율만큼 늘리거나 줄인다.
- 주어진 배율이 1보다 크면 크기를 늘리고, 0보다 크고 1보다 작으면 크기를 줄인다.

```css
/* 
    Transform (변형)
*/
/* scale */
#scale {
    width: 400px;

    transform: scale(0.5);
    transform: scale(1.5 , 2.5);
    transform: scaleX(0.5);
    transform: scaleY(0.5);

}
```

## 5. skew()

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew())

- skewX() 메소드는 해당 요소를 주어진 각도만큼 x축 방향으로 기울인다.
- 주어진 각도가 양수이면 x축의 양의 방향으로, 음수이면 x축의 음의 방향으로 기울인다.

```css
#skew {
    width: 300px;
    margin: 100PX;
    
    transform: skew(20deg);
    transform: skewX(20deg);
    transform: skewY(20deg);
}
```

## 6. transform-origin

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

- transform의 변환 원점 기준점은 기본적으로 가운데인데 transform-origin 을 이용하면 x, y 축의 원점을 변경할 수 있다.

```css
#origin {
    width: 300px;
    margin: 100PX;

    transform: scale(1.3);
    transform-origin: top left;
    transform-origin: bottom right;
    transform-origin: 100px 50px;
}
```
