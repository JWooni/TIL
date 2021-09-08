# 선행

# 레이아웃

## display

- `display` 속성은 요소를 어떻게 보여줄지를 결정한다.
- 주로 4가지 속성값이 쓰이는데, 태그마다 기본값이 다르다.
    - `none` : 보이지 않음
    - `block` : 블록 박스
    - `inline` : 인라인 박스
    - `inline-block` : block과 inline의 중간 형태

## inline

- span 태그, b 태그, i 태그, a 태그 등이 이에 해당된다.
- `block` 과 달리 줄 바꿈이 되지 않고, `width`와 `height`를 지정 할 수 없다.
- word 같은 문서에서 볼드, 이탤릭, 색상, 밑줄 등 **글자나 문장에 효과를 주기 위해 존재하는 단위**라고 할 수 있다.
- 문서에서 특정 부분에 색상을 입힌다고 다음에 나오는 글이 줄바꿈 되지 않듯이 `inline` 요소 뒤에 나오는 태그 또한 줄바꿈 되지 않고 바로 오른쪽에 표시된다.

```html
<style>
.inline1{
	background: #09c;
}
.inline2{
	width: 200px; /* 이 값은 무시됩니다 */
	border: 3px solid #999;
}
</style>

<p>
	Lorem ipsum dolor sit amet, <span class="inline1">consectetur adipiscing elit</span>,
	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	Duis aute irure dolor in <span class="inline2">reprehenderit</span>
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
	Excepteur sint occaecat cupidatat non proident,
	sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

## block

- div 태그, p 태그, h 태그#, li 태그 등이 이에 해당된다.
- 기본적으로 **가로 영역을 모두 채우며**, block 요소 다음에 등장하는 태그는 줄바꿈이 된 것처럼 보인다.
- 이는 word 같은 문서에서 **문단**을 표시할 때, 한 문단이 끝난 뒤에 나타나는 요소는 항상 다음 줄에 표시되던 것과 비슷한 맥락이다.
- `width`, `height` 속성을 지정 할 수 있으며, block 요소 뒤에 등장하는 태그가 그 이전 block 요소에 오른쪽에 배치될 수 있어도 **항상 다음 줄**에 렌더링된다.

```html
<style>
.block1{ width: 300px; border: 3px solid #333 }
.block2{ width: 200px; border: 3px solid #999 }
</style>

<div class="block1">1</div>
<div class="block2">2</div>
hello
```

## inline-block

- block과 inline의 중간 형태라고 볼 수 있는데, 줄 바꿈이 되지 않지만 크기를 지정 할 수 있다.
- Internet Explorer 7 이하에서는 사용할 수 없다.

```html
<style>
.inline-block1{
	display: inline-block;
	background: #09c;
	height: 45px;
	/* 원래 inline 요소의 높이는 글자(폰트)의 높이를 바탕으로 설정되지만,
	inline-block을 이용하면 임의로 높이 또한 설정을 할 수 있다. */
}
.inline-block2{
	display: inline-block;
	width: 200px; /* 이 값은 이제 정상 작동한다 */
	border: 3px solid #999;
}
</style>

<p>
	Lorem ipsum dolor sit amet, <span class="inline-block1">consectetur adipiscing elit</span>,
	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	Duis aute irure dolor in <span class="inline-block2">reprehenderit</span>
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
	Excepteur sint occaecat cupidatat non proident,
	sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

## 요소를 없애는 방법

## 1. **none**

- 요소를 렌더링하지 않도록 설정한다.
- `visibility` 속성을 `hidden`으로 설정한 것과 달리, 영역도 차지하지 않는다.

```html
<style>
.display-none{ display: none }
.invisible{ visibility: hidden }
</style>

<div class="display-none">1</div>
<div>2</div>

<div class="invisible">3</div>
<div>4</div>
```

## 2. visibility

- `visibility` 속성은 태그의 가시성을 결정한다.
- 아래의 4가지 값을 가지며, 기본 값은 `inherit` 이다.
    - `visible`: 보임
    - `hidden`: 숨김 (자신의 영역은 계속 차지)
    - `collapse`: 겹치도록 지정(테이블의 행과 열 요소만 지정할 수 있으며, 그 외 요소의 지정하면 hidden으로 해석)
    - `inherit`: 부모 요소의 값을 상속

```html
<html>
<head>
<style>
	.box{
		width: 100px;
		height: 100px;
		background-color: #09C;
	}
	#box1{ visibility: hidden }
	#box2{ visibility: visible }
</style>
</head>
<body>
	<div id="box1" class="box"></div>
	<div id="box2" class="box"></div>
</body>
</html>
```

# float

- float은 해당 HTML 요소가 주변의 다른 요소들과 자연스럽게 어울리도록 만들어 준다.
- float은 본래 위와 같은 목적으로 만들어졌지만, 현재는 웹 페이지의 레이아웃(layout)을 작성할 때 자주 사용됩니다.

```html
<style>

    img { float: left; margin-right: 20px; }

</style>
```

# clear

- clear 속성은 float 속성이 적용된 이후 나타나는 요소들의 동작을 조절해 준다.
- 컨테이너 요소에 float 속성이 적용되면 그 이후에 등장하는 모든 요소들은 정확한 위치를 설정하기가 매우 힘들어 진다.
- 따라서 float 속성을 적용하고자 하는 요소가 모두 등장한 이후에는 clear 속성을 사용하여, 이후에 등장하는 요소들이 더는 flaot 속성에 영향을 받지 않도록 설정해줘야 한다.

```css

.left {
 background-color: #FF8C00; width: 150px; height: 50px; float: left;
 }

.right {
 background-color: #9932CC; width: 150px; height: 50px; float: right;
 }

p {
 clear: both; 
 }

```

# position

- position 속성은 문서 상에 요소를 배치하는 방법을 지정한다.
- Position 속성 값은 5가지가 존재한다.
  1. **static**: Position 속성 값으로 아무 것도 지정하지 않는 경우 default 값으로 사용된다. CSS의 Normal-flow(자세한 건 뒤에서 설명)에 따라 배치된다.
  2. **absolute**: 부모 요소(태그) 위치의 상대값에 따라 배치된다. 단, 부모 요소가 static인 경우에는 조상(ancestor) 요소의 position속성이 static이 아닐 때까지 거슬러 올라가 배치된다. absoulte로 정의된 요소는 CSS Normal-flow의 흐름에서 배제된다.
  3. **relative**: 자신이 원래 있어야 할 위치의 상대값(offset)에 따라 배치된다. offset은 top,left,right,bottom속성값을 활용한다. 즉 “left:20px”이라고 정의되면 원래 있어야할 좌측 위치에서 20px떨어진 곳에 위치하는 것이다.offset을 지정하지 않으면 static과 동일한 기능을 수행한다.
  4. **fixed**: 브라우저의 창에 상대적인 위치(offset)에 보이도록 한다. 즉, 화면 스크롤과 상관없이 항상 화면의 정해진 위치에 정보가 나타난다.
  5. **inherit**: 부모 element의 position속성을 물려받는다. **IE7까지는 지원하지 않으므로 해당브라우저를 고려해야 하는 경우는 사용하지 않도록 한다.**

    # Normal Flow

    - Normal flow라하면 일반적인 상황에서 각각의 요소들이 배치되는 순서(흐름)를 뜻하는 말이다.
    - HTML의 element들은 block element와 inline element로 구분할 수 있다.  block element에 해당하는 html element들에는 자주 사용되는 항목기준으로 h1~h6, div, p, ul, li, table등이 있다.
    - 이러한 블록요소(element)들은 내부에 또 다른 block-element나 inline-element를 포함할 수 있다.
    - 블록 요소들은 기본적으로 상하로 배치된다.
    - 각각의 요소가 정해진 흐름에 따라 배치되는 방식을 normal-flow라고 한다.

    # postion

    ## relative

    - 요소를 일반적인 문서 흐름에 따라 배치한다.
    - **요소 자기 자신의 원래 위치(static일 때의 위치)를 기준으로 배치**한다.
    - 원래 위치를 기준으로 위쪽(top), 아래쪽(bottom), 왼쪽(left), 오른쪽(right)에서 얼마만큼 떨어질 지 결정한다.
    - 위치를 이동하면서 다른 요소에 영향을 주지 않는다.
    - 문서 상 원래 위치가 그대로 유지된다.

    ```css
    .grand-parent {
        /* 박스 스타일링 */
        height: 500px;
        border: 5px dotted lightsalmon;
        /* padding : border와 content사이에 주는 간격 */
        padding: 50px;
    }

    .parent {
        /* 박스 스타일링 */
        height: 500px;
        border: 5px dotted lightslategray;
        padding: 10px;
    }

    .child {
        /* 박스 스타일링 */
        width: 150px;
        height: 100px;
        border: 3px dotted crimson;
        border-radius: 12px;
        background-color: lightyellow;

        /* 텍스트 정렬 */
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }

    /*  position: relative
    -> element가 원래 본인 위치 기준으로 자리를 잡음 */
    .relative {
        position: relative;
        left: 100px;
        top: 5px;
    }
    ```

    ## absolute

    - 요소를 일반적인 문서 흐름에서 제거한다.
    - 가장 가까운 위치에 있는 조상 요소를 기준으로 배치한다.
    - 조상 요소 위치를 기준으로 위쪽(top), 아래쪽(bottom), 왼쪽(left), 오른쪽(right)에서 얼마만큼 떨어질 지 결정한다.
    - 조상 중 Position을 가진 요소가 없다면 초기 컨테이닝 블록(<body>요소)를 기준으로 삼는다. (static을 제외한 값)문서 상 원래 위치를 잃어버린다. (아래에 있는 div가 해당 자리를 차지한다)

    ```css
    <div class="grand-parent">
        <div class="parent">
            <div class="child">1</div>
            <div class="child absolute">2</div>
            <div class="child">3</div>
        </div>
    </div>
    ```

    ## fixed

    - 뷰포트를 기준으로 삼고 싶은 경우 absolute를 사용해서 똑같이 구현할 수 있지만, absolute는 조상 요소의 위치를 기준점으로 삼는 개념이므로, 뷰포트를 기준으점으로 삼으려면 fixed를 사용한다.
    - 요소를 일반적인 문서 흐름에서 제거한다.페이지 레이아웃에 어떠한 공간도 배정하지 않는다.
    - 뷰포트를 기준점으로 붙어있다 (== 화면에 붙어있다.)

    ```html
    <div class="grand-parent">
        <div class="parent">
            <div class="child">1</div>
            <div class="child fixed">2</div>
            <div class="child">3</div>
        </div>
    </div>
    ```

    ```css
    .fixed {
        position: fixed;
        bottom: 30px;
        right: 30px;
    }
    ```

    ## sticky

    - position: sticky 속성을 적용한 박스는 평소에 문서 안에서 position: static 상태와 같이 일반적인 흐름에 따르지만 스크롤 위치가 임계점에 이르면 position: fixed와 같이 박스를 화면에 고정할 수 있는 속성이다.

    ```css
    .parent{
      width: 100%;
      height: 2000px;
    }
    .ele1 {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
      background: red;
    }
    .ele2 {
      display: inline-block;
      position: sticky;
      top: 30px;
      width: 80px;
      height: 80px;
      background: blue;
    }
    ```

    # overflow

    - overflow 속성은 요소내의 컨텐츠가 너무 커서 요소내에 모두 보여주기 힘들때 그것을 어떻게 보여줄지를 지정한다.
    - 기본적으로 컨텐츠를 포함하고 있는 요소의 크기가 고정되어 있지 않다면 컨텐츠를 모두 포함할 수 있도록 요소의 크기가 커진다.
    - 크기가 고정 되어 있다면 overflow 속성에 지정된 값에 따라 보여지게 된다.
    1. **visible** : 기본 값. 넘칠 경우 컨텐츠가 상자 밖으로 보여진다.
    2. **hidden** : 넘치는 부분은 잘려서 보여지지 않는다.
    3. **scroll** : 스크롤바가 추가되어 스크롤할 수 있다.
    4. **auto** : 컨텐츠 량에 따라 스크롤바를 추가할지 자동으로 결정.

    # z-index

    - position 속성을 이용하면 요소를 겹치게 놓을 수 있다.
    - 이때 요소들의 수직 위치를 z-index 속성으로 결정한다.
    - 값은 정수이며, 숫자가 클 수록 위로 올라오고, 숫자가 작을 수록 아래로 내려간다.

    ```css
    <!doctype html>
    <html lang="ko">
    	<head>
    		<meta charset="utf-8">
    		<title>CSS</title>
    		<style>
    			div {
    				width: 100px;
    				height: 100px;
    				position: absolute;
    			}
    			div.x {
    				background-color: #2196F3;
    				top: 20px;
    				left: 200px;
    			}
    			div.y {
    				background-color: #1976D2;
    				top: 50px;
    				left: 260px;
    			}
    			div.z {
    				background-color: #0D47A1;
    				top: 80px;
    				left: 230px;
    			}
    		</style>
    	</head>
    	<body>
    		<div class="x"></div>
    		<div class="y"></div>
    		<div class="z"></div>
    	</body>
    </html>
    ```
