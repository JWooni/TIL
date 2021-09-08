# 복습
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

### 반응형 이미지 - srcset

- 이미지 소스의 세트
- 같은 비율의 다양한 크기를 가지는 동일 이미지들을 최소 2개 이상 명시하는 속성이다
- 쉼표로 구분하며, 1개의 이미지 소스만 명시할 경우 src 속성을 사용한다.
- **```srcset```**은 브라우저에게 제시할 이미지 목록과 그 크기를 정의한다. 각 쉼표 앞에 이렇게 적는다.
    1. **이미지 파일명** (`elva-fairy-480w.jpg`.)
    2. 공백
    3. 이미지 **고유 픽셀 너비** (`480w`) — `px`이 아니라 `w` 단위를 사용한다는 데 주의하라. 이것은 이미지의 실제 사이즈인데, 컴퓨터에서 이미지를 확인하면 찾을 수 있다.

    ```html
    <img srcset="elva-fairy-320w.jpg 320w,
                 elva-fairy-480w.jpg 480w,
                 elva-fairy-800w.jpg 800w"
         sizes="(max-width: 320px) 280px,
                (max-width: 480px) 440px,
                800px"
         src="elva-fairy-800w.jpg" alt="요정 옷을 입은 엘바">
    ```

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

## 폼 관련 요소

### ```<form>``` 이란

- 정보를 제출하기 위해 입력 양식 전체를 감싸는 태그
- 텍스트, 버튼, 라디오 등 컨트롤 요소(control element)로 구성
- 입력된 데이터를 한 번에 서버로 전송하며, 전송한 데이터는 웹 서버가 처리하고, 결과에 따른 또 다른 웹 페이지를 보여준다.
- 폼 태그 동작 방법
    1. 폼 내용을 입력한 후 모든 데이터를 웹 서버로 보낸다
    2. 웹 서버는 받은 폼 데이터를 처리하기 위해 웹 프로그램으로 넘긴다.
    3. 웹 프로그램은 폼 데이터를 처리하고 처리 결과에 따른 새로운 html 페이지를 웹 서버에 보낸다.
    4. 웹 서버는 받은 html 페이지를 브라우저에 보낸다.
    5. 브라우저는 받은 html 페이지를 보여준다.

```html
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>
```

### ```<form>``` 속성

- **action**
    - 폼(데이터)을 전송할 서버 쪽 스크립트 파일을 지정
    - 데이터를 보내려면 브라우저가 전송 위치(URL)를 알아야 하기 때문에 이를 위해 action 속성을 사용
- **method**
    - 폼을 서버에 전송할 http 메소드를 정함
    - GET : 데이터를 요청 본문으로 전송
    - POST : 데이터를 ```action``` URL과 ```?``` 구분자 뒤에 이어 붙여서 전송
- **label**
    - 사용자 인터페이스(UI) 요소의 라벨(label)을 정의할 때 사용
    - for 속성 : 해당 속성을 사용하면 다른 요소와 결합할 수 있으며, 이때 `<label>` 요소의 `for` 속성값은 결합하고자 하는 요소의 id 속성값과 같아야 한다.
    - ```<label>``` 속성 안에 ```<input>``` 요소가 있다면 for 속성을 명시하지 않아도 결합된다.

- **input**
    - 사용자가 정보를 입력할 수 있는 칸
- **fieldset**
    - ```<form>``` 요소에서 연관된 요소들을 하나의 그룹으로 묶을 때 사용
- **legend**
    - 필드셋에 제목을 달아주는 태그
- **name**
    - 폼을 식별하기 위한 이름을 지정
- **accept-charset**
    - 폼 전송에 사용할 문자 인코딩을 지정
- **target**
    - action에서 지정한 스크립트 파일을 현재 창이 아닌 다른 위치에 열도록 지정

### ```<input>```

```html
<input type="유형" id="id값" name="name값" value="banana" [속성="속성값"]>
```

- **type** : input 태그를 입력할 때 필수적인 속성
- **id** : 필수는 아니지만 꼭 값을 넣도록 요구되는 속성 값 (다른 input 태그와 구별하기 위함과 웹 서버에서 입력 값을 판별하기 위함)
- **name** : 서버로 전달되는 이름
- **value** : 입력 태그의 초기값
- **placeholder** : 입력 필드에 사용자가 적절한 값을 입력할 수 있도록 도와주는 짧은 도움말
- **autocomplete** : 자동 완성 기능을 사용할지 여부를 명시
    - on으로 명시하면, 브라우저는 사용자가 이전에 입력했던 값들을 기반으로 사용자가 입력한 값과 비슷한 값들을 드롭다운 옵션으로 보여준다.
- **required** : 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시
    - checkbox, date, email, file, number, password, pickers, radio, search, tel, text, url 속성에서는 제대로 동작함
- **disabled** : 해당 <input> 요소가 비활성화됨을 명시
    - disabled 속성이 명시된 <input> 요소는 사용할 수 없으며, 사용자가 클릭할 수도 없다. 또한, 폼 데이터가 제출될 때도 disabled 속성이 명시된 <input> 요소의 데이터는 제출되지 않는다.
- **readonly** : 입력 필드가 읽기 전용임을 명시
    - 사용자가 수정할 수는 없지만, 해당 내용을 하이라이트하거나 복사할 수는 있다.
    - disabled 속성이 명시된 입력 필드의 값은 서버로 제출되지 않지만, readonly 속성이 명시된 입력 필드의 값은 서버로 제출된다.
- **step** : 요소에 입력할 수 있는 숫자들 사이의 간격을 명시
- **min** : 최솟값을 명시
- **max** : 최댓값을 명시

## ```<button>```

- 클릭할 수 있는 버튼을 정의할 때 사용
- ```<button>``` 요소 안에는 텍스트나 이미지와 같은 콘텐츠를 삽입할 수 있지만, ```<input>``` 요소를 사용한 버튼에는 이와 같은 콘텐츠를 삽입할 수 없다. 브라우저별로 ```<button>``` 요소에 대해 서로 다른 기본 타입을 사용할 수 있으므로, 
```<button>``` 요소에는 언제나 type 속성값을 명시하는 것이 좋다.

    ```html
    <button type="button">
    ```

    위와 같이 명시하지 않으면 기본값은 submit이 된다.

### ```<button>``` 속성값

- **type="submit"** : 폼의 전송 기능을 담당한다. 사용자의 입력을 서버로 전송하기 위한 버튼
- **type="reset"** : 폼 작성 내용을 초기화하는데 사용한다.
- **type="button"** : 흔히 자바스크립트를 이용한 기능 구현에 많이 사용한다.

## ```<select>```

- 옵션 메뉴를 제공하는 컨트롤
- 콤보박스라고도 하며 Pull-Down Menus라고 표현하기도 한다.
- 방문자로 하여금 손쉽게 원하는 값을 선택할 수 있는 입력폼을 제공
- 속성
    1. size : 드롭다운 목록의 크기를 지정
    2. multiple : 드롭다운 목록의 경우 옵션 중에서 한 개를 선택하는 것이 기본값이다. 하지만 multiple속성에서 숫자를 지정하면 여러 개의 옵션을 선택할 수 있다. 

### ```<option>```

- ```<select>``` 태그 안에 ```<option>```태그를 사용하여 원하는 항목들을 추가한다.
- ```<option>```태그는 value속성을 이용해 서버로 넘겨주기 위한 값을 지정해야 한다.
- 속성
    1. value : 옵션을 선택했을 때 서버로 넘겨질 값
    2. selected : 화면에 표시될 때 기본으로 선택되어 있는 옵션 지정

### ```<optgroup>```

- 드롭다운 목록에서 여러 항목들을 몇 가지 그룹으로 묶어야 할 경우 사용한다.
- ```<optgroup>```태그를 사용할 때 label속성을 사용해서 그룹의 제목을 붙여준다.

### ```<datalist>```

- 텍스트 필드에 입력할 수 있는 값들을 목록 형태로 제시해 주어 손쉽게 값을 선택할 수 있도록 한다.
- 즉, 텍스트 필드에 값을 직접 입력하는 것이 아니라, 제시한 값 중에서 선택하면 그 값이 자동으로 입력
- 데이터 목록은 텍스트 필드와 함께 사용하기 때문에 ```<input>```태그를 같이 사용한다. **```<input>```태그의 list속성 값과 데이터 목록의 id를 같게 만들면 된다.**

```html
<input type="txt"  list="데이터 목록id">
	<datalist id="데이터 목록 id">
		<option> ... </option>
		...
	</datalist>
```

### ```<textarea>```

- 한 줄 이상의 문장을 입력할 때 사용(게시판에서 게시물을 입력하거나 회원가입 양식에서 사용자 약관을 표시할 때 자주 사용한다.)
- 속성
    1. name : 텍스트 영역의 이름을 지정
    2. cols   : 텍스트 영역의 가로 너비를 문자 단위로 지정
    3. rows  : 텍스트 영역의 세로 길이를 줄 단위로 지정합니다 지정한 숫자보다 줄 개수가 많아지면 스크롤 막대가 생긴다.

```html
<textarea 속성="속성" > 내용 </textarea>

<textarea cols="50" row="5" >하고싶은말 </textarea>
```

## 전역 속성

- ```class```
    - 여러 개의 요소에 같은 클래스 명을 부여할 수 있음
    - 대소문자를 구분하지 않음
    - 클래스와 클래스 사이에 공백 사용 가능

        ```html
        <input type="text" class="a b">
        ```

- ```id```
    - 문서 전체에서 유일한 고유식별자(id)를 정의
    - 요소를 가리키거나 스크립트 및 스타일 적용 시 특정 요소를 식별하기 위함
    - 공백이 들어가면 안 됨
    - 무조건 영문자로 시작해야 함
- ```style```
    - 요소에 적용할 CSS 스타일 선언을 담는다.
    - 아래와 같이 인라인으로 선언하는 방식은 좋은 방법이 아님

    ```html
    <div style="color: red;"></div>
    ```

- ```title```
    - 요소와 관련된 추가 정보를 제공하는 텍스트
- ```lang```
    - 요소 내의 수정 불가한 텍스트의 언어와 수정 가능한 텍스트가 사용해야 하는 언어를 정의
    - 기본 값은 "알 수 없음" 으로 정확한 값을 정의하는 게 좋다.
- ```data```
    - data-* 로 사용함
    - 속성의 이름을 정할 수 있음

    ```html
    <article
    	id="fruit"
    	data-name="banana"
    	data-color="yellow">
    	...
    </article>
    ```

- ```draggable```
    - 드래그 가능 여부를 나타내는 열거형 특성
    - true : 요소 드래그 가능
    - false : 요소 드래그 불가능
- ```hidden```
    - 요소가 아직, 또는 더 이상 관련이 없음을 나타내는 불리언 특성
  
