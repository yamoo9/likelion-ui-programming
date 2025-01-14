import React from '../lib/react.js';
import Switch from '../components/switch.tsx';

import jsxRuntime from '../lib/react/jsx-runtime.js';

const { jsx } = jsxRuntime;

const appStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  padding: 20,
};

function App(): React.ReactNode {
  const handleSwitch1Toggle = () => console.log('clicked switch 1');
  const handleSwitch3Toggle = () => console.log('clicked switch 3');

  return (
    <div lang="en" style={appStyles}>
      <Switch active onToggle={handleSwitch1Toggle}>
        Wi-Fi
      </Switch>
      <Switch>Bluetooth</Switch>
      <Switch disabled onToggle={handleSwitch3Toggle}>
        Reduced Motion
      </Switch>

      <ul className="jsx-ul">
        <li>child 1</li>
        <li>child 2</li>
        <li>child 3</li>
      </ul>

      <br />

      {jsx('ul', {
        className: 'jsx-ul',
        children: [
          jsx('li', { children: 'child 1' }, 'child-1'),
          jsx('li', { children: 'child 2' }, 'child-2'),
          jsx('li', { children: 'child 3' }, 'child-3'),
        ],
      })}
    </div>
  );
}

export default App;
