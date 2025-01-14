import React from '../lib/react.js';
import type { List } from '../types/list.ts';
import Switch from './switch.tsx';

interface SwitchListProps {
  items: List;
}

function SwitchList(props: SwitchListProps) {
  // 리스트 렌더링 02
  // Array.prototype.map (O) : 새로운 배열 반환
  // Array.prototype.forEach (X) : undefined

  return (
    <ul
      className="SwitchList"
      style={{
        display: 'flex',
        flexFlow: 'column',
        gap: 12,
      }}
    >
      {renderListItems(props.items)}
    </ul>
  );
}

const renderListItems = (items: List): React.ReactElement[] => {
  return items.map((item) => {
    // React.ReactElement[] 반환 === React Children
    return (
      <li>
        <Switch
          active={item.active}
          disabled={item.disabled}
          showOnOffText={item.showOnOffText}
          onToggle={item.onToggle}
        >
          {item.children}
        </Switch>
      </li>
    );
  });
};

export default SwitchList;
