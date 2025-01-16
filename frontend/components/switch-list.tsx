import React from '../lib/react.js';
import type { List, ListItem } from '../types/list.ts';
import Switch from './switch.tsx';

interface SwitchListProps {
  items: List;
}

function SwitchList({ items }: SwitchListProps) {
  const [state, setState] = React.useState(() => {
    return items.map(({ onToggle, ...restProperties }) => ({
      active: false,
      ...restProperties,
    }));
  });

  const handleToggleState = (selectedId: string) => {
    setState(
      state.map((item: ListItem) =>
        selectedId === item.id
          ? {
              ...item,
              active: !item.active,
            }
          : item
      )
    );
  };

  return (
    <ul className="SwitchList" style={switchStyles}>
      {state.map(({ id, active, children }) => (
        <li key={id}>
          <Switch active={active} onToggle={() => handleToggleState(id)}>
            {children}
          </Switch>
        </li>
      ))}
    </ul>
  );
}

export default SwitchList;

const switchStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  listStyle: 'none',
  paddingInlineStart: 0,
};
