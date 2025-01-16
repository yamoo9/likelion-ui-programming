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
  // 좀 더 복잡한 구조의 상태(객체)
  const [state, setState] = React.useState({
    submission: false,
    review: false,
    myLevel: true,
  });

  // 여러 상태를 하나의 상태 업데이트 함수 로직으로 관리
  const handleStateToggle = (name: string): void => {
    // JavaScript 객체는 [ 계산된 ] 속성을 가질 수 있다.
    // let name = 'myLevel';
    const nextState = {
      ...state,
      [name]: !state[name],
    };

    setState(nextState);
  };

  return (
    <ul className="SwitchList" style={switchStyles}>
      <li>
        <Switch
          active={state.submission}
          onToggle={() => handleStateToggle('submission')}
        >
          과제 제출
        </Switch>
      </li>
      <li>
        <Switch
          active={state.review}
          onToggle={() => handleStateToggle('review')}
        >
          의미있는 복습 수행
        </Switch>
      </li>
      <li>
        <Switch
          active={state.myLevel}
          onToggle={() => handleStateToggle('myLevel')}
        >
          정확한 나의 수준 진단
        </Switch>
      </li>

      {/* 조건부 렌더링(Conditional Rendering) */}
      {false &&
        items.map((item) => (
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
