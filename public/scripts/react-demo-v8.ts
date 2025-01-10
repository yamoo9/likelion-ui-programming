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
  // HTML Event Binding
  // <button type="button" onclick="handleChangeGreet()">인사말</button>

  // React Event Binding (e.g: onClick)
  return React.createElement(
    'button',
    {
      type: 'button',
      onClick: () => {
        console.log('clicked change button');
        // 버튼을 클릭할 때 마다 리액트 앱을 리-렌더링 하라!!!!
        render();
      },
    },
    '인사말'
  );
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

const keys = Object.keys(Greeting);
const key = keys[Math.floor(Math.random() * keys.length)];

function render() {
  console.log('excute render function');
  reactDomRoot.render(React.createElement(Wrapper, { message: Greeting[key] }));
}

render();
