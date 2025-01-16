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

  // Express.js
  // HTTP Methods
  // - GET
  // - POST
  // - PUT(전체 변경: 기존 데이터 무시, 새 데이터로 덮어씀) / PATCH(부분 변경: 기존 데이터와 새 데이터 합성)
  // - DELETE

  // 각 상태 업데이트 로직 구성
  const handleToggleSubmission = () => {
    // setState() 함수에 새 데이터 전달 (기존 데이터 덮어씀)
    // 기존 데이터가 사라지는 것을 원치 않음
    // 덮어쓰지 않고, 유지하도록 설정
    // 객체 합성 패턴 활용
    // 기존 데이터와 합성된 새로운 데이터 설정(전달)
    const nextState = {
      ...state,
      submission: !state.submission,
    };

    setState(nextState);
  };

  const handleToggleReview = () => {
    // setState() 함수에 새 데이터 전달 (기존 데이터 덮어씀)
    const nextState = {
      ...state,
      review: !state.review,
    };

    setState(nextState);
  };

  const handleToggleMyLevel = () => {
    // setState() 함수에 새 데이터 전달 (기존 데이터 덮어씀)
    const nextState = {
      ...state,
      myLevel: !state.myLevel,
    };

    setState(nextState);
  };

  return (
    <ul className="SwitchList" style={switchStyles}>
      <li>
        <Switch active={state.submission} onToggle={handleToggleSubmission}>
          과제 제출
        </Switch>
      </li>
      <li>
        <Switch active={state.review} onToggle={handleToggleReview}>
          의미있는 복습 수행
        </Switch>
      </li>
      <li>
        <Switch active={state.myLevel} onToggle={handleToggleMyLevel}>
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
