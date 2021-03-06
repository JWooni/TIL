## HTML이란?
- 웹 페이지를 구성하고 있는 요소(element) 하나하나를 **태그**라는 표기법으로 작성
- 태그를 통해 어떤 요소인지(제목, 본문, 이미지, 비디오 등) 명시
- 태그의 이름은 HTML5 웹 표준에 맞게 작성

1. 여는 태그(Opening tag) : <요소의 이름>
2. 닫는 태그(Closing tag) : </요소의 이름>
3. 내용(Content) : 요소의 내용
4. 요소(Element) : 여는 태그, 닫는 태그, 내용을 통틀어 요소(Element)라고 한다.

- 태그의 경우 대소문자를 구분하진 않지만, HTML5에서는 모두 **소문자**로 작성하는 것을 권장

### 빈 요소(Empty elements)

- 내용이 없다면? 이미지, 수평선, 줄바꿈 등
- 내용이 없는 요소를 빈 요소(Empty element)라 부른다.
- 이 경우 닫는 태그를 추가로 명시하지 않아도 된다.
- Empty element, Self-Closing element, Void element, Single tag 등

```html
<br>
<hr>
<img src="https://image.url/images/icon.jpg">
<meta charset="utf-8">
<input type="text" name="name">
```

### 요소의 중첩(Nesting)

- 요소 안에 다른 요소가 들어가는 **포함관계**를 성립할 수 있다.
- 이렇게 여러 요소가 중첩될 경우에는, 열린 순서의 **반대로** 닫혀야만 한다.
- 이렇게 서로의 포함관계(부자관계)를 구분하기 위하여 **들여쓰기**를 사용한다.

```html
<html>
	<body>
		<h1>요소 안에 <strong>다른 요소가</strong> 들어 갈 수도 있습니다!</h1>
		<ul>
			<li></li>
		</ul>
	</body>
</html>
```

### 주석 (Comments)

- 브라우저는 주석을 무시하여 사용자가 주석을 보이지 않게 한다.
- 주석의 목적은 코드에 메모를 추가하거나 ,혹은 사용하지 않는 코드를 임시로 처리하기 위함이다.
- 주석을 남발하지 않고, 정말 필요한 곳에만 사용한다.

### HTML 문서의 구조

```html
<!DOCTYPE html>
<html>
	<head>
	<!-- HEAD 영역 -->
	</head>
	<body>
	<!-- BODY 영역 -->
	</body>
</html>
```

- ```<!DOCTYPE html>```
- html : 페이지 전체의 컨텐츠를 감싸는 루트(root)요소
    - head : 웹브라우저 화면에 직접적으로 나타나지 않는 웹페이지의 정보
        - meta tag : 문서의 일반적인 정보와 문자 인코딩을 명시
        - title
    - body : 웹브라우저 화면에 나타나는 모든 콘텐츠

### HEAD 태그

- 문서 메타데이터 (헤더) 요소
- 웹브라우저가 식별할 수 있는 문서 정보(메타데이터)를 담는다.
- <header> 태그는 최상위 제목, 작성자 목록 등 사람에게 보여야 할 정보를 담는다.

### BODY 태그

- HTML 문서의 내용을 나타낸다.
- 한 문서에 하나의 <body> 요소만 존재할 수 있다.

### 태그를 구분짓는 특성

1. 구획을 나누는 태그
    - 단독으로 사용했을 때에는 눈에 보이지 않는다.
    - 여러가지 요소들을 묶어서 그룹화
2. 그 자체로 요소인 태그
    - 단독으로 사용했을 때에도 눈으로 확인할 수 있다.

## 블록과 인라인

1. 블록 (Block)
    - 블록 레벨 요소는 언제나 새로운 줄에서 시작하고, 좌우 양쪽으로 최대한 늘어나 가능한 모든 너비를 차지한다.
    - 상자를 아래로 쌓는 것!
2. 인라인 (Inline)
    - 인라인 요소는 줄의 어느 곳에서나 시작할 수 있다.
    - 바로 이전 요소가 끝나는 지점부터 시작하여, 요소의 내용(content) 만큼만 차지한다.
3. 포함 규칙
    - 같은 형태의 다른 요소를 안에 포함할 수 있다.
        - 블록 > 블록, 인라인 > 인라인
    - 대부분의 블록 요소는 다른 인라인 요소도 안에 포함할 수 있다.
    - 인라인 요소는 블록 요소를 포함할 수 없다.

### 콘텐츠 카테고리

- HTML5부터 비슷한 특징을 가진 요소끼리 묶어서 7가지 카테고리로 세분화
- 하나의 HTML 요소가 여러 컨텐츠 카테고리 내의 포함관계에 들어갈 수도 있다.
	- 메타데이터 콘텐츠 : 문서의 메타 데이터(정보), 다른 문서를 가리키는 링크 등을 나타내는 요소
	- 플로우 콘텐츠 : 웹 페이지상에 메타데이터를 제외하고 거의 모든 요소. 보통 텍스트나 임베디드 콘텐츠를 포함
	- 섹션 콘텐츠 : 웹 문서의 구회을 나눌 때 사용
	- 헤딩 콘텐츠 : 섹션의 제목과 관련된 요소
	- 프레이징 콘텐츠 : 문단에서 텍스트를 마크업 할 때 사용
	- 임베디드 콘텐츠 : 이미지나 비디오 등 외부 소스를 가져오거나 삽입할 때 사용되는 요소
	- 인터렉티브 콘텐츠 : 사용자와의 상호작용을 위한 콘텐츠 요소

## 메타데이터 요소
	
### 메타데이터의 역할

- 데이터를 설명하는 데이터(데이터를 위한 데이터)
    - 예) 촬영 일시, 저작자, 조리개 값 등등

### title

- 문서 제목 요소
- 브라우저의 제목 표시줄이나 페이지 탭에 보이는 문제 제목을 정의한다.
- 텍스트만 포함될 수 있으며, 태그를 포함하더라도 무시한다.
- 타이틀을 좀 더 잘 짓는 페이지가 검색 상위에 노출된다.

### meta - 문서 정보

- 문서 레벨 메타데이터 요소
- ```<base>, <link>, <script>, <style>, <title>```과 같은 다른 메타관련 요소로 나타낼 수 없는 메타데이터
- name
    - name과 content 특성을 함께 사용하면 문서의 메타데이터를 이름-값 쌍으로 제공할 수 있다. name은 이름, content는 값을 담당한다.

    ```html
    <meta name="" content="" />
    ```

### META - 문자 인코딩, 뷰포트

- <u>charset</u>
    - 페이지의 문자 인코딩을 선언. 이 특성이 존재할 경우, 그 값은 반드시 문자열 "utf-8"의 대소문자 구분 없는 ASCII 표현이어야 한다.

    ```html
    <meta charset="UTF-8" />
    ```

- <u>viewport</u>
    - 뷰포트의 초기 사이즈에 대한 힌트. 모바일 장치에서만 사용한다.  
    - ```<meta name= "viewport">```의 값
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```  
  
### MIME 타입

- 웹에서 파일의 확장자는 별 의미가 없으므로, 각 문서의 올바른 MIME 타입을 전송하도록 서버가 정확히 설정하는 것이 중요하다.
- 브라우저들은 리소스를 내려받았을 때 해야 할 기본 동작이 무엇인지를 결정하기 위해 대게 MIME 타입을 사용한다.

### style

- 문서나 문서 일부에 대한 스타일 정보를 포함한다.
- 문서의 <head> 안에 위치해야한다.
- 스타일은 외부 스타일 시트에서 작성하고, <link>요소로 연결하는 것이 좋다.

### script

- <style> 태그와 같이 인라인으로도 작성이 가능하며 외부 파일에서 불러올 수 있다.
- 외부 스크립트 가져오는 법

    ```html
    <script src="javascript.js"></script>
    ```

- 요소 내부 인라인 스크립트를 작성하는 법

    ```html
    <script>
      alert("Hello World!");
    </script>
    ```  
