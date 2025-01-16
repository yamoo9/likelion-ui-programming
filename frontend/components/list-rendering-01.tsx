import React from '../lib/react.js';
import Switch from './switch.tsx';

/* Component ---------------------------------------------------------------- */

type ListItem = {
  active?: boolean;
  disabled?: boolean;
  showOnOffText?: boolean;
  children: React.ReactNode;
  onToggle?: () => void;
};

type List = ListItem[];

function App(): React.ReactNode {
  const handleSwitch1Toggle = () => console.log('clicked switch 1');
  const handleSwitch3Toggle = () => console.log('clicked switch 3');

  // 데이터 추출
  const list: List = [
    {
      active: true,
      onToggle: handleSwitch1Toggle,
      children: 'Wi-Fi',
    },
    {
      children: 'Bluetooth',
    },
    {
      disabled: true,
      onToggle: handleSwitch3Toggle,
      children: 'Reduced Motion',
    },
  ];

  let renderListItemElements: Array<ListItem> = [];

  // for 문을 사용해 리스트 렌더링
  for (let i: number = 0, l: number = list.length; i < l; ++i) {
    const listItem: ListItem = list[i];

    // 배열에 새 아이템 추가하기(Array.prototype.push)
    renderListItemElements.push(
      // React Element
      <section>
        <h2>{listItem.children}</h2>
        <p>active : {listItem.active?.toString()}</p>
        <p>disabled : {listItem.disabled?.toString()}</p>
        <p>showOnOffText : {listItem.showOnOffText?.toString()}</p>
        <p>onToggle : {listItem.onToggle?.toString()}</p>
      </section>
    );
  }

  // React Children (React Element List)
  console.log({ renderListItemElements });

  return (
    <div lang="en" style={appStyles}>
      {renderListItemElements}
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
