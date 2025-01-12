/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';

const heading = React.createElement('h1', {}, '안녕!');

const changeButton = React.createElement(
  'button',
  { type: 'button' },
  '인사말'
);

const wrapper = React.createElement(
  React.Fragment,
  null,
  heading,
  changeButton
);

const rootElement = document.getElementById('react');
const reactDomRoot = ReactDOM.createRoot(rootElement);

reactDomRoot.render(wrapper);

// 코드(React 엘리먼트)를 재사용하자
// let a = 1;
// let b = 10;
// let c = a + b;

{
  // a
  const heading = React.createElement('h1', {}, '안녕!');

  // b
  const changeButton = React.createElement(
    'button',
    { type: 'button' },
    '인사말'
  );

  // c
  const wrapper = React.createElement(
    React.Fragment,
    null,
    heading,
    changeButton
  );
}

// 재사용 메커니즘 : 클래스(x) 또는 함수(v)
// 리액트 월드 재사용 메커니즘 : 컴포넌트(함수)
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 10));

// a = 11;
// b = 210;
// c = a + b;

console.log(add(11, 210));
