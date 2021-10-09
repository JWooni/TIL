# 딕셔너리 & 해시테이블 문제풀이

- 출석 체크
    - 문제 설명
        - 연말이 다가와 학생들에게 개근상을 주려고 한다. 학생별 1학기 개근현황과 2학기 개근현황을 파악하고 있어, 이 정보를 바탕으로 학생 별 올해 1년 동안 개근을 했는지 판단하는 프로그램을 제작하시오.
        - 개근상은 A 학생이 1학기와 2학기 모두 출석했을 경우에만 수여한다.
        - 입력은 1학기 개간한 학생, 2학기 개근한 학생 정보가 배열로 주어지며, 1년 전체 개근한 학생을 1학기 개근한 학생 순으로 정렬하여 배열 형태로 반환한다.

```jsx
function Dictionary(items = {}) {
  this.items = items;
}
Dictionary.prototype.has = function (key) {
  return this.items.hasOwnProperty(key);
};
Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

function answer(class_1, class_2) {
  let result = [];
  let tmp = new Dictionary();
  for (let i = 0; i < class_2.length; i++) {
    tmp.set(class_2[i], true);
  }
  for (let i = 0; i < class_1.length; i++) {
    if (tmp.has(class_1[i])) {
      result.push(class_1[i]);
    }
  }
  return result;
}

let input = [
  // TC: 1
  [
    ["Kali", "Oliver", "Naomi"],
    ["Oliver", "Naomi", "Maya"],
  ],
  // TC: 2
  [
    ["Roxy", "Olga", "Kara", "Nana"],
    ["Oliver", "Roxy", "Kara", "Nana", "Maya"],
  ],
  // TC: 3
  [
    ["Roxy", "Ravi", "Nana", "Rei", "Karis", "Mana", "Naomi"],
    ["Olga", "Nana", "Rei", "Oliver", "Kali", "Rei", "Kara"],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
```

- 숫자 카드
    - 문제 설명
        - 카드 게임을 하기 위해 -10 ~ 10 사이의 숫자 카드를 N장 뽑았다.
        - 이 때 M개 수를 갖는 숫자 카드가 몇 개 있는지 계산해주는 프로그램 작성하시오.
        - 숫자 카드 범위는 -10 ≤ 카드 ≤ 10이며, N과 M의 범위는 3 ≤ N, M ≤ 20이다.
        - 입력은 숫자 카드 범위를 만족하는 N과 M배열이 순차적으로 들어오며 M숫자 카드를 몇 개 갖고 있는지를 순차적으로 배열에 기록하여 반환한다.

```jsx
const HASH_SIZE = 21;
function HashTable() {
  this.table = new Array(HASH_SIZE);
}
HashTable.prototype.hashCode = function (key) {
  return (key + 10) % HASH_SIZE;
};
HashTable.prototype.put = function (key) {
  let index = this.hashCode(key);
  if (this.table[index] === undefined) {
    this.table[index] = 0;
  }
  this.table[index]++;
};
HashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  return this.table[index] === undefined ? 0 : this.table[index];
};

function answer(card, select) {
  let result = [];
  let ht = new HashTable();
  for (let i = 0; i < card.length; i++) {
    ht.put(card[i]);
  }
  for (let i = 0; i < select.length; i++) {
    result.push(ht.get(select[i]));
  }
  return result;
}

let input = [
  // TC: 1
  [
    [-6, -1, 6, 1, 1],
    [-2, 1, 3],
  ],
  // TC: 2
  [
    [7, 4, 3, 10, 10, 10, -10, -10, 7, 3],
    [10, 9, -5, 4, 6, -10],
  ],
  // TC: 3
  [
    [5, -3, -7, 10, -3, 4, 8, 4, -3, 3, 8, -2, -9, -8, -1],
    [4, 5, 1, 10, -2, -3, 3, -8],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
```

- 백신 접종
    - 문제 설명
        - 코로나 백신이 개발되어 네카라쿠배 회사는 전 직원들에게 백신 주사를 접종하기로 하였다. 접종의 혼란을 줄이기 위하여, 부스 배정기(Hash 함수)를 사용하여 직원 이름 별로 접종할 부스를 사전에 예약 시켰으나, 몇몇 직원이 오지 않아 남는 부스가 생겨나게 되었다. 코로나 확산을 빠르게 막기 위해, 온 순서대로 부스 배정을 시키고, 사용 중이라면 다음 번호 부스로 배정 시킬 수 있도록 프로그램을 제작하시오.
        - 예를 들어, Alice는 1번, Bob는 3번에 배정되었고 2번 부스가 비어있는 상황에, 1번으로 배정 받은 다음 대기자 Tom은 2번에 배정되어 백신 주사를 맞게 된다. 구현은 템플릿 코드를 참고하며, 입력은 직원들 이름으로 된 배열이 주어지고, 직원 별 주사를 맞을 부스 번호를 기록해 반환한다. (부스 번호 1번부터 시작)

```jsx
HashTable.prototype.put = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;
  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, index + 1);
      this.length++;
      return true;
    }
    index = (index + 1) % this.size;
  } while (index !== startIndex);
  return false;
};
HashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;
  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }
    index = (index + 1) % this.size;
  } while (index !== startIndex);
  return undefined;
};

function answer(name) {
  let result = [];
  let ht = new HashTable(name.length);
  for (let i = 0; i < name.length; i++) {
    ht.put(name[i]);
  }
  for (let i = 0; i < name.length; i++) {
    result.push(ht.get(name[i]));
  }
  return result;
}

let input = [
  // TC: 1
  ["Mana", "Naomi", "Lelia", "Morris", "Madonna"], 
	
	// TC: 2
  ["Oliver", "Mabel", "Nero", "Rei", "Kara", "Jordan", "Nami"], 
	
	// TC: 3
  [
    "Ruby",
    "Robin",
    "Jordan",
    "Kori",
    "Rei",
    "Madonna",
    "Justin",
    "Maya",
    "Lakia",
    "Kali",
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
```
