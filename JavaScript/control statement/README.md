# **제어문**

- 프로그램의 순차적인 흐름을 바꾸어 주는 문장
- 조건문
    - if ~ else : 모든 행을 비교할 수 있다. (범위)

    ```jsx
    // if
    if (a === 0) {
      console.log('a is 0')
    } else if(a === 2) {
      console.log('a is 2')
    } else if (a === 4){
      console.log('a is 4')
    } else {
      console.log('rest.....')
    }
    ```

    - switch ~ case : 모든 행을 비교할 수 있다. (값이 일치할 때)

    ```jsx
    // switch
    switch(a) {
      case 0:
        console.log('a is 0')
        break
      case 2:
        console.log('a is 2')
        break
      case 4:
        console.log('a is 4')
        break
      default:
        console.log('rest.....')
    }
    ```

- 반복문
    - for : 시작과 끝을 알 때

    ```jsx
    // for (시작조건; 종료조건; 변화조건)

    const ulEl = document.querySelector('ul')

    for(let i = 0; i < 10; i++){
      const li = document.createElement('li')
      li.textContent = `list-${i + 1}`
      if((i + 1) % 2 === 0){
        li.addEventListener('click', function(){
          console.log(li.textContent)
        })
      }
      ulEl.appendChild(li)
    }
    ```

    - while : 시작과 끝을 모를 때 (최소0번 최대 조건까지 수행)

    ```jsx
    const i = 0;

    while ( i < 10 ) {
      // do something
      i++;
    }
    ```

    - do ~ while : 시작과 끝을 모를 때 (최소 1번 최대 조건까지 수행)

    ```jsx
    const i = 0;
    do {
      alert(i);
      i++;
    } while (i < 10)
    ```

- 분기문
    - break : switch ~ case, 반복문을 빠져나갈 때

    ```jsx
    const i = 0;
    while (i < 10) {
      if (i > 5) {
        break;
      }
      alert(i);
      i++;
    }
    ```

    - continue : 반복문에 수행을 건너뛸 때

    ```jsx
    const i = 0;
    while (i < 10) {
      i++;
      if (i % 2 === 0) {
        continue;
      }
      alert(i);
    }
    ```

    - return : 값을 반환하거나 코드이 실행을 멈추고 호출한 곳으로 돌아갈 때

    ```jsx
    function text(x) {
      let i = 0;

      while (i < 6) {
        if (i == 3) {
          break;
        }
        i += 1;
      }
      return i * x;
    }
    ```

    - **`return`과 `break`의 차이**
        - 만약에 함수 안에 작성된 루프 안에서 `break`가 쓰였다면, `break`를 감싸고 있는 루프를 빠져나가고 함수 밖으로는 나가지 않는다.`return`은 함수 실행을 종료하고 함수를 호출한 곳으로 실행 흐름을 옮긴다.
