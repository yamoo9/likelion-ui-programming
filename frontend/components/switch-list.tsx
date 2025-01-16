import React from '../lib/react.js';
import type { List } from '../types/list.ts';
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
    const nextState = state.map(
      (item: { id: string; children: string; active: boolean }) => {
        if (selectedId === item.id) {
          return {
            ...item,
            active: !item.active,
          };
        }

        return item;
      }
    );

    setState(nextState);
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
