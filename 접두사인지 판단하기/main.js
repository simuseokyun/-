// 내 풀이

function solution(my_string, is_prefix) {
    let result = new Array();
    for (let i = 1; i < my_string.length + 1; i++) {
        result.push(my_string.substring(0, i));
    }
    return Number(result.includes(is_prefix));
}
solution('banana', 'ban');

// 다른 사람 풀이

function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}
//  이 외에도 접두사(첫 글자부터 시작하는지)를 판단해주는 함수인 startWidth() 가 있음
