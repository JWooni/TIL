# 애니메이션

## 1. 애니메이션 개요

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/animation)

- 애니메이션(Animation) 효과는 HTML 요소에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 변화시킨다.
- 애니메이션은 애니메이션을 나타내는 CSS 스타일과 애니메이션의 sequence를 나타내는 복수의 키프레임(@keyframes) 들로 이루어진다.

## 2. @keyframes

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes)

- @keyframes 는 CSS 애니메이션에서 구간을 정하고 각 구간별로 어떤 스타일을 적용시킬지 정하는 문법이다.
- @keyframes 를 사용하기 위해선 세 가지가 필요하다.
    - animation-name : 사용자가 직접 지정한 이름, @keyframes 가 적용될 애니메이션의 이름
    - 스테이지 : from - to 로 0~100% 의 구간
    - CSS 스타일 : 각 스테이지(구간)에 적용시킬 스타일

```css
.box {
	width: 100px;
	height: 100px;
	border: 10px solid seagreen;
	background-color: rgb(204, 253, 225);
	border-radius: 30px;

}

.box:hover {
	animation: my-first-animation 2s infinite;
}

@keyframes my-first-animation {
	0% {
		font-size: 20px;
	}
	50% {
		width: 300px;
		font-size: 30px;
	}
	100% {
		font-size: 20px;
	} 
}
```

## 3. animation-name

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)

- animation-name 속성은 애니메이션 keyframe 이름을 설정한다.
- 애니메이션은 움직임 시간, 움직임 지연 시간, 움직임 방향, 움직임 속도, 움직임 진행상태, 움직임 반복 횟수, 움직임 진행상태, 움직임 속도, 키프레임 이름 등을 설정하여 원하는 애니메이션을 구현 할 수 있다.

```css

```

## 4. animation-duration

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/animation-duration)

- animation-duration은 애니메이션의 진행 시간을 정하는 속성.
    - time : 시간을 결정한다.
    - 기본값은 0이다.
    - 단위는 s(초) 또는 ms(1000분의 1초)를 사용한다.
    - initial : 기본값으로 설정한다.
    - inherit : 부모 요소의 속성값을 상속 받는다.

```css

```

## 5. animation-delay

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/animation-delay)

- animation-delay는 애니메이션의 시작을 지연시키는 속성.
    - time : 시간을 결정한다.
    - 기본값은 0이다.
    - 단위는 s(초) 또는 ms(1000분의 1초)를 사용한다.
    - initial : 기본값으로 설정한다.
    - inherit : 부모 요소의 속성값을 상속 받는다.

```css
div {
	width: 100px;
	height: 100px;
	border: 10px solid silver;
	border-radius: 30px;
}

.box1 {
	background-color: rgb(204, 253, 225);
	animation: my-first-animation 1s infinite;
	animation-delay: -0.3s;
}
.box2 {
	background-color: rgb(255, 251, 198);
	animation: my-first-animation 1s infinite;
	animation-delay: 0;
}
.box3 {
	background-color: rgb(245, 204, 253);
	animation: my-first-animation 1s infinite;
	animation-delay: .3s;
	
}

.box:hover {
	animation: my-first-animation 2s infinite;
}

@keyframes my-first-animation {
	0% {
		font-size: 20px;
	}
	50% {
		width: 300px;
		font-size: 30px;
	}
	100% {
		font-size: 20px;
	} 
}
```

## 6. animation-timing-function

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)

- animation-timing-function은 애니메이션 진행 속도를 결정하는 속성.

```css
animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end | steps(int,start|end) | cubic-bezier(n,n,n,n) | initial | inherit;
```

## 7. animation-iteration-count

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)

- animation-iteration-count 속성은 애니메이션 반복 횟수 결정하는 속성.

```css
div.animation-iteration-count {
	width: 100px;
	height: 100px;
	border: 10px solid silver;
	border-radius: 50%;
	background-color: rgb(126, 114, 236);
}

.animation-iteration-count {
	animation-name: rotate;
	animation-duration: 3s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}

@keyframes rotate {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
```

## 8. animation-direction

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)

- animation-direction은 애니메이션의 진행 방향 정하는 속성.
    - normal : 기본값. 정해진 순서로 진행한다.
    - reverse : 반대 순서로 진행한다.
    - alternate : 정해진 순서로 진행했다가 반대 순서로 진행한다.
    - alternate-reverse : 반대 순서로 진행했다가 정해진 순서로 진행한다.
    - initial : 기본값으로 설정한다.
    - inherit : 부모 요소의 속성값을 상속받는다.

```css
/* animation-direction */
div.animation-direction {
	width: 100px;
	height: 100px;
	border: 10px solid silver;
	border-radius: 50%;
	background-color: rgb(126, 114, 236);
}

.animation-direction {
	animation-name: rotate;
	animation-duration: 3s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-direction: alternate-reverse;
}

@keyframes rotate {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
```

## 9. animation-play-state

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)

- nimation-play-state는 애니메이션을 진행 여부를 정하는 속성.
    - running : 애니메이션을 진행한다. 기본값.
    - paused : 애니메이션을 진행하지 않는다.
    - initial : 기본값으로 설정한다.
    - inherit : 부모 요소의 속성값을 상속 받는다.

```css
/* animation-play-state */
div.animation-play-state {
	width: 100px;
	height: 100px;
	border: 10px solid silver;
	border-radius: 50%;
	background-color: rgb(159, 236, 114);
}

.animation-play-state {
	animation-name: rotate;
	animation-duration: 3s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-direction: alternate-reverse;
	animation-play-state: paused;
	
}
.animation-play-state:hover {
	animation-play-state: running;
}

@keyframes rotate {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
```

## 10. animation-fill-mode

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)

- animation-fill-mode는 애니메이션이 진행되지 않을 때의 모양을 결정한다. 즉, 시작하기 전, 끝난 후의 모양을 결정한다.
- 기본값은 none

```css
/* animation-fill-mode */
div.animation-fill-mode {
	width: 100px;
	height: 100px;
	border: 10px solid green;
}

.animation-fill-mode {
	background-color: rgb(245, 255, 229);
	animation: fill-mode 3s linear 1s;
	animation-fill-mode: forwards;
}

@keyframes fill-mode {
	0% {
		background-color: indianred;
	}
	50% {
		width: 200px;
	}
  100% {
		background-color: black;
	}
}
```

## 11. animation(shorthand)

[mdn](https://developer.mozilla.org/ko/docs/Web/CSS/animation)

- 모든 animation 속성을 이용한 스타일을 한 줄에 설정할 수 있음.

```css
div { animation: my-Shorthand 3s ease-in-out 1s 3 alternate; }
```
