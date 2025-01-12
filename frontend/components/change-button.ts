import React from '../lib/react.js';

// dummy function
// const render = () => {};

function ChangeButton(props: { render: () => void }): React.ReactElement {
  return React.createElement(
    'button',
    {
      type: 'button',
      onClick: () => {
        props.render();
      },
    },
    '인사말'
  );
}

export default ChangeButton;
