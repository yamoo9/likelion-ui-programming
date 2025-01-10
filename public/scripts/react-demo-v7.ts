/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';
import { Greeting } from './greeting.js';

function Heading(props: { greetingMessage: string }) {
  return React.createElement('h1', {}, props.greetingMessage);
}

function ChangeButton() {
  return React.createElement('button', { type: 'button' }, '인사말');
}

function Wrapper(props: { message: string }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading, { greetingMessage: props.message }),
    React.createElement(ChangeButton)
  );
}

const rootElement = document.getElementById('react');
const reactDomRoot = ReactDOM.createRoot(rootElement);

// 랜덤 인사말 출력

const keys = Object.keys(Greeting);
// console.log(keys);

const key = keys[Math.floor(Math.random() * keys.length)];
// console.log(key);

reactDomRoot.render(React.createElement(Wrapper, { message: Greeting[key] }));
