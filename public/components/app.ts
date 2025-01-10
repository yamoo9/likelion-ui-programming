import React from '../lib/react.js';
import Calculators from './calculators';

const { createElement: h } = React;

function App() {
  return h(
    'div',
    {
      className: 'app',
    },
    h(Calculators)
  );
}

export default App;
