// 수열 최소값 위치
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

// 체스 세트
function answer(chess) {
    let result = [];
    let refer = [1, 1, 2, 2, 2, 8];
    let count = 0;
    for (let i = 0; i < chess.length; i++) { 
        result[count++] = refer[i] - chess[i];
    }
    return result;
}

// 두 수 최대합
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

// 일곱 난장이
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


// 나무 그리기
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


// Two Sum
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

// OX퀴즈
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

// 벽돌 옮기기
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


// 숫자 빈도수 구하기
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

// 달팽이 만들기
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
