/* -------------------------------------------------------------------------- */
/* 순수 함수 (동일 입력 -> 동일 출력)                                                 */
/* -------------------------------------------------------------------------- */

// React 컴포넌트(함수)는 순수해야 한다.
// 동일 입력 -> 동일 출력 = 예측 가능한(predictable)
// 입력(props) -> 출력(JSX, React Element)

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

/* -------------------------------------------------------------------------- */
/* 상수(constant Variable)의 경우                                                */
/* -------------------------------------------------------------------------- */

// CASE 1
const LENGTH = 10;

function calcListLength(list: any[]): number {
  return list.length + LENGTH;
}

// 예측 가능 (pure)
calcListLength([1, 2, 3]); // 3 + 10 = 13
calcListLength([1, 2, 3]); // 3 + 10 = 13

// CASE 2
const OTHER_LIST = [10];

function anotherCalcListLength(list: any[]): number {
  return list.length + OTHER_LIST.length;
}

// 예측 할 수 없음 (impure)
anotherCalcListLength([1, 2, 3]); // ???

// 가능성 1
// OTHER_LIST.shift();
// 가능성 2
// OTHER_LIST.pop();
// 가능성 N
// OTHER_LIST.push(6, 7, 8);

anotherCalcListLength([1, 2, 3]); // ???

/* -------------------------------------------------------------------------- */
/* 함수가 순수한 지, 순수하지 않은 지 어떻게 검사할까?                                      */
/* -------------------------------------------------------------------------- */

// 동일 입력인 함수를 2번 실행했을 때, 동일 출력이 나온다면 이 함수는 "순수"하다.

const result1 = calcListLength([3, 6, 9]);
const result2 = calcListLength([3, 6, 9]);

console.log(Object.is(result1, result2));
