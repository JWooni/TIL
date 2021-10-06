if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}
if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

function answer(train) {
  let stack = [];
  let num = 0;
  for (let i = 0; i < train.length; i++) {
    while (stack.isEmpty() || stack.peek() < train[i]) {
      stack.push(++num);
    }
    if (stack.peek() == train[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return true;
}
let input = [
	[1, 2, 3],
	[3, 2, 1],
	[3, 1, 2],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}
if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

function answer(str) {
  let result = [];
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(i);
    } else if (str[i] == ")") {
      if (stack.isEmpty()) {
        return [];
      }
      result.push([stack.pop(), i]);
    }
  }
  if (!stack.isEmpty()) {
    return [];
  }
  return result;
}

let input = [
  // TC: 1
  "(a+b)",
  // TC: 2
  "(a*(b+c)+d)",
	// TC: 3
  "(a*(b+c)+d+(e)",
	// TC: 4
  "(a*(b+c)+d)+e)",
	// TC: 5
  "(a*(b+c)+d)+(e*(f+g))",
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}
if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}
function answer(str) {
  let result = [];
  let stack = [];
  let dish = str.split("").sort().join("");
  let dish_index = 0;
  for (let i = 0; i < str.length; i++) {
    while (stack.isEmpty() || stack.peek() < str[i]) {
      stack.push(dish[dish_index++]);
      result.push(0);
    }
    if (stack.isEmpty() || stack.peek() > str[i]) {
      return [];
    } else {
      stack.pop();
      result.push(1);
    }
  }
  return result;
}

let input = [
  // TC: 1
  "bacd",
  // TC: 2
  "dabc",
  // TC: 3
  "edcfgbijha",
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}
if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

function answer(giraffe) {
  let result = 0;
  let stack = [];
  giraffe.push(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < giraffe.length; i++) {
    while (!stack.isEmpty() && stack.peek()["h"] < giraffe[i]) {
      result += i - stack.pop()["i"] - 1;
    }
    stack.push({ h: giraffe[i], i: i });
  }
  return result;
}

let input = [
  // TC: 1
  [10, 3, 7, 4, 12, 2],
	// TC: 2
  [7, 4, 12, 1, 13, 11, 12, 6],
	// TC: 3
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}
if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}
function answer(str) {
  let result = 0;
  let stack = [];
  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    let mark = str[i];
    switch (mark) {
      case "(":
        temp *= 2;
        stack.push(mark);
        break;
      case "[":
        temp *= 3;
        stack.push(mark);
        break;
      case ")":
        if (stack.isEmpty() || stack.peek() != "(") {
          return 0;
        }
        if (str[i - 1] == "(") {
          result += temp;
        }
        stack.pop();
        temp /= 2;
        break;
      case "]":
        if (stack.isEmpty() || stack.peek() != "[") {
          return 0;
        }
        if (str[i - 1] == "[") {
          result += temp;
        }
        stack.pop();
        temp /= 3;
        break;
    }
  }
  if (!stack.isEmpty()) {
    return 0;
  }
  return result;
}

let input = [
  // TC: 1 
	"(()[[]])",
  // TC: 2 
	"[][]((])",
  // TC: 3 
	"(()[[]])([])",
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
