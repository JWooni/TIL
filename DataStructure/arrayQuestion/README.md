# 배열 문제 풀이

## 수열 최소값 위치

- 문제 설명
    - 수열이 주어질 때, 이 수열의 있는 수 중 최소값의 위치를 모두 출력하는 프로그램을 작성하시오.
    - 입력은 자연수로된 배열을 받고, 시작 위치는 0으로 계산하여 최소값의 위치를 배열로 반환한다.
    - 모든 수는 100이하의 자연수로 입력 받는다.

```jsx
function answer(nums) {
    let result = [];
    let min = Number.MAX_SAFE_INTEGER;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) { 
        if (min > nums[i]) {
            min = nums[i]; 
        }
    }

    for (let i = 0; i < nums.length; i++) { 
        if (min == nums[i]) {
            result[count++] = i; 
        }
    }
    return result; 
}
```

## 체스 세트

- 문제 설명
    - 오래된 창고에서 체스판과 체스 기물을 발견했다.
    - 불행히도 기물 별 개수가 부족하거나 많아, 완전한 한 세트를 이루고 있지 못하고 있어 보인다.
    - 게임을 하기 위해 부족하거나 많은 기물의 개수를 계산하여 반환하는 프로그램을 제작하시오.
    - 기물의 개수는 배열 형태로 아래와 같이 king부터 pawsn순으로 들어오며 한 게임을 하귀 위해 필요한 기물의 개수를 아래와 같다.
        - 순서 및 기물 필요 개수 : king(1), queen(1), rooks(2), bishops(2), knights(2), pawns(8)

```jsx
function answer(chess) {
    let result = [];
    let refer = [1, 1, 2, 2, 2, 8];
    let count = 0;
    for (let i = 0; i < chess.length; i++) { 
        result[count++] = refer[i] - chess[i];
    }
    return result;
}
```

## 두 수 최대합

- 문제 설명
    - 수열이 주어질 때, 이 중 두 개의 수를 선택하여 최대 합이 나올 수 있도록 프로그램을 제작하시오.
    - 입력은 정수로 된 배열을 받고,최대합이 나올 수 있는 두 수를 배열 형태로 반환한다.
    - 배열로 입력되는 정수는 10 ~ 20개 사이이며, 정수의 범위는 -20 ~ +20 사이의 값이 입력된다.

```jsx
function answer(nums) {
    let result = [];
    result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]]; 
    
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > result[0]) { 
            result[1] = result[0]; result[0] = nums[i];
        } else if (nums[i] > result[1]) { 
            result[1] = nums[i];
        } 
    }
    return result; 
}
```

## 일곱 난장이

- 문제 설명
    - 일터에 나갔던 난장이 9명이 와서는 모두 자기가 일곱 난장이 중 하나라고 우기고 있다.
    - 모든 난장이의 가슴에는 숫자가 표시된 배치가 있는데, 다행히도 일곱 난장이의 배지에 표시된 숫자의 합이 100이라는 단서로 입곱 난장이를 분별할 수 있디ㅏ. 일곱 난장이를 분별하는 프로그램을 작성하시오.
    - 배지 값은 100 이하 자연수로 들어오며, 일곱 난장이의 배지 값을 기존 순서대로 배열에 넣어 반환한다.

```jsx
function answer(dwarf) {
    let result = []; // calc sum
    let sum = 0;

    for (let i = 0; i < dwarf.length; i++) { 
        sum += dwarf[i];
    }
    sum -= 100;
    
    let faker = [];
    
    for (let i = 0; i < dwarf.length; i++) {
        for (let j = i + 1; j < dwarf.length; j++) { 
            if (sum == dwarf[i] + dwarf[j]) {
                faker[0] = i; 
                faker[1] = j; 
                break;
            } 
        }
    if (faker.length != 0) {
        break;
    } 
}

    let count = 0;
    for (let i = 0; i < dwarf.length; i++) { 
        if (faker[0] != i && faker[1] != i) {
            result[count++] = dwarf[i]; 
        }
    }
    return result;
}
```

## 나무 그리기

- 문제 설명
    - 조카가 나무 그리기를 어려워 하고 있다. 어린 조카를 위해 나무를 그려주는 프로그램을 만들어주자.
    - 자연수를 높이로 입력 받고 대칭형 형태로 나무 문자열을 만들어 반환한다.
    - 각 행 별로 개행 문자(\n)를 넣어주면서 *을 찍으며 출력 값 형태로 나무를 그려준다.

```jsx
function answer(height) { 
    let str = "\n";
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height - i - 1; j++) { 
            str += " ";
        }   
        for (let j = 0; j < i * 2 + 1; j++) { 
            str += "*";
        }
        str += "\n"; 
    }
    return str; 
}
```

## Two Sum

- 문제 설명
    - 배열과 정수 값이 주어질 때, 배열 내 두 값을 합하여 정수 값을 만들 수 있도록 두개의 index를 반환하는 함수를 작성하시오.
    - 각 입력에 정확히 하나의 솔루션이 있다고 가정하고, 동일한 요소를 두 번 사용하지 않는다.
    - 배열의 index는 오름차순으로 정렬하여 반환한다.

```jsx
function answer(nums, target) {
    for (let i = 0; i < nums.length; i++) { 
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == target) { 
                return [i, j];
            }
        }
    }
    return []; 
}
```

## OX퀴즈

- 문제 설명
    - 네카라쿠배 대학교에서 OX퀴즈 쇼를 진행한다. 정답을 맞췄을 경우 문제당 1점을 부여하며, 연속적으로 맞출 경우 연속한 정답 개수 만큼의 가산점을 부여해준다.
    - 진행자를 위해 채점표를 보고 점수를 산출해주는 프로그램을 제작하시오.
    - 배열 형태의 채점 값이 1(정답), 0(오답)으로 입력되며, 점수의 합계를 반환한다.

```jsx
function answer(mark) {
    let result = 0; let score = 0;
    for (let i = 0; i < mark.length; i++) { 
        if (mark[i]) {
            result += ++score; 
        } else {
            score = 0; 
        }
    }
    return result;
}
```

## 벽돌 옮기기

- 문제 설명
    - 새로 온 알바생이 벽돌의 높이를 맞추지 않고 벽을 쌓아 놓았다.
    - 관리자를 위해 몇 개의 벽돌을 옮겨야 벽돌의 높이가 같아질 수 있을지 구해주는 프로그램을 제작하시오.
    - 입력은 배열 형태의 정수이며, 같은 높이를 맞추기 위해 옮겨야 하는 벽돌의 개수를 반환한다.
    - 단, 입력으로 들어오는 배열은 남는 벽돌없이 높이가 딱 나눠 떨어지도록 들어온다.

```jsx
function answer(blocks) { 
    let result = 0;
    let avg = 0;
    
    for (let i = 0; i < blocks.length; i++) { 
        avg += blocks[i];
    }
    avg /= blocks.length;

    for (let i = 0; i < blocks.length; i++) { 
        if (blocks[i] > avg) {
        result += blocks[i] - avg; 
        }
    }
    return result; 
}
```

## 숫자 빈도수 구하기

- 문제 설명
    - 두 자연수 M, N을 입력 받아, M부터 N까지 각 자리수의 빈도 수를 함하는 프로그램을 제작하시오.
    - 예를 들어 129와 137이 주어졌을 때, 129, 130, 131, 132, 133, 134, 135, 136, 137 숫자가 나오고 이 숫자들의 자릿수 별 숫자 빈도수를 계산하여, 0부터 9까지의 빈도수 값을 반환한다.
    - 입력 값은 M, N은 10,000 이하의 자연수이며, 0부터 9까지의 자릿수 별 빈도수를 배열 형태로 반환한다.

```jsx
function answer(s, e) {
    let result = []; // init
    for (let i = 0; i < 10; i++) { 
        result[i] = 0;
    }

    for (let i = s; i <= e; i++) { 
        num = i;
    while (num != 0) { 
        result[num % 10]++; num /= 10;
        num = parseInt(num); 
        }
    }
    return result; 
}
```

## 달팽이 만들기

- 문제 설명
    - 조카를 잠재우기 위해 달팽이 모양으로 숫자를 하나씩 적어주는 프로그램이 필요하게 되었다.
    - 이를 위해 정사각형 모양의 달팽이 2차원 배열을그려주는 함수를 작성하시오.
    - 입력한 크기의 정사각형으로, 시계바향으로 돌면서 숫자를 채워 2차원 배열을 반환한다.

```jsx
function answer(length) { 
    let result = [];

    for (let i = 0; i < length; i++) {
        result[i] = []; 
    }

    let direction = 1; let x, y, num; 
    x = y = num = 0; 
    x--;

    while (1) {
        for (let i = 0; i < length; i++) {
            x += direction; 
            result[y][x] = ++num;
        } 
        length--;
        if (length <= 0) {
            break;
        }
        for (let j = 0; j < length; j++) {
            y += direction; 
            result[y][x] = ++num;
        }
        direction *= -1; 
    }
    return result;
}
```
