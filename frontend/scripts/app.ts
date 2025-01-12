import React from '../lib/react.js';

const h = React.createElement;

function App(): React.ReactNode {
  return h('div', {
    lang: 'en',
    style: appStyles,
  });
}

const appStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  padding: 20,
};

export default App;
