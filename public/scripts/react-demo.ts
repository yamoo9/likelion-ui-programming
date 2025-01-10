/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';
import { Greeting } from './greeting';

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

reactDomRoot.render(React.createElement(Wrapper, { message: Greeting.ES }));
