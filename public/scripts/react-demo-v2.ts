/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';

let heading = React.createElement('h1', {}, '안녕!');

const changeButton = React.createElement(
  'button',
  { type: 'button' },
  '인사말'
);

// Namespace.module
// React.Fragment (function)

// 의미 없는 <div> 대신에 <React.Fragment>를 사용
// 의미 없는 구조는 실제 DOM에 렌더링 되지 않아요!!!
// console.log(React.Fragment);

const wrapper = React.createElement(
  React.Fragment, // type: HTMLTagNameString(e.g: 'a', 'table', ...) / Buit-in Component
  null,
  heading,
  changeButton
);

const rootElement = document.getElementById('react');
const reactDomRoot = ReactDOM.createRoot(rootElement);

reactDomRoot.render(wrapper);
