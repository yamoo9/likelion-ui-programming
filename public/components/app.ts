import React from '../lib/react.js';
import Box from './box';

function App() {
  return React.createElement(
    'div',
    {
      className: 'app',
    },
    // createElement(type, props, ...children)
    React.createElement(Box, null, '기본 박스'),
    React.createElement(Box, null, '작은 박스'),
    React.createElement(Box, null, '큰 박스')
  );
}

export default App;
