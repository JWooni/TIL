# 선행

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

**HTML ```<ol>``` 요소**는 정렬된 목록을 나타낸다. 보통 숫자 목록으로 표현한다.

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

**HTML ```<ul>``` 요소**는 정렬되지 않은 목록을 나타낸다. 보통 불릿으로 표현한다.

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

**HTML ```<li>``` 요소**는 목록의 항목을 나타낸다. 반드시 정렬 목록(```<ol>```), 비정렬 목록(```<ul>```, 혹은 메뉴(```<menu>```) 안에 위치해야 한다. 메뉴와 비정렬 목록에서는 보통 불릿으로 항목을 나타내고, 정렬 목록에서는 숫자나 문자를 사용한 오름차순 카운터로 나타낸다.

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

**HTML ```<dl>``` 요소**는 설명 목록을 나타낸다. ```<dl>```은 ```<dt>```로 표기한 용어와 ```<dd>``` 요소로 표기한 설명 그룹의 목록을 감싸서 설명 목록을 생성한다. 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용한다.

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

**HTML ```<dt>``` 요소**는 설명 혹은 정의 리스트에서 용어를 나타낸다. ```<dl>``` 요소 안에 위치해야 한다. 보통 ```<dd>``` 요소가 뒤따르지만, 여러 개의 ```<dt>``` 요소를 연속해 배치하면 바로 다음 ```<dd>``` 요소로 한꺼번에 서술할 수 있다.

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

**HTML ```<dd>``` 요소**는 정의 목록 요소(```<dl>```)에서 앞선 용어(```<dt>```)에 대한 설명, 정의, 또는 값을 제공한다.

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

**HTML `<table>` 요소**는 행과 열로 이루어진 표를 나타낸다.

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

**HTML 표 행 요소** (```<tr>```) 테이블의 셀의 행을 정의. ```<td>```및 ```<th>```요소 가 혼합될 수 있다 .

---

## ```<td>```

*Table cell* HTML 요소 (**```<td>```**) 는 데이터를 포함하는 표의 셀을 정의한다.

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

HTML의 ```<th>```요소는 테이블 셀 그룹의 헤더로 셀을 정의한다.

---

## ```<thead>```

HTML 표 헤드 요소 ( ```<thead>```) 테이블의 컬럼의 머리를 정의하는 행 집합을 정의한다.

---

## ```<tbody>```: 표 본문 요소

**HTML ```<tbody>```** 요소는 표의 여러 행(```<tr>```)을 묶어서 표 본문을 구성한다.

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

**HTML ```<caption>``` 요소**는 표의 설명 또는 제목을 나타낸다.

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
