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
        // for j -> 두번째 인덱스 위치 시킬 요소	[i, j, 0]
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
