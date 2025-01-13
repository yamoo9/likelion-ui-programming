// --------------------------------------------------------------------------
// ✅ Switch 컴포넌트 작성(실습)
// --------------------------------------------------------------------------
// - [ ] switch 역할(role) 설정
// - [ ] aria-checked 속성을 사용해 ON/OFF 상태 설정
// - [ ] ON/OFF 텍스트를 화면에 표시하더라도 aria-hidden 속성을 사용해 읽지 않도록 설정
// - [ ] 사용자가 Space, Enter(옵션) 키를 눌렀을 때 작동되도록 설정
// - [ ] 비활성 상태인 경우, aria-disabled 속성을 사용해 설정
// --------------------------------------------------------------------------
import React from '../lib/react.js';

const h = React.createElement;

interface SwitchProps {
  active?: boolean; // 기본 값: false 
  disabled?: boolean; // 기본 값: false
  children: React.ReactNode; /* switch label */
}

// 속성(prop) 기본 값 설정을 위해 구조 분해 할당
function Switch({ active = false, disabled = false, children }: SwitchProps) {
  return h('div', {
    role: 'switch',
    'aria-checked': active,
    'aria-disabled': disabled,
    tabIndex: 0,
    className: 'Switch',
    children: [
      h('span', { className: 'Switch--label' }, children)
    ]
  });
}

export default Switch;
