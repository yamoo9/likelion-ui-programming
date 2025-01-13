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
    h(Switch, { active: true }, 'Wi-Fi'), // JSX: <Switch active>Wi-Fi</Switch>
    h(Switch, { active: false }, 'Bluetooth'), // JSX: <Switch>Bluetooth</Switch>
    h(Switch, { disabled: true }, 'Reduced Motion') // JSX: <Switch disabled>Reduced Motion</Switch>
  );
}

const appStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  padding: 20,
};

export default App;
