// 신규 아이디 추천
function solution(new_id) {
  let answer = "";

  new_id = new_id.toLowerCase(); // case 1

  let dot = false;
  for (let i = 0; i < new_id.length; i++) {
    if (answer.length === 15) break; // case 6

    let c = new_id[i];

    // case 2, 3, 4
    if ("a" <= c && c <= "z");
    else if ("0" <= c && c <= "9");
    else if (c === "-" || c === "_");
    else if (c === "." && dot) {
      dot = false;
      answer += c;
      continue;
    } else continue;

    dot = true;
    answer += c;
  }

  // case 4, 6
  if (answer[answer.length - 1] === ".") {
    answer = answer.substr(0, answer.length - 1);
  }

  // case 5
  if (answer === "") {
    answer = "a";
  }
  // case 7
  if (answer.length <= 2) {
    answer += answer[answer.length - 1].repeat(3 - answer.length);
  }
  return answer;
}

// 메뉴 리뉴얼
function combination(db, arr, data, s, idx, r) {
  if (s === r) {
    let str = data.join("");
    if (db[str]) db[str]++;
    else db[str] = 1;
    return;
  }
  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination(db, arr, data, s + 1, i + 1, r);
  }
}

function solution(orders, course) {
  let answer = [];
  let sort_orders = [];
  for (let i = 0; i < orders.length; i++)
    sort_orders.push(orders[i].split("").sort().join(""));
  for (let j = 0; j < course.length; j++) {
    let db = {};
    let output = [];
    for (let i = 0; i < sort_orders.length; i++)
      combination(db, sort_orders[i], output, 0, 0, course[j]);
    if (Object.keys(db).length !== 0) {
      let max = Math.max(...Object.values(db));
      if (max > 1) {
        let result = Object.keys(db).reduce(function (r, e) {
          if (db[e] === max) r.push(e);
          return r;
        }, []);
        answer = answer.concat(result);
      }
    }
  }
  return answer.sort();
}

// 순위 검색
const cloneObj = (obj) => JSON.parse(JSON.stringify(obj));
function binarySearch_loop(arr, n) {
  let lowIndex = 0;
  let midIndex = 0;
  let highIndex = arr.length - 1;
  while (lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (n <= arr[midIndex]) highIndex = midIndex - 1;
    else lowIndex = midIndex + 1;
  }
  if (lowIndex === arr.length) return -1;
  return lowIndex;
}
function solution(info, query) {
  let answer = [];
  // sorting
  let sorted_info = [];
  for (let n of info) {
    let t = n.split(" ");
    sorted_info.push([t[0], t[1], t[2], t[3], Number(t[4])]);
  }
  sorted_info.sort((l, r) => r[4] - l[4]); // make db
  let set = { cpp: 0, java: 0, python: 0 };
  let category = [
    ["backend", "frontend"],
    ["junior", "senior"],
    ["chicken", "pizza"],
  ];
  for (let i = 0; i < category.length; i++) {
    let t = {};
    t[category[i][0]] = cloneObj(set);
    t[category[i][1]] = cloneObj(set);
    set = cloneObj(t);
  }
  let db = {};
  for (let i = 0; i < sorted_info.length; i++) {
    let t = sorted_info[i];
    set[t[3]][t[2]][t[1]][t[0]]++;
    db[t[4]] = cloneObj(set);
  }
  // query
  let db_index = Object.keys(db);
  for (let i = 0; i < query.length; i++) {
    let t = query[i].split(" ");
    // binary search
    let index = binarySearch_loop(db_index, Number(t[7]));
    if (index === -1) {
      answer.push(0);
      continue;
    }
    let category = [];
    if (t[6] === "-") category.push(["chicken", "pizza"]);
    else category.push([t[6]]);
    if (t[4] === "-") category.push(["junior", "senior"]);
    else category.push([t[4]]);
    if (t[2] === "-") category.push(["backend", "frontend"]);
    else category.push([t[2]]);
    if (t[0] === "-") category.push(["cpp", "java", "python"]);
    else category.push([t[0]]);
    let pl = [db[db_index[index]]];
    let tl;
    for (let c of category) {
      tl = [];
      for (let item of c) for (let p_item of pl) tl.push(p_item[item]);
      pl = tl;
    }
    // counting
    answer.push(pl.reduce((acc, v) => acc + v, 0));
  }
  return answer;
}

// 합승 택시 요금
function solution(n, s, a, b, fares) {
  let answer = 0;
  let mat = [];
  for (let i = 1; i <= n; i++) {
    mat[i] = [];
    for (let j = 1; j <= n; j++) {
      mat[i][j] = Number.MAX_SAFE_INTEGER;
    }
  }
  for (let i = 1; i <= n; i++) mat[i][i] = 0;
  for (let v of fares) {
    mat[v[0]][v[1]] = v[2];
    mat[v[1]][v[0]] = v[2];
  }
  for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
      for (let k = 1; k <= n; k++)
        mat[j][k] = Math.min(mat[j][k], mat[j][i] + mat[i][k]);
  answer = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= n; i++)
    answer = Math.min(answer, mat[s][i] + mat[i][a] + mat[i][b]);
  return answer;
}

// 광고 삽입
function str2Sec(time) {
  let [h, m, s] = time.split(":").map((n) => Number(n));
  return h * 3600 + m * 60 + s;
}
function sec2Str(n) {
  let h = Math.floor(n / 3600);
  let m = Math.floor(n / 60) % 60;
  let s = n % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

function solution(play_time, adv_time, logs) {
  let play = str2Sec(play_time);
  let adv = str2Sec(adv_time);
  let view = Array(play).fill(0);
  for (let s of logs) {
    let start = str2Sec(s.substr(0, 8));
    let finish = str2Sec(s.substr(9, 8));
    view[start]++;
    view[finish]--;
  }
  for (let i = 1; i < view.length; i++) view[i] += view[i - 1];
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < adv; i++) sum += view[i];
  maxSum = sum;
  let idx = 0;
  let s = 0;
  for (let i = adv; i < play; i++) {
    sum += view[i] - view[s++];
    if (sum > maxSum) {
      idx = s;
      maxSum = sum;
    }
  }
  return sec2Str(idx);
}

// 카드 짝 맞추기
function bfs(board, src, dst) {
  let direction = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  let visited = Array(4)
    .fill(0)
    .map(() => Array(4).fill(false));
  let q = [];
  q.push(src);
  while (q.length != 0) {
    let [y, x, cnt] = q.shift();
    if (x == dst[1] && y == dst[0]) return cnt;
    for (let i = 0; i < 4; i++) {
      let nx = x + direction[i][0];
      let ny = y + direction[i][1];
      if (nx < 0 || nx > 3 || ny > 3 || ny < 0) continue;
      if (!visited[ny][nx]) {
        visited[ny][nx] = true;
        q.push([ny, nx, cnt + 1]);
      }
      for (let j = 0; j < 2; j++) {
        if (board[ny][nx] != 0) break;
        if (
          nx + direction[i][0] < 0 ||
          nx + direction[i][0] > 3 ||
          ny + direction[i][1] < 0 ||
          ny + direction[i][1] > 3
        )
          break;
        nx += direction[i][0];
        ny += direction[i][1];
      }
      if (!visited[ny][nx]) {
        visited[ny][nx] = true;
        q.push([ny, nx, cnt + 1]);
      }
    }
  }
  return Number.MAX_SAFE_INTEGER;
}
function permutation(board, src) {
  let ret = Number.MAX_SAFE_INTEGER;
  for (let num = 1; num <= 6; ++num) {
    let card = [];
    for (let y = 0; y < 4; y++)
      for (let x = 0; x < 4; x++) if (board[y][x] == num) card.push([y, x, 0]);
    if (card.length === 0) continue;
    let one = bfs(board, src, card[0]) + bfs(board, card[0], card[1]) + 2;
    let two = bfs(board, src, card[1]) + bfs(board, card[1], card[0]) + 2;
    for (let i = 0; i < 2; i++) board[card[i][0]][card[i][1]] = 0;
    ret = Math.min(ret, one + permutation(board, card[1]));
    ret = Math.min(ret, two + permutation(board, card[0]));
    for (let i = 0; i < 2; i++) board[card[i][0]][card[i][1]] = num;
  }
  if (ret === Number.MAX_SAFE_INTEGER) return 0;
  return ret;
}
function solution(board, r, c) {
  return permutation(board, [r, c, 0]);
}

// 매출 하락 최소화
function solution(sales, links) {
  let children = Array(sales.length + 1).fill(0);
  let parents = Array(sales.length + 1);
  for (let [pIndex, cIndex] of links) {
    parents[cIndex] = pIndex;
    children[pIndex]++;
  }
  let queue = [];
  for (let i = 1; i < children.length; i++) {
    if (children[i] === 0) queue.push(i);
  }
  let dp = {};
  parents[1] = 0;
  children[0] = 1;
  while (children[0]) {
    let cIndex = queue.shift();
    let pIndex = parents[cIndex];
    let sum = 0;
    let min = 0;
    if (dp[cIndex]) {
      sum = dp[cIndex].reduce((sum, [select, nselect]) => sum + nselect, 0);
      min = dp[cIndex].reduce(
        (min, [select, nselect]) => Math.min(min, select - nselect),
        sales[cIndex - 1]
      );
    }
    if (!dp[pIndex]) dp[pIndex] = [];
    dp[pIndex].push([sum + sales[cIndex - 1], sum + min]);
    if (--children[pIndex] === 0) queue.push(pIndex);
  }
  return Math.min(dp[0][0][0], dp[0][0][1]);
}
