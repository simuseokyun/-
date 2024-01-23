// 내 풀이
function solution(n) {
    let big = new Array(26).fill('').map((_, i) => String.fromCharCode(i + 65));
    let small = new Array(26).fill('').map((_, i) => String.fromCharCode(i + 97));
    let all = [...big, ...small];
    let data = new Array(all.length).fill(0);
    let index = new Array();
    [...n].forEach((a, i) => {
        index.push(all.indexOf(a));
    });
    index.forEach((a, i) => {
        data[a] += 1;
    });
    return data;
}

// 다른 사람 풀이
function solution(m) {
    let al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let a = [];
    a.length = 52;
    a.fill(0);
    m.split('').map((n) => {
        a[al.indexOf(n)] += 1;
    });

    return a;
}
