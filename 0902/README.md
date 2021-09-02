# 목록과 표

```html
<h2>Ordered List</h2>

    <ol>
        <li>Toy Story</li>
        <li>Zootopia</li>
        <li>Inside Out</li>
    </ol>

    <h2>Unodered List</h2>

    <ul>
        <li>Toy Story</li>
        <li>Zootopia</li>
        <li>Inside Out</li>
    </ul>
```

## ```<ol>```

 - **HTML ```<ol>``` 요소**는 정렬된 목록을 나타낸다. 보통 숫자 목록으로 표현한다.

```html
<ol>
  <li>Mix flour, baking powder, sugar, and salt.</li>
  <li>In another bowl, mix eggs, milk, and oil.</li>
  <li>Stir both mixtures together.</li>
  <li>Fill muffin tray 3/4 full.</li>
  <li>Bake for 20 minutes.</li>
</ol>
```

---

## ```<ul>```

 - **HTML ```<ul>``` 요소**는 정렬되지 않은 목록을 나타낸다. 보통 불릿으로 표현한다.

```html
<ul>
    <li>Milk</li>
    <li>Cheese
        <ul>
            <li>Blue cheese</li>
            <li>Feta</li>
        </ul>
    </li>
</ul>
```

---

## ```<li>```

 - **HTML ```<li>``` 요소**는 목록의 항목을 나타낸다. 반드시 정렬 목록(```<ol>```), 비정렬 목록(```<ul>```, 혹은 메뉴(```<menu>```) 안에 위치해야 한다. 메뉴와 비정렬 목록에서는 보통 불릿으로 항목을 나타내고, 정렬 목록에서는 숫자나 문자를 사용한 오름차순 카운터로 나타낸다.

```html
<p>Apollo astronauts:</p>

<ul>
    <li>Neil Armstrong</li>
    <li>Alan Bean</li>
    <li>Peter Conrad</li>
    <li>Edgar Mitchell</li>
    <li>Alan Shepard</li>
</ul>
```

---

## ```<dl>```

 - **HTML ```<dl>``` 요소**는 설명 목록을 나타낸다. ```<dl>```은 ```<dt>```로 표기한 용어와 ```<dd>``` 요소로 표기한 설명 그룹의 목록을 감싸서 설명 목록을 생성한다. 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용한다.

```html
<p>Cryptids of Cornwall:</p>

<dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>

    <dt>Morgawr</dt>
    <dd>A sea serpent.</dd>

    <dt>Owlman</dt>
    <dd>A giant owl-like creature.</dd>
</dl>
```

---

## ```<dt>```

 - **HTML ```<dt>``` 요소**는 설명 혹은 정의 리스트에서 용어를 나타낸다. ```<dl>``` 요소 안에 위치해야 한다. 보통 ```<dd>``` 요소가 뒤따르지만, 여러 개의 ```<dt>``` 요소를 연속해 배치하면 바로 다음 ```<dd>``` 요소로 한꺼번에 서술할 수 있다.

```html
<p>Please use the following paint colors for the new house:</p>

<dl>
    <dt>Denim (semigloss finish)</dt>
    <dd>Ceiling</dd>
 
    <dt>Denim (eggshell finish)</dt>
    <dt>Evening Sky (eggshell finish)</dt>
    <dd>Layered on the walls</dd>
</dl>
```

---

## ```<dd>```

 - **HTML ```<dd>``` 요소**는 정의 목록 요소(```<dl>```)에서 앞선 용어(```<dt>```)에 대한 설명, 정의, 또는 값을 제공한다.

```html
<p>Cryptids of Cornwall:</p>

<dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>

    <dt>Morgawr</dt>
    <dd>A sea serpent.</dd>

    <dt>Owlman</dt>
    <dd>A giant owl-like creature.</dd>
</dl>
```

---

## ```<table>```

 - **HTML `<table>` 요소**는 행과 열로 이루어진 표를 나타낸다.

```html
<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>
```

```html
<table>

        <tr>
            <th scope="col">나라 이름</th>
            <th scope="col">수도</th>
            <th scope="col">인구</th>
        </tr>

        <tr>
            <th scope="col">한국</th>
            <td>서울</td>
            <td>5100만</td>
        </tr>
        <tr>
            <th scope="col">미국</th>
            <td>워싱턴</td>
            <td>3억</td>
        </tr>
        <tr>
            <th scope="col">태국</th>
            <td>방콕</td>
            <td>6900만</td>
        </tr>

    </table>
```

---

## ```<tr>```

 - **HTML 표 행 요소** (```<tr>```) 테이블의 셀의 행을 정의. ```<td>```및 ```<th>```요소 가 혼합될 수 있다 .

---

## ```<td>```

 - *Table cell* HTML 요소 (**```<td>```**) 는 데이터를 포함하는 표의 셀을 정의한다.

```html
<table>
    <caption>Alien football stars</caption>
    <tr>
        <th scope="col">Player</th>
        <th scope="col">Gloobles</th>
        <th scope="col">Za'taak</th>
    </tr>
    <tr>
        <th scope="row">TR-7</th>
        <td>7</td>
        <td>4,569</td>
    </tr>
    <tr>
        <th scope="row">Khiresh Odo</th>
        <td>7</td>
        <td>7,223</td>
    </tr>
    <tr>
        <th scope="row">Mia Oolong</th>
        <td>9</td>
        <td>6,219</td>
    </tr>
</table>
```

---

## ```<th>```

 - HTML의 ```<th>```요소는 테이블 셀 그룹의 헤더로 셀을 정의한다.

---

## ```<thead>```

 - HTML 표 헤드 요소 ( ```<thead>```) 테이블의 컬럼의 머리를 정의하는 행 집합을 정의한다.

---

## ```<tbody>```: 표 본문 요소

 - **HTML ```<tbody>```** 요소는 표의 여러 행(```<tr>```)을 묶어서 표 본문을 구성한다.

```html
<table>
    <caption>Council budget (in £) 2018</caption>
    <thead>
        <tr>
            <th>Items</th>
            <th scope="col">Expenditure</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Donuts</th>
            <td>3,000</td>
        </tr>
        <tr>
            <th scope="row">Stationery</th>
            <td>18,000</td>
        </tr>
    </tbody>
</table>
```

---

## ```<caption>```: 표 설명 요소

 - **HTML ```<caption>``` 요소**는 표의 설명 또는 제목을 나타낸다.

```html
<table>
    <caption>He-Man and Skeletor facts</caption>
    <tr>
        <td> </td>
        <th scope="col" class="heman">He-Man</th>
        <th scope="col" class="skeletor">Skeletor</th>
    </tr>
    <tr>
        <th scope="row">Role</th>
        <td>Hero</td>
        <td>Villain</td>
    </tr>
    <tr>
        <th scope="row">Weapon</th>
        <td>Power Sword</td>
        <td>Havoc Staff</td>
    </tr>
    <tr>
        <th scope="row">Dark secret</th>
        <td>Expert florist</td>
        <td>Cries at romcoms</td>
    </tr>
</table>
```

## 임베디드 요소

### ```<img>```

- 문서에 이미지를 넣는 것
- src(source) : 필수 특성이며, 포함하고자 하는 이미지로의 경로를 지정한다.

```html
	<!-- 절대경로 -->
  <img src="https://www.naver.com/image/abcd.jpg" alt="image">

  <!-- 상대경로 -->
  <img src="/images/sample.png" alt="image">
```

### ```<img>``` 속성

1. alt (Alternative text, 대체 텍스트)
    - 이미지의 텍스트 설명이며, 필수는 아니지만 스크린 리더가 alt의 값을 읽어 사용자에게 이미지를 설명하므로, 접근성 차원에서 매우 유용하다.
    - 또한 네트워크 오류, 콘텐츠 차단, 죽은 링크 등 이미지를 표시할 수 없는 경우에도 이 속성의 값을 대신 보여준다.
    - 이미지에 대한 설명을 직접 입력할 수 있다.
2.  title
    - 마우스를 올렸을 때 나오는 툴팁 설정
3. width
    - 숫자만 들어갈 수 있음
    - 가로 사이즈 설정
4. height
    - 숫자만 들어갈 수 있음
    - 세로 사이즈 설정
5. src
    - 이미지의 URL (필수 사항)

### 반응형 이미지 - sizes

- 미디어 조건문을 지정하고, 그 조건문에 해당하는 이미지의 최적 크기를 지정하는 속성이다.
- 너비값으로는 절대값(px,em)이나 상대값(vw)만 사용할 수 있다. 퍼센트는 사용할 수 없다.

```html
sizes="(max-width: 500px) 444px,
         (max-width: 800px) 777px,
         1222px"
```

### ```<video>```

- 웹페이지에 영상파일을 재생할 때 사용

```html
<video autoplay controls loop muted poster="aaa" preload="bbb">
  <source src="xxx" type="yyy">
  zzz
</video>
```

- autoplay : 동영상을 자동으로 재생합니다.
- controls : 재생, 정지 등 조작 메뉴를 보여줍니다.
- loop : 동영상을 반복 재생합니다.
- poster : 동영상 재생 전에 보여줄 이미지입니다.
- preload : 페이지를 열 때 무엇을 로드할지 정합니다.
    - auto : 동영상, 메타데이타 모두 로드합니다.
    - metadata : 메타데이타만 로드합니다.
    - none : 로드하지 않습니다.
- source
    - src : 동영상 위치를 입력합니다. 웹브라우저가 가장 많이 지원하는 형식은 MP4입니다.
    - type : 동영상 타입을 알려줍니다. 만약 MP4 파일이라면 video/mp4라고 적습니다.
- zzz : 웹브라우저가 video 태그를 지원하지 않을 때 출력될 텍스트입니다.

### ```<audio>```

- 음성파일을 재생할 때 사용
- html5의 ```<audio>```태그는 아래와 같은 세 가지 파일 형식만을 지원한다.
    - mp3 : IE , Safari, Chrome, Firefox
    - Ogg : FF, Opera, Chrome
    - wav : Chrome, FF, Safari, Opera

### ```<canvas>```

- 주로 자바스크립트와 같은 스크립트를 이용하여 그래픽 콘텐츠를 그릴 때 사용
- 그래픽 콘텐츠를 위한 컨테이너일 뿐 실제로 그림을 그리는 동작은 스크립트를 사용하여 구현
- 요소 내부에 존재하는 텍스트는 해당 브라우저가 ```<canvas>``` 요소를 지원하지 않을 경우 브라우저 화면에 대신 나타나게 된다.

```html
<canvas id="myCanvas" style="border: 2px solid black">
    이 문장은 사용자의 웹 브라우저가 canvas 요소를 지원하지 않을 때 나타납니다!
</canvas>
```

### ```<iframe>```

- 인라인 프레임(inline frame)을 정의할 때 사용
- 인라인 프레임은 현재 HTML 문서에 다른 문서를 포함시킬 때 사용
- ```<iframe>``` 요소의 시작 태그와 종료 태그 사이에는 <iframe> 요소를 지원하지 않는 브라우저를 위한 텍스트를 포함할 수 있다.

```html
<iframe src="http://tcpschool.com">
    <p>현재 사용 중인 브라우저는 iframe 요소를 지원하지 않습니다!</p>
</iframe>
```
