function solution(strings, n) { 
    return strings.sort((x, y) =>
        x[n] == y[n] ? (x > y ? 1 : -1) : x[n] > y[n] ? 1 : -1 );
}
