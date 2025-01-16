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
  listStyle: 'none',
  paddingInlineStart: 0,
};

// 컴포넌트 속성(props)는 읽기전용(컴포넌트 내부에서 수정하면 안됨)
function SwitchList({ items }: SwitchListProps) {
  // 컴포넌트는 순수해야 한다.
  console.log(items);

  // 순수하지 않은 행위를 시도해봅니다.
  // 전달받은 컴포넌트 속성 수정 시도
  items.push({
    id: 'item-5',
    children: '컴포넌트 순수성',
    active: true,
  });

  return (
    <ul className="SwitchList" style={switchStyles}>
      {items.map((item) => (
        <li key={item.id}>
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
