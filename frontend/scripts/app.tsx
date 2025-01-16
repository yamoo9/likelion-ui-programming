import React from '../lib/react.js';
import type { List } from '../types/list.ts';
import SwitchList from '../components/switch-list.tsx';

function App(): React.ReactNode {
  const list: List = [
    {
      id: 'item-1',
      active: true,
      children: '와이파이(Wi-Fi)',
    },
    {
      id: 'item-2',
      children: '블루투스(Bluetooth)',
    },
    {
      id: 'item-3',
      disabled: true,
      children: '동작 줄이기(Reduced Motion)',
    },
    {
      id: 'item-4',
      children: '스크린 리더(Screen Reader)',
      active: true,
    },
  ];

  return (
    <div lang="en" style={appStyles}>
      <SwitchList items={list} />
    </div>
  );
}

const appStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  padding: 20,
};

export default App;
