import React from '../lib/react.js';
import type { List } from '../types/list.ts';
import Switch from './switch.tsx';

interface SwitchListProps {
  items: List;
}

const switchStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
};

function SwitchList({ items }: SwitchListProps) {
  return (
    <ul className="SwitchList" style={switchStyles}>
      {items.map((item, index) => (
        <li key={index}>
          <Switch
            active={item.active}
            disabled={item.disabled}
            showOnOffText={item.showOnOffText}
            onToggle={item.onToggle}
          >
            {item.children}
          </Switch>
        </li>
      ))}
    </ul>
  );
}

export default SwitchList;
