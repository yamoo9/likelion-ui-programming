import React from '../lib/react.js';
import Calculator from './calculator';

const { createElement: h } = React;

function App() {
  return h('div', {
    className: 'app',
    children: [
      // 1
      h(Calculator),
      // 2
      h(Calculator, { operator: '-' }),
      // 3
      h(Calculator, { elements: [12, 2] }),
      // 4
      h(Calculator, { elements: [-12, 23], operator: '*' }),
      // 5
      h(Calculator, { elements: [, 6], operator: '/' }),
    ],
  });
}

export default App;
