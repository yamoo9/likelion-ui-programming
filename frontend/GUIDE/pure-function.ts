/* -------------------------------------------------------------------------- */
/* 순수 함수                                                                     */
/* -------------------------------------------------------------------------- */

// 함수형 프로그래밍
// 순수함이란? 어떤 기준으로 구분하는가?
// 순수하다는 의미는 "함수의 실행 결과 예측 가능"이라는 말이다.

// multiply 함수는 순수한가?
function multiply(x: number, y: number): number {
  return x * y;
}

// 이 함수의 실행 결과는 항상 20이 나온다. (예측 가능함. 순수: pure function)
multiply(4, 5); // 4 × 5 = 20

// query 함수는 순수한가?
function query(selector: string, context = document): HTMLElement | null {
  return context.querySelector(selector);
}

// 이 함수의 실행 결과는 예측 가능한가요? 예측 가능하지 않음 (순수하지 않음: impure function)
query('.yamoo9');

// 그렇다면? 이 함수는 순수한가?
// 외부의 변수에 의존하면 순수하지 않음
let z = 9;

function anotherMultiply(x: number, y: number): number {
  // 지역 변수를 사용한 경우 순수함
  // let z = 9;
  return x * y * z;
}

anotherMultiply(4, 10); // 4 × 10 × 9 = 360
anotherMultiply(4, 10); // 4 × 10 × 9 = 360
anotherMultiply(4, 10); // 4 × 10 × 9 = 360
anotherMultiply(4, 10); // 4 × 10 × 9 = 360

// 외부의 요인에 의해 함수의 실행 결과가 예측할 수 없음 (impure)
z += 101;

anotherMultiply(4, 10); // ????
