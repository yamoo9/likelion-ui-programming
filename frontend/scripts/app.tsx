import React from '../lib/react.js';
import Switch from '../components/switch.tsx';

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
    </div>
  );
}

export default App;
