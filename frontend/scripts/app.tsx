import React from '../lib/react.js';
import Switch from '../components/switch.tsx';

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

/* Component ---------------------------------------------------------------- */
function App(): React.ReactNode {
  const handleSwitch1Toggle = () => console.log('clicked switch 1');
  const handleSwitch3Toggle = () => console.log('clicked switch 3');

  return (
    <div lang="en" style={appStyles}>
      <Switch active onToggle={handleSwitch1Toggle}>
        Wi-Fi
      </Switch>
      <Switch>Bluetooth</Switch>
      <Switch disabled onToggle={handleSwitch3Toggle}>
        Reduced Motion
      </Switch>
    </div>
  );
}

const appStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  padding: 20,
};

export default App;
