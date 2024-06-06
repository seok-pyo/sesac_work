// 연습문제 1번
// for문을 이용하여 정확한 숫자를 출력하는 코드를 작성하시오.

function printNum() {
  for (let i = 0.1; i < 1; i = i + 0.1) {
    console.log(i.toFixed(1));
  }
}

// 연습문제 2번
// 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.

function printSqrt(num) {
  console.log(Math.sqrt(num).toFixed(3));
}

// 연습문제 3번
// 오늘 날짜의 요일을 출력하는 코드(swtich문 사용)

function printDate() {
  const today = new Date();
  const day = today.getDay();
  let caseDay = '';
  switch (day) {
    case 0:
      caseDay = '일';
      break;
    case 1:
      caseDay = '월';
      break;
    case 2:
      caseDay = '화';
      break;
    case 3:
      caseDay = '수';
      break;
    case 4:
      caseDay = '목';
      break;
    case 5:
      caseDay = '금';
      break;
    case 6:
      caseDay = '토';
      break;
    default:
      break;
  }
  console.log(`오늘은 ${caseDay}요일입니다.`);
}

// 연습문제 3번
// 오늘 날짜의 요일을 출력하는 코드(문자열, 템플릿리터럴 사용)

function printDay() {
  const WEEK_NAMES = '일월화수목금토';
  const date = new Date();
  const dateNum = date.getDay();
  console.log(`오늘은 ${WEEK_NAMES[dateNum]}요일입니다.`);
}

// 연습문제 4번
// 소수점 덧셈을 하는 함수를 작성하시오.

function addPoints(a, b) {
  let count = 0;
  while (a % 10 || b % 10) {
    a *= 10;
    b *= 10;
    count += 1;
  }
  let result = a + b;
  if (count) result /= 10 ** count;
  return result;
}

// printNum();
// printSqrt(2);
// printDate();
// addPoints(0.21345, 0.1);
