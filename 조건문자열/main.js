const operations = {
    // 객체를 switch 문으로 구성
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
    const op = operations[ineq + eq];
    return Number(op(n, m)); // true / false 를 숫자열로 변환시켜 1 / 0 return
}
