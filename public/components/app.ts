import React from '../lib/react.js';
import Calculator from './calculator';

function App() {
  return React.createElement('div', {
    className: 'app',
    children: [
      React.createElement(Calculator),
      React.createElement(Calculator, {
        operator: '-',
      }),
      React.createElement(Calculator, {
        elements: [12, 2],
      }),
    ],
  });
}

export default App;
