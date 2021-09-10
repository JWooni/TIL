# Transition

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/transition)

- transition은 속성을 서서히 변화시키는 속성.
    - **property :** transition을 적용시킬 속성을 결정한다.
    - **timing-function :** transition의 진행 속도를 결정한다.
    - **duration :** transition의 총 시간을 결정합니다.
    - **delay :** transition의 시작을 연기한다.
    - **initial :** 기본값으로 설정한다.
    - **inherit :** 부모 요소의 속성값을 상속받는다.

## 1. transition-property

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)

- 전환 효과를 사용할 속성 이름을 지정
    - all : 모든 속성에 적용
    - 속성이름 : 전환 효과를 사용할 속성 이름 명시

```css
.transition-property {
	width: 300px;
	height: 80px;
	border: 2px dashed teal;
	background-color: darkslategray;
	font-size: 50px;
	color: white;

	transition-property: all;
}

.transition-property:hover {
	background-color: indianred;
}
```

## 2. transition-duration

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)

- 전환 효과의 지속시간을 지정
    - 0s : 전환 효과 없음
    - 시간 : 지속시간(s)을 지정

```css
.transition-duration {
	width: 300px;
	height: 80px;
	border: 2px dashed teal;
	background-color: darkslategray;
	font-size: 50px;
	color: white;

	transition-property: all;
	transition-duration: .8s;
}

.transition-duration:hover {
	background-color: indianred;
}
```

## 3. transition-timing-function

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

- 전환 효과의 타이밍(Easing) 함수를 지정
    - ease : 느리게 - 빠르게 - 느리게
    - linear : 일정하게
    - ease-in : 느리게 - 빠르게
    - ease-out : 빠르게 - 느리게
    - ease-in-out : 느리게 - 빠르게 - 느리게

```css
/* transition-timing-function */
.transition-timing-function {
	width: 300px;
	height: 80px;
	border: 2px dashed teal;
	background-color: blue;
	font-size: 40px;
	color: white;

	transition-property: all;
	transition-duration: 3s;
	transition-timing-function: linear;
}

.transition-timing-function:hover {
	background-color: red;
	height: 400px;
}
```

## 4. transition-delay

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/transition-delay)

- 전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정
    - 0s : 대기시간 없음
    - 시간 : 대기시간(s)을 지정

```css
/* transition-delay */
.transition-delay {
	width: 300px;
	height: 80px;
	border: 2px dashed teal;
	background-color: darkslategray;
	font-size: 40px;
	color: white;

	transition-property: all;
	transition-duration: .8s;
	transition-delay: 1s;
}

.transition-delay:hover {
	background-color: indianred;
}
```

## 5. transition

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/transition)

- 요소의 전환(시작과 끝)효과를 지정하는 단축 속성.
- duration 속성이 delay 속성보다 앞에 와야 한다.
- transition: 속성명 지속시간 타이밍함수 대기시간;

```css
.transition {
	width: 300px;
	height: 80px;
	border: 2px dashed teal;
	background-color: blue;
	font-size: 40px;
	color: white;
	
	transition: all 3s ease-in-out 1s;
}

.transition:hover {
	background-color: yellow;
	height: 400px;
}
```

## 6. transition + transform 활용 예

```css
/* Transition + Transform */
.box {
	width: 100px;
	height: 100px;
	border: 10px solid seagreen;
	background-color: rgb(204, 253, 225);
	border-radius: 30px;

	transition: all 1s ease-in-out;
	transform-origin: bottom right;
}

.box:hover {
	transform: rotate(360deg);
}
```
