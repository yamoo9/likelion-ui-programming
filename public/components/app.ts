import React from '../lib/react.js';
import Box from './box';

function App() {
  return React.createElement(
    'div',
    {
      className: 'app',
    },

    React.createElement(
      Box,
      {
        className: 'box--circle',
      },
      '기본 박스'
    ),

    React.createElement(
      Box,
      {
        size: 'small',
        style: {
          backgroundColor: '#0388d1',
        },
      },
      '작은 박스'
    ),

    React.createElement(
      Box,
      {
        size: 'big',
        style: {
          backgroundColor: '#1ecff6',
          borderRadius: 20, // '20px'
        },
      },
      '큰 박스'
    )
  );
}

export default App;
