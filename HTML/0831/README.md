# 텍스트 요소
## ```<h1> - <h6>``` : HTML 구획 제목 요소

``` <h1> - <h6>``` 요소는 6단계의 구획 제목을 나타낸다.
구획 단계는 ```<h1>```이 가장 높고 ```<h6>```은 가장 낮다.

```
<h1> Beetles</h1>
	<h2>External morphology</h2>
		<h3> Head </h3>
			<h4>Mouthparts</h4>
		<h3> Thorax </h3>
			<h4> Prothorax </h4>
			<h4> Pterothorax </h4>
```

## 특성

```'<h1>`-`<h6>'``` 요소는 전역 특성만 포함한다.

## 사용 일람

- 사용자 에이전트가 제목의 정보를 사용해 자동으로 문서 콘텐츠의 표를 만드는 등의 작업을 수행할 수 있다.
- 글씨 크기를 위해 제목 태그를 사용하지 않는다.
- 제목 단계를 건너뛰는 것을 피한다. 언제나 ```<h1>```로 시작해서, ```<h2>,``` 순차적으로 기입한다.
- 페이지 당 하나의 ```<h1>```만 사용한다. 여러 개를 써도 오류는 나지 않겠지만, 단일 ```<h1>```이 모범 사례로 꼽힌다. 논리적으로 생각했을 때도, ```<h1>```은 가장 중요한 제목이므로 전체 페이지의 목적을 설명해야 할 것. 두 개의 제목을 가진 책이나, 여러 개의 이름을 가진 영화는 볼 수 없다. 

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Heading level 1</h1>
    <h2>Heading level 2</h1>
    <h3>Heading level 3</h1>
    <h4>Heading level 4</h1>
    <h5>Heading level 5</h1>
    <h6>Heading level 6</h1>
</body>
</html>
```

## 예제

```
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```

---

## ```<P>``` 태그

**HTML ```<p>``` 요소**는 하나의 문단을 나타낸다. 시각적인 매체에서, 문단은 보통 인접 블록과의 여백과 첫 줄의 들여쓰기로 구분하지만, HTML에서 문단은 이미지나 입력 폼 등 서로 관련있는 콘텐츠 무엇이나 될 수 있다.

문단은 블록 레벨 요소이며, 자신의 닫는 태그(```</p>```) 이전에 다른 블록 레벨 태그가 분석되면 자동으로 닫힌다.

```
<p>Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Australia.</p>
 
<p>Some species live in houses where they hunt insects attracted by artificial light.</p>
```

---

## ```<br>``` : 줄바꿈 요소

HTML ```<br>``` 요소는 텍스트 안에 줄바꿈(캐리지 리턴)을 생성한다. 

주소나 시조 등 줄의 구분이 중요한 내용을 작성할 때 유용하다.

```
<p> O’er all the hilltops<br>
    Is quiet now,<br>
    In all the treetops<br>
    Hearest thou<br>
    Hardly a breath;<br>
    The birds are asleep in the trees:<br>
    Wait, soon like these<br>
    Thou too shalt rest.
</p>
```

---

## ```<blockquote>```: 인용 블록 요소

**HTML ```<blockquote>``` 요소**는 안쪽의 텍스트가 긴 인용문임을 나타낸다. 주로 들여쓰기를 한 것으로 그려진다. 인용문의 출처 URL은 ** cite** 특성으로, 출처 텍스트는 ```<cite>``` 요소로 제공할 수 있다.

```
<figure>
    <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
    </blockquote>
    <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
</figure>
```

---

## ```<q>```: 인라인 인용문 요소

**HTML ```<q>```요소**는 둘러싼 텍스트가 짧은 인라인 인용문이라는것을 나타낸다. 대부분의 브라우저에서는 앞과 뒤에 따옴표를 붙여 표현한다. ```<q>```는 줄 바꿈이 없는 짧은 경우에 적합하다. 긴 인용문은 ```<blockquote>``` 요소를 사용한다.

```
<p>When Dave asks HAL to open the pod bay door, HAL answers: <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q></p>
```

---

## ```<pre>```

**HTML ```<pre>``` 요소**는 미리 서식을 지정한 텍스트를 나타내며, HTML에 작성한 내용 그대로 표현한다. 텍스트는 보통 고정폭 글꼴을 사용해 렌더링하고, 요소 내 공백문자를 그대로 유지한다.

```
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
```

---

## ```<figure>```

**HTML ```<figure>``` 요소**는 독립적인 콘텐츠를 표현한다. ```<figcaption>``` 요소를 사용해 설명을 붙일 수 있다. 피규어, 설명, 콘텐츠는 하나의 단위로 참조된다.

```
<figure>
    <img src="/media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>
```

---

## ```<figcaption>```

**HTML ```<figcaption>``` 요소는** 부모 ```<figure>``` 요소가 포함하는 다른 콘텐츠에 대한 설명 혹은 범례를 나타낸다.

```
<figure>
    <img src="/media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>
```

---

## ```<hr>```

**HTML ```<hr>``` 요소**는 이야기 장면 전환, 구획 내 주제 변경 등, 문단 레벨 요소에서 주제의 분리를 나타낸다.

```
<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>

<hr>

<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
```

---

## ```<abbr>```

**HTML ```<abbr>``` 요소**는 준말 또는 머리글자를 나타낸다. 

선택 속성인 `title`을 사용하면 준말의 전체 뜻이나 설명을 제공할 수 있다.

 `title` 속성은 전체 설명만을 가져야 하며 다른건 포함할 수 없다.

```
<p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your <abbr title="HyperText Markup Language">HTML</abbr>.</p>
```

---

## ```<address>```

**HTML ```<address>``` 요소**는 가까운 HTML 요소의 사람, 단체, 조직 등에 대한 연락처 정보를 나타낸다.

```
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
</address>
```

---

## ```<cite>```

**HTML ```<cite>``` 요소**는 저작물의 출처를 표기할 때 사용하며, 제목을 반드시 포함해야 한다. 적절한 맥락 아래에서는 출처를 축약해서 표기할 수 있다.

```
<figure>
    <blockquote>
        <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
    </blockquote>
    <figcaption>First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite> by George Orwell (Part 1, Chapter 1).</figcaption>
</figure>
```

---

## ```<bdo>```: 양방향 텍스트 재정의 요소

**HTML ```<bdo>``` 요소**는 현재 텍스트의 쓰기 방향을 덮어쓰고 다른 방향으로 렌더링 할 때 사용한다.

```
<h1>Famous seaside songs</h1>

<p>The English song "Oh I do like to be beside the seaside"</p>

<p>Looks like this in Hebrew: <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span></p>

<p>In the computer's memory, this is stored as <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo></p>
```

---

## ```<b>```

**HTML ```<b>``` 요소**는 독자의 주의를 요소의 콘텐츠로 끌기 위한 용도로 사용한다. 그 외의 다른 특별한 중요도는 주어지지 않는다. 

원래는 "굵은 글씨 요소"로 불렸으며, 대부분의 브라우저도 여전히 텍스트를 굵은 글씨체로 강조한다. 그러나 `<b>`를 사용해 텍스트를 꾸미면 안된다. 대신 CSS를 사용해 굵은 글씨체를 적용하거나, ```<strong>``` 요소를 사용해 특별히 중요한 텍스트를 나타낸다.

```
<p>The two most popular science courses offered by the school are
 <b class="term">chemistry</b> (the study of chemicals and the composition of substances)
 and <b class="term">physics</b> (the study of the nature and properties of matter and energy).</p>
```

---

## ```<strong>```: 높은 중요도 요소

**HTML ```<strong>``` 요소**는 중대하거나 긴급한 콘텐츠를 나타낸다. 

보통 브라우저는 굵은 글씨로 표시한다.

```
<p>... the most important rule, the rule you can never forget,
 no matter how much he cries, no matter how much he begs:
 <strong>never feed him after midnight</strong>.
</p>
```

---

## ```<i>```

**HTML ```<i>``` 요소**는 텍스트에서 어떤 이유로 주위와 구분해야 하는 부분을 나타낸다. 

기술 용어, 외국어 구절, 등장인물의 생각 등을 예시로 들 수 있다. 

보통 기울임꼴로 표시한다.

```
<p>I looked at it and thought <i>This can't be real!</i></p>

<p><i class="latin">Musa</i> is one of two or three genera in the family <i class="latin">Musaceae</i>; it includes bananas and plantains.</p>

<p>The term <i>bandwidth</i> describes the measure of how much information can pass through a data connection in a given amount of time.</p>
```

---

## ```<em>```: 강세 요소

**HTML ```<em>``` 요소**는 텍스트의 강세를 나타낸다.

 ```<em>``` 요소를 중첩하면 더 큰 강세를 뜻하게 된다.

```
<p>Get out of bed <em>now</em>!</p>

<p>We <em>had</em> to do something about it.</p>

<p>This is <em>not</em> a drill!</p>
```

---

## ```<mark>```

**HTML ```<mark>``` 요소**는 현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타낸다.

```
<p>Search results for "salamander":</p>

<hr>

<p>Several species of <mark>salamander</mark> 
 inhabit the temperate rainforest of the Pacific Northwest.
</p>

<p>Most <mark>salamander</mark>s are nocturnal,
 and hunt for insects, worms, and other small creatures.
</p>
```

---

## ```<small>```: 덧붙임 글 요소

**HTML ```<small>```** **요소**는 덧붙이는 글이나, 저작권과 법률 표기 등의 작은 텍스트를 나타낸다. 

기본 상태에서 ```<small>```은 자신의 콘텐츠를 한 사이즈 작은 글꼴(`small`에서 `x-small` 등)로 표시하지만, 스타일을 적용한 후에도 글씨 크기가 작을 필요는 없다.

```
<p>MDN Web Docs is a learning platform for Web technologies and the software that powers the Web.</p>

<hr>

<p><small>The content is licensed under a Creative Commons Attribution-ShareAlike 2.5 Generic License.</small></p>
```

---

## ```<sub>```: 아래 첨자 요소

**HTML ```<sub>```** 요소는 활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정한다. 

아래 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 아래로 내려 렌더링 한다.

```
<p>Almost every developer's favorite molecule is
C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>,
 also known as "caffeine."
</p>
```

---

## ```<sup>```: 위 첨자 요소

**HTML ```<sup>```** 요소는 활자 배치를 위 첨자로 해야 하는 인라인 텍스트를 지정한다.

 위 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 위로 올려 렌더링 한다.

```
<p>The
 <b>Pythagorean theorem</b> is often expressed as the following equation:
</p>

<p>
<var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var>
</p>
```

---

## ```<del>```

**HTML ```<del>``` 요소**는 문서에서 제거된 텍스트의 범위를 나타낸다.

 문서나 소스 코드의 변경점 추적 등에 사용할 수 있다.

 ```<ins>``` 요소를 추가된 텍스트의 범위를 나타낼 수 있다.

```
<blockquote>
    There is <del>nothing</del> <ins>no code</ins> either good or bad, but <del>thinking</del> <ins>running it</ins> makes it so.
</blockquote>
```

---

## ```<ins>```

**HTML ```<ins>``` 요소**는 문서에 추가된 텍스트의 범위를 나타낸다.

 ```<del>``` 요소를 사용하면 삭제된 텍스트의 범위를 나타낼 수 있다.

```
<p>“You're late!”</p>
<del>
    <p>“I apologize for the delay.”</p>
</del>
<ins cite="../howtobeawizard.html" datetime="2018-05">
    <p>“A wizard is never late …”</p>
</ins>
```

---

## ```<code>```: 인라인 코드 요소

**HTML ```<code>``` 요소**는 짧은 코드 조각을 나타내는 스타일을 사용해 자신의 콘텐츠를 표시한다. 

```
<p>The
 <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array.
</p>
```

---

## ```<kbd>```: 키보드 입력 요소

**HTML ```<kbd>``` 요소**는 키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타낸다. 

```
<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
```

---

## ```<a>```

**HTML ```<a>``` 요소**(앵커 요소)는 **```href```** 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만든다. ```<a>``` 안의 콘텐츠는 링크 목적지의 설명을 **나타내야 한다**.

```html
<p>You can reach Michael at:</p>

<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:m.bluth@example.com">Email</a></li>
  <li><a href="tel:+123456789">Phone</a></li>
</ul>
```

 - ### **download**

링크로 이동하는 대신 사용자에게 URL을 저장할지 물어봅니다. 값을 지정할 수도 있고, 지정하지 않을 수도 있다.

 - ### **href**

하이퍼링크가 가리키는 URL. 링크는 HTTP 기반 URL일 필요는 없고, 브라우저가 지원하는 모든 URL 스킴을 사용할 수 있다.

 - ### **hreflang**

링크 URL의 인간 언어에 대한 힌트. 특별한 내장 기능은 없다. 가능한 값은 전역 ```lang``` 특성과 동일하다.

 - ### **ping**

하나의 스페이스로 구분하는 URL 목록. 링크를 클릭해 따라갈 경우, 브라우저가 URL 각각에 ```POST``` 요청을 전송한다. 대개 추적 용도로 사용한다.

 - ### **referrerpolicy**

URL을 가져올 때 사용할 리퍼러.

 - ### **rel**

하나의 스페이스로 구분하는, 연결한 URL과의 관계를 나타내는 링크 유형 목록.

 - ### **target**

링크한 URL을 표시할 위치. 가능한 값은 브라우징 맥락으로, 즉 탭, 창, ```<iframe>```의 이름이나 특정 키워드.
  - _self: URL을 현재 브라우징 맥락에 표시합니다. 기본값.
  - _blank: URL을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다.
  - _parent: URL을 현재 브라우징 맥락의 부모에 표시합니다. 부모가 존재하지 않으면 _self와 동일하게 행동합니다.
  - _top: URL을 최상단 브라우징 맥락(현재 맥락의 부모면서 자신의 부모가 존재하지 않는, 제일 높은 맥락)에 표시합니다. 부모가 존재하지 않으면 ```_self```와 동일하게 행동합니다.

## HTML 태그 안에서 특수문자 사용하기

> HTML안에서 특수문자를 사용할 경우 HTML태그가 깨지는 경우가 발생 할 수도 있으므로 특수문자의 경우 치환해서 사용한다.

---

## 구조를 나타내는 요소

### 컨테이너 (div, span)

- ```<div>```
    - 플로우 콘텐츠를 위한 통용 컨테이너 (블록 요소)
    - "순수" 컨테이너로서 아무것도 표현하지 않는다. 다른 요소들을 묶거나, 특정 구역을 표시하는 등의 용도로 사용한다.
    - 가로 영역을 모두 차지한다.

- ```<span>```
    - 구문 콘텐츠를 위한 인라인 컨테이너 (인라인 요소)
    - 본질적으로는 아무것도 나타내지 않는다.
    - 해당 요소만큼의 영역만 차지한다.

### 시맨틱 웹(Semantic Web)

- semantic : 의미의 의미론적인
- 요소의 의미를 고려하여, 구조를 설계하고 코드를 작성한다.
- 의미론적인 마크업을 사용하면 아래와 같은 이점이 있다.
    - 검색 엔진은 의미론적 마크업을 분석하여 페이지의 검색 랭킹에 영향을 줄 수 있는 중요한 키워드로 간주한다.
    - 시각 장애가 있는 사용자가 스크린 리더로 페이지를 탐색할 때 의미론적 마크업을 푯말로 사용할 수 있다.
    - 의미가 없는 끊임 없는 <div>들을 탐색하는 것보다, 의미 있는 코드 블록을 찾는 것이 훨씬 쉽다.
    - 개발자에게 태그 안에 채워질 데이터 유형을 제안한다.
    - 의미있는 이름짓기는 적절한 사용자 정의요소 / 구성 요소의 이름짓기를 반영한다.
- 모든 섹션을 ```<div>```로 하면, 어디부터 어디까지가 메뉴인지, 본문인지 등의 구역을 알 수 없다!

### ```<header>```, ```<footer>```

- ```<header>```
    - 소개 및 탐색에 도움을 주는 콘텐츠
    - 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있음
- ```<footer>```
    - 가장 가까운 구획 콘텐츠나 구획 루트의 푸터를 나타낸다.
    - 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담는다.

### ```<nav>```

- 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획
- 자주 쓰이는 메뉴, 목차, 색인 등에 사용된다.

### ```<aside>```

- 문서의 주요 내용과 간접적으로만 연관된 부분을 나타낸다.
- 주로 사이드바 혹은 콜아웃 박스로 표현한다.

### ```<main>```

- <body>의 주요 콘텐츠를 나타낸다.
- 주요 콘텐츠 영역은 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠로 이루어진다.
- <body> 태그 내에 딱 한 번만 사용된다. (2번 이상 사용할 수 없음)

### ```<article>```

- 문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타낸다.
- 게시판, 블로그 글, 매거진, 뉴스 기사 등

### ```<section>```

- HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용한다.
