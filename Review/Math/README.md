# Math 복습
## 기본 수학 이론

- 알고리즘 복잡도
    - 입력 크기의 값에 대해 단위 연산을 몇 번 수행하는지 계산하여, 알고리즘의 수행시간을 평가하는 방법
    - 3가지 점근적 표현법
        - 빅오 : 최악의 상황을 고려하여 성능 측정 결과 표현
        - 세타 : 평균적인 경우에서의 성능 측정 결과 표현
        - 오메가 : 최선의 상황일 때의 성능 측정 결과 표현
- 경우의 수 (순열과 조합)
    - 어떤 사건 혹은 일이 일어날 수 있는 경우의 가짓수를 수로 표현
    - 완전 탐색으로 경우의 수를 푸는 알고리즘
        - 순열
        - 조합
        - 중복 순열
- 점화식
    - 점화식(재귀식)이란 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타낸 관계식
    - 대표적인 점화식
        - 등차 수열
        - 등비 수열
        - 팩토리얼
        - 피보나치 수열


## 알고리즘 평가 지표

- 정확성
- 작업량
- 메모리 사용량
- 최적성
- 효율성
    - 시간 복잡도
        - 입력 크기의 값에 대해 단위 연산을 몇 번 수행하는지 계산하여, 알고리즘의 수행시간을 평가하는 방법
        - 3가지 점근적 표현법
            - 빅오 : 최악의 상황
            - 세타 : 평균적인 경우
            - 오메가 : 최선의 상황
    - 공간 복잡도
    

## 경우의 수

- 어떤 사건 혹은 일이 일어날 수 있는 경우의 가짓수를 수로 표현
- 일상 생활에서의 경우의 수
    - 주사위
    - 윷
    - 가위바위보
    - 동전
- 완전탐색으로 경우의 수를 푸는 알고리즘
    - 순열 : 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 있게 나열하는 경우의 수
    - 조합 : 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 없이 나열하는 경우의 수
    - 중복 순열 : 서로 다른 n개의 원소 중에서 r개를 중복 있게 골라 순서에 상관 있게 나열하는 경우의 수
    

## 순열

- 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 있게 나열하는 경우의 수
- 예제
    - for문 이용
    
    ```jsx
    // for문
    let input = ["a", "b", "c"];
    let count = 0;
    
    function permutation(arr) {
      // for i -> 첫번째 인덱스 위치 시킬 요소 a, b, c [i, 0, 0]
      for (let i = 0; i < arr.length; i++) {
        // for j -> 두번째 인덱스 위치 시킬 요소 [i, j, 0]
        for (let j = 0; j < arr.length; j++) {
          if (i == j) {
            continue;
          }
          // for k -> 세번째 인덱스 위치 시킬 요소 [i, j, k]
          for (let k = 0; k < arr.length; k++) {
            if (i == k) {
              continue;
            }
            if (j == k) {
              continue;
            }
    
            console.log(arr[i], arr[j], arr[k]);
            count++;
          }
        }
      }
    }
    
    permutation(input);
    console.log(count);
    ```
    
    - 재귀
    
    ```jsx
    let input = ["a", "b", "c"];
    let count = 0;
    
    function permutation(arr, s, r) { // s는 시작할 위치, r은 끝낼 위치
    	// 1. 재귀함수를 멈춰야할 조건
    	if (s == r) {
    		count++;
    		console.log(arr.join(" "));
    		return;
    	}
    
    	// 2. 재귀를 돌면서 변경되어야 될 부분 / 메인 로직
    	for (let i = s; i < arr.length; i++) {
    	  [arr[s], arr[i]] = [arr[i], arr[s]];	// swap
    	  permutation(arr, s + 1, r);
    	  [arr[s], arr[i]] = [arr[i], arr[s]];	// 원상복귀
              /*
              // abc
              s = 0, r = 2, i = 0, 값 = ["a"]
              s = 1, r = 2, i = 1, 값 = ["a", "b"]
              s = 2, r = 2, 값 = ["a", "b", "c"], count++, return
              원복 arr = ["a", "b",]

              // acb
              s = 1, r = 2, i = 2, 값 = ["a", "c", "b"]
              s = 2, r = 2, 값 = ["a", "c", "b"], count++, return
              원복 arr = ["a", "b", "c"]

              // bac
              s = 0, r = 2, i = 1, 값 = ["b", "a"]
              s = 1, r = 2, i = 1, 값 = ["b", "a"]
              s = 2, r = 2, 값 = ["b", "a", "c"], count++, return
              원복 arr = ["b", "a", "c"]

              // bca
              s = 1, r = 2, i = 2, 값 = ["b", "c", "a"]
              s = 2, r = 2, 값 = ["b", "c", "a"], count++, return
              원복 arr = ["b", "a", "c"]

              // cba
              s = 0, r = 2, i = 2, 값 = ["c" ,"a" ,"b"]
              s = 1, r = 2, i = 2, 값 = ["c" ,"b" ,"a"]
              s = 2, r = 2, 값 = ["c" ,"b" ,"a"], count++, return
              원복 arr = ["c", "a", "b"]

              // cab
              s = 2, r = 2, i = 2, 값 = ["c", "a", "b"], count++, return
              */
    	}
    }
    
    permutation(input, 0, 2);
    console.log(count);
    ```

## 조합

- 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 있게 나열하는 경우의 수
- 예제
    - for문
    
    ```jsx
    let input = [1, 2, 3, 4];
    let count = 0;
    function combination(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          count++;
          console.log(arr[i], arr[j]);
        }
      }
    }
    combination(input);
    console.log(count);
    ```
    
    - 재귀
    
    ```jsx
    let input = [1, 2, 3, 4];
    let output = [];
    let count = 0;
    function combination(arr, data, s, idx, r) {
      if (s == r) {
        count++;
        console.log(data);
        return;
      }
      for (let i = idx; arr.length - i >= r - s; i++) {
        data[s] = arr[i];
        combination(arr, data, s + 1, i + 1, r);
      }
    }
    combination(input, output, 0, 0, 2);
    console.log(count);
    ```

## 점화식

- 점화식(재귀식)이란 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타낸 관계식
- 대표적인 점화식
    - 등차 수열 : F(n) = F(n - 1) + a
    - 등비 수열 : F(n) = F(n - 1) * a
    - 팩토리얼 : F(n) = F(n - 1) + n
    - 피보나치 수열 : F(n) = F(n - 1) + F(n - 2)

### 등차수열

- 예제
    - for문
    
    ```jsx
    let result;
    
    function forloop(s, t, number) {
    	let acc = 0;
    
    	for (let i = 1; i <= number; i++) {
    		if (i == 1) {
    			acc += s;
    		} else {
    			acc += t;
    		}
    		console.log(i, acc);
    	}
    	return acc;
    }
    
    result = forloop(3, 2, 5);
    console.log(result);
    ```
    
    - 재귀
    
    ```jsx
    let result;
    
    function recursive(s, t, number) {
    	// 멈출 조건
    	if (number == 1) {
    		return s;
    	}
    
    	// 반복할 코드
    	return recursive(s, t, number - 1) + t;
    }
    
    // number : 5 recursive(s, t, 4) + 2 == 11
    // number : 4 recursive(s, t, 3) + 2 == 9
    // number : 3 recursive(s, t, 2) + 2 == 7
    // number : 2 recursive(s, t, 1) + 2 == 5
    // number : 1 => 3
    
    result = recursive(3, 2, 5);
    console.log(result);
    ```
    

### 등비수열

- 예제
    - for문
    
    ```jsx
    let result;
    
    function forloop(s, t, number) {
      let acc = 1;
      for (let i = 1; i <= number; i++) {
        if (i == 1) acc *= s;
        else acc *= t;
        console.log(i, acc);
      }
      return acc;
    }
    result = forloop(3, 2, 5);
    console.log(result);
    ```
    
    - 재귀
    
    ```jsx
    let result;
    
    function recursive(s, t, number) {
      if (number == 1) {
        return s;
      }
      return recursive(s, t, number - 1) * t;
    }
    result = recursive(3, 2, 5);
    console.log(result); // output: 48
    ```
    

### 팩토리얼

- 예제
    - 재귀
    
    ```jsx
    // 재귀
    let result;
    
    function recursive(number) {
    	if (number == 1) {
    		return 1;
    	}
    
    	// 5 4 3 2 1
    	return recursive(number - 1) * number;
    
    }
    
    result = recursive(5)
    console.log(result);
    ```
    

### 피보나치

- 예제
    - 재귀
    
    ```jsx
    let result;
    
    function recursive(number) {
    	if (number == 1|| number == 0) {
    		return number;
    	}
    
    	// f(n) = f(n - 1) + f(n - 2)
    	return recursive(number - 1) + recursive(number - 2);
    }
    
    result = recursive(5);
    console.log(result);
    ```

## 기본 문제 풀이

### 등차수열의 항 찾기

- 문제 설명
    - 입력된 값을 통해서 등차 수열의 몇 번째 항인지를 구하는 프로그램을 작성하시오.
    - 입력은 초항 a, 인접한 차이 d, 찾는 항의 수 n이 주어지며, n값에 해당하는 항 번호를 반환한다.
    - 단, 만약 항 번호가 없을 시에는 -1를 반환한다.
    - 예를 들어 a = 1, d = 2, n = 7이 주어졌을 때
    - f(1) = 1, f(2) = 3, f(3) = 5, f(4) = 7가 되므로 n = 7에 해당하는 항인 4를 반환한다.
    
    ```jsx
    function answer(a, d, n) {
      let index = -1;
      if ((n - a) % d == 0) {
        index = (n - a) / d + 1;
      }
      return index;
    }
    
    /* main code */
    let input = [
      // TC: 1
      [1, 2, 7],
    
      // TC: 2
      [2, 3, 10],
    
      // TC: 3
      [3, 5, 23],
    ];
    for (let i = 0; i < input.length; i++) {
      console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
    }
    ```

### 잃어버린 카드 찾기

- 문제 설명
    - 등차 수열을 이루는 4개의 숫자 카드를 받았는데, 한 카드를 잃어버렸다. 잃어버린 카드를 찾아주자.
    - 입력은 자연수로 된 3개의 숫자 카드를 받고, 한 가지의 잃어버린 카드의 수를 반환한다.
    - 단, 잃어버린 카드는 가운데 숫자 카드로 한정한다.
    - 예를 들어 1, 7, 10을 입력 받았을 때
    - 초항이 1이고, 두 수의 차가 3인, 등차 수열 1, 4, 7, 10을 찾아 4를 반환하도록 한다.
    
    ```jsx
    function answer(a, b, c) {
      let number = 0;
      // sort
      num = [a, b, c];
      num.sort((x, y) => x - y);
    
      // get d
      let d = 0;
      for (let i = 1; i < num.length; i++) {
        d += num[i] - num[i - 1];
      }
      d /= num.length; 
    	
    	// get location
      let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1; 
    	
    	// calc number
      number = num[0] + d * index;
    
      return number;
    }
    
    /* main code */
    let input = [
      // TC: 1
      [1, 7, 10],
      // TC: 2
      [3, 8, 18],
      // TC: 3
      [2, 5, 11],
    ];
    
    for (let i = 0; i < input.length; i++) {
      console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
    }
    ```
