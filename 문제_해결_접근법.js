// <알고리즘?>
// 특정 작업을 수행하기 위한 과정이나 단계

// <어떻게 하면 알고리즘을 잘 이해할 수 있을까?>
// 1. 문제를 해결하기 위한 전략을 수립하기 (문제를 세분화하고 방향 잡기)
// 2. 일반적인 문제 해결 패턴 파악하기

// <문제를 해결하는 과정>
// 문제를 이해하고, 구체적인 예시들을 알아보고, 문제를 세분화하고, 문제를 단순화하고, 문제를 다시 재구성하는 것

// "두 숫자를 더하여 합계를 반환하는 함수를 작성하시오."
// 1. 문제를 확실히 이해하기
// - 문제를 나만의 방식대로 다시 생각할 수 있는가? 나만의 방식으로 질문을 바꿔 질문을 정확하게 이해하는 것
// => 덧셈 하기
// - 문제가 어떤 입력값은 무엇이고 어떤 형태인가?
// => 정수인가? 소수인가? 문자열인가? 엄청 큰(자바스크립트에서 무한 처리) 수인가?
// - 문제의 결과값이 어떻게 출력되어야 하는가?
// => 정수?, 소수?, 문자열?
// - 입력값이 출력값을 결정할 수 있는가? 문제를 해결할 충분한 정보가 주어졌는가?
// => 만약 입력값이 2개가 아닌 하나라면?
// - 중요한 데이터의 라벨은 어떻게 지정해야 할까?

// "문자열을 받으면 각 문자(영문소문자나 숫자)의 수를 반환하는 함수를 작성하시오."
// 2. 구체적 예시를 알아보기
// 유저스토리나 유닛테스트 실행
// - 간단한 예시로 시작
charCount('aaaa');
// => {a:4}
charCount('hello');
// => {h:1, e:1, l:2, o:1}
// - 점진적으로 복잡한 예시들로 진행
charCount('my phone number is 0000');
// => 공백?, 달러 기호, 밑줄, 숫자를 포함?
charCount('Hello');
// => 대문자도 포함?
// - 입력값이 비어있는 경우
charCount('');
// => {} 빈 객체 반환? null, false, undefined 반환? 에러 반환?
// - 유효하지 않은 입력값의 경우

// 3. 문제를 세분화하기
// 해결책의 기본적인 구성 요소들을 단계를 나누어 작성하기
// function charCount(str) {
//     // 출력값이 문자열 내의 영문 소문자와 숫자 키를 지닌 객체를 반환
// }

// function charCount(str) {
//     // 마지막에 반환할 객체 만들기
//     // 문자열에 반복문 적용하기
//     // 만약 문자가 숫자/문자이며 객체의 키에 있으면 값에 1을 더하기
//     // 문자가 문자가 숫자/문자이며 객체에 없으면 키를 추가하고 값을 1로 설정하기
//     // 문자가 공백, 마침표 등이 아무것도 하지 말기
//     // 객체 반환하기
// }

// 4. 해결하거나 단순화하기
// 막히는 부분은 무시하고 단순하게 해결할 수 있는 단계부터 작성하고 돌아오기
// function charCount(str) {
//     // 마지막에 반환할 객체 만들기
//     let result = {};
//     // 문자열에 반복문 적용하기
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         // 만약 문자가 숫자/문자이며 객체의 키에 있으면 값에 1을 더하기
//         if (result[char] > 0) {
//             result[char]++;
//         }
//         // 문자가 숫자/문자이며 객체에 없으면 키를 추가하고 값을 1로 설정하기
//         else {
//             result[char] = 1;
//         }
//     }
//     // 문자가 공백, 마침표 등이 아무것도 하지 말기
//     // 객체 반환하기
//     return result;
// }

// 5. 되돌아보고 리팩터링하기
// - 코드가 잘 동작하는지
// - 다른 접근법이 있는지
// - 해결 방법이 직관적인지
// - 다른 문제에도 적용 가능한지
// - 코드의 성능을 더욱 향상시킬 수 있는지(시간 복잡도와 공간 복잡도 분석)
// - 다른 사람들은 같은 문제를 어떻게 해결했는지
// function charCount(str) {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }

function charCount(str) {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    return !(!(code > 47 && code < 58) && // 0-9
             !(code > 64 && code < 91) && // A-Z
             !(code > 96 && code < 123)); // a-z
}