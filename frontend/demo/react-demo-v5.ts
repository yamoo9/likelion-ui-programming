/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';

// Heading 컴포넌트
function Heading() {
  return React.createElement('h1', {}, '안녕!');
}

// ChangeButton 컴포넌트
function ChangeButton() {
  return React.createElement('button', { type: 'button' }, '인사말');
}

function Wrapper() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading),
    React.createElement(ChangeButton),
    React.createElement(Heading),
    React.createElement(ChangeButton),
    React.createElement(Heading),
    React.createElement(ChangeButton),
    React.createElement(Heading),
    React.createElement(ChangeButton),
    React.createElement(Heading),
    React.createElement(ChangeButton),
    React.createElement(Heading),
    React.createElement(ChangeButton)
  );
}

const rootElement = document.getElementById('react');
const reactDomRoot = ReactDOM.createRoot(rootElement);

// React Component -> Creating React Element -> DOM Rendering
reactDomRoot.render(React.createElement(Wrapper));
