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

function SwitchList({ items }: SwitchListProps) {
  // React 컴포넌트 상태 관리
  // React Hooks API (React.useState)
  // 어떤 상태? (과제 제출)
  const [submission, setSubmission] = React.useState(false);

  return (
    <ul className="SwitchList" style={switchStyles}>
      <li>
        <Switch
          active={submission}
          onToggle={() => {
            // 상태 업데이트 (React에 요청: trigger a render)
            const nextSubmission = !submission; // false <=> true
            setSubmission(nextSubmission);
          }}
        >
          과제 제출
        </Switch>
      </li>
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
