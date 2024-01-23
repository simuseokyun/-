// 내 풀이
function solution(n) {
    let answer = n.toString(3); // toStirng 은 원본 변형하지 않기에 변수에 저장
    answer = parseInt(answer.split('').reverse().join(''), 3);
    // 문자열을 거꾸로 출력하고 싶다 ? => 문자열.split("").reverse().join("") 공식
    // 다른 진법으로 변환된 숫자를 다시 10진수로 출력하고 싶다면 parseInt 로 변환
    return answer;
}

// 다른 사람 풀이
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(''), 3);
};
