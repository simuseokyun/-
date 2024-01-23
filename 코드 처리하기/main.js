// 내 풀이
function solution(code) {
    let mode = 0; // 초기 mode
    let ret = ''; // 초기 return 할 문자열
    for (let i = 0; i < code.length; i++) {
        if (!mode) {
            // mode가 0 일때
            if (code[i] !== '1' && i % 2 == 0) {
                ret += code[i];
            } else if (code[i] === '1') {
                mode = 1;
            }
        } else if (mode) {
            // mode가 1 일때
            if (code[i] !== '1' && i % 2 == 1) {
                ret += code[i];
            } else if (code[i] === '1') {
                mode = 0;
            }
        }
    }
    return ret ? ret : 'EMPTY';
}

// 다른 사람의 풀이
function solution(code) {
    let answer = '';
    let mode = 0;
    for (let i = 0; i < code.length; i += 1) {
        if (Number(code[i]) === 1) {
            mode = mode === 1 ? 0 : 1;
        }
        if (Number(code[i]) !== 1 && i % 2 === mode) {
            answer += code[i];
        }
    }
    return answer.length > 0 ? answer : 'EMPTY';
}
