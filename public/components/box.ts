import React from '../lib/react.js';

function Box({ children }: { children: React.ReactNode }) {
  return React.createElement(
    // type
    'div',
    // props
    {
      className: 'box',
      style: {
        backgroundColor: '#171c28',
      },
    },
    // ...children
    children
  );
}

export default Box;
