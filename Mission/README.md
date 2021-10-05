# Mission2

## 요구사항

1. 본인이 생각했을 때, 접근성이 좋지 않은 테이블이 있는 웹페이지를 선정 (현재 서비스 중인 웹페이지로 선정)
2. 웹표준 준수 및 웹접근성 관점에서 기존 서비스의 문제점 분석
3. 해상 이슈를 WCAG 가이드라인에 맞춰 수정 계획 선정
4. 웹접근성 관련 체크리스트 작성
5. HTML/CSS를 활용하여 구현(자바스크립트는 선택사항)
6. 문법 검사 결과 제출
7. 라이트하우스에서 접근성 및 SEO 관련 분석 리포트 제출
8. 프로젝트 완료 후기(시행착오 및 성장기)

## 해결

1. 본인이 생각했을 때, 접근성이 좋지 않은 테이블이 있는 웹페이지를 선정 (현재 서비스 중인 웹페이지로 선정)
    
    [https://www.kunyoung.com/customer/cust_04.php](https://www.kunyoung.com/customer/cust_04.php)
    

1. 웹표준 준수 및 웹접근성 관점에서 기존 서비스의 문제점 분석
    - 페이지 전체를 테이블로 구현
    - 테이블안에 테이블을 남발
    - <th>태그 사용하지 않음
    - scope 속성을 사용하지 않아 유지보수성이 떨어짐
    - <caption>태그를 사용하지 않아 테이블의 제목 및 정보를 알 수 없어 유지보수성이 떨어짐

1. 해상 이슈를 WCAG 가이드라인에 맞춰 수정 계획 선정
    - <div>태그를 사용하여 영역을 구분한다.
    - 각 테이블들을 분리시킨다.
    - <thead>태그와 <tbody>태그를 사용하여 구조를 명확하게 한다.
    - <th>태그를 사용하고 scope 속성으로 행/열을 구분한다.
    - <caption>을 사용하여 해당 테이블과 정보를 명시한다.
    
2. 웹접근성 관련 체크리스트 작성
    - 콘텐츠는 논리적인 순서(선형구조)로 제공되는가?
    - 데이터 table 속성에는 summary, caption 정보가 올바르게 제공되었는가?
    - 데이터 테이블인 경우 thead, tbody, th 으로 그룹핑되어 있는가?
    - 표의 제목 속성인 th에 알맞은 scope를 제공했는가? 가로열 th는 col / 세로열 th는 row
    - 태그의 열고 닫음이 올바르게 되어 있는가?
    - 태그의 속성이 중첩되어 적용되고 있지 않는가?
    - 한 요소에 중복된 속성 선언이 있는가?
    - 한 페이지에 중복된 id 속성값 선언 여부를 체크한다.
    
3. HTML/CSS를 활용하여 구현(자바스크립트는 선택사항)
    
    [구현](https://compassionate-wing-223684.netlify.app/)
    
4. 문법 검사 결과 제출
    
    [문법 검사 결과](https://validator.w3.org/unicorn/check?ucn_uri=https%3A%2F%2Fcompassionate-wing-223684.netlify.app%2F&ucn_lang=ko&ucn_task=conformance#)
    
5. 라이트하우스에서 접근성 및 SEO 관련 분석 리포트 제출
    
    [접근성 및 SEO 관련 분석 리포트](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fcompassionate-wing-223684.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext)
    
6. 프로젝트 완료 후기(시행착오 및 성장기)
    
    개인 프로젝트를 할 때에 웹 표준과 웹 접근성에 대해 많이 놓치고 있었다는 것을 깨달았습니다. 또한 웹 표준과 웹 접근성의 중요성과 유지 보수에도 많은 도움이 될 수 있다고 생각하는 계기가 된 유익한 시간이었습니다.
