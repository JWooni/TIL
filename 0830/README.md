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

```
<br>
<hr>
<img src="https://image.url/images/icon.jpg">
<meta charset="utf-8">
<input type="text" name="name">
```
