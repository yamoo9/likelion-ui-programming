import React from '../lib/react.js';

function Heading(props: { language: string; greetingMessage: string }) {
  return React.createElement(
    'h1',
    {
      lang: props.language.toLowerCase(),
    },
    props.greetingMessage
  );
}

export default Heading;
