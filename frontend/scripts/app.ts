import React from '../lib/react.js';
import Switch from '../components/switch';

const h = React.createElement;

function App(): React.ReactNode {
  return h(
    'div',
    {
      lang: 'en',
      style: appStyles,
    },
    h(
      Switch,
      { active: true, onToggle: () => console.log('clicked switch 1') },
      'Wi-Fi'
    ),
    h(Switch, { active: false }, 'Bluetooth'),
    h(
      Switch,
      { disabled: true, onToggle: () => console.log('clicked switch 3') },
      'Reduced Motion'
    )
  );
}

const appStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  padding: 20,
};

export default App;
