import React from '../lib/react.js';
import Calculator from './calculator';

const { createElement: h } = React;

function App() {
  return h('div', {
    className: 'app',
    // React에서 집합 안에 있는 각 원소에 고유한 key를 설정해야 한다.
    children: [
      h(Calculator, { key: 'child-1' }),
      h(Calculator, { key: 'child-2', operator: '-' }),
      h(Calculator, { key: 'child-3', elements: [12, 2] }),
      h(Calculator, { key: 'child-4', elements: [-12, 23], operator: '*' }),
      h(Calculator, { key: 'child-5', elements: [, 6], operator: '/' }),
    ],
  });
}

export default App;
