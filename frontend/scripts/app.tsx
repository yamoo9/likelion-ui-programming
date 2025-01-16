import React from '../lib/react.js';
import SwitchList from '../components/switch-list.tsx';
import SwitchListClass from '../components/switch-list.class.tsx';

function App(): React.ReactNode {
  const list = [
    {
      id: 'item-1',
      active: true,
      onToggle: () => console.log('clicked switch 1'),
      children: '와이파이(Wi-Fi)',
    },
    {
      id: 'item-2',
      children: '블루투스(Bluetooth)',
    },
    {
      id: 'item-3',
      disabled: true,
      onToggle: () => console.log('clicked switch 3'),
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
      {/* 클래스 컴포넌트 */}
      <SwitchListClass items={list} />
      <hr
        style={{
          display: 'block',
          width: '100%',
          height: 1,
          borderTop: '1px solid rgba(0 0 0 / 40%)',
        }}
      />
      {/* 함수형 컴포넌트 */}
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
