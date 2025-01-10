import React from '../lib/react.js';
import Calculator from './calculator';

function App() {
  return React.createElement('div', {
    className: 'app',
    children: React.createElement(Calculator),
  });
}

export default App;
