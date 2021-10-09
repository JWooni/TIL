// 출석 체크
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

// 숫자 카드
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

//  백신 접종
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
