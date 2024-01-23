// 내 풀이
function solution(a, b) {
    let num = 0;
    a.forEach((a, i) => {
        b.forEach((a2, j) => {
            if (i === j) {
                num += a * a2;
            }
        });
    });
    return num;
}

// 다른 사람 풀이
function solution(a, b) {
    return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
    // 함수의 매개변수에서 _ 는 매개 변수는 채워줘야 하지만 값을 사용하지 않을 때 사용
    // TIP : 반복문에서 매개변수로 두개의 배열을 받는다면 길이가 짧은 반복문을 기준으로 반복문이 돔
}
