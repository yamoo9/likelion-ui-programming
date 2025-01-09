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

const heading = React.createElement(
  'h1',
  {},
  '안녕!' // children
);

const changeButton = React.createElement(
  'button',
  {
    type: 'button',
  },
  '인사말' // children
);

console.group('React 요소 노드');
console.dir(heading);
console.dir(changeButton);
console.groupEnd();
