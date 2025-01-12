/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';

// React version
// console.log('React version =', React.version);

// ReactDOM/client version
// console.log('ReactDOM version =', ReactDOM.version);

/* -------------------------------------------------------------------------- */
/* Creating React Element Node                                                */
/* -------------------------------------------------------------------------- */

// React API
// React.createElement(type, props, ...children)

let heading = React.createElement(
  'h1',
  {},
  '안녕!' // children
);

// TypeScript -> JavaScript

// 트렌스파일러(Transpiler)
// JSX(JS for XML like syntax) -> JavaScript Code (Babel / TypeScript)
// heading = <h1>안녕!</h1>;

const changeButton = React.createElement(
  'button',
  {
    type: 'button',
  },
  '인사말' // children
);

const parentElement = React.createElement(
  'div',
  { role: 'group' },
  // ...children === React.ReactNode[]
  heading, // child 1
  changeButton // child 2
);

console.dir(parentElement);

// console.group('React 요소 노드');
// console.dir(heading);
// console.dir(changeButton);
// console.groupEnd();

// ReactDOM API (for Web)
// ReactDOM.createRoot(domElement) -> ReactDOMRoot { render, unmount }
const rootElement = document.getElementById('react'); // HTMLDivElement
const reactDomRoot = ReactDOM.createRoot(rootElement); // ReactDOMRoot

// ReactDOMRoot.render(React.ReactElement)
reactDomRoot.render(parentElement);

// React Native API (for Mobile Native)
