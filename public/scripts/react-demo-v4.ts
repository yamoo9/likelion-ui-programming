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
