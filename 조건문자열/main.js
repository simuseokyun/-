const operations = {
    // 객체의 키를 비교 연산자로 값을 화살표 함수로 구현
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
    const op = operations[ineq + eq];
    return Number(op(n, m)); // true / false 를 1 / 0 으로 변환 후 return
}
