/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';

// React 엘리먼트
const heading = React.createElement('h1', {}, '안녕!');

// React 컴포너트(이름 작성 규칙 : PascalCase)
function HeadingOne() {
  // React 엘리먼트 (생성 후) 반환
  return React.createElement('h1', { children: '안녕!' });
}

for (let i = 0; i < 5; ++i) {
  // 컴포넌트를 사용해 React 엘리먼트 재사용할 수 있음!
  console.log(React.createElement(HeadingOne));
}

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
