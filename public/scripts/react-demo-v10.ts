/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from '../lib/react.js';
import ReactDOM from '../lib/react-dom/client.js';
import { Greeting } from './greeting.js';

// 컴포넌트 추출(Extracting Components)
import Wrapper from '../components/wrapper.js';

const rootElement = document.getElementById('react');
const reactDomRoot = ReactDOM.createRoot(rootElement);

const langs = Object.keys(Greeting);

function render(): void {
  // 랜덤하게 변경된 인사말의 메시지와 언어 속성을 하위 컴포넌트에 전달하려면?
  const lang = langs[Math.floor(Math.random() * langs.length)];
  const message = Greeting[lang];

  reactDomRoot.render(React.createElement(Wrapper, { lang, message, render }));
}

render();
