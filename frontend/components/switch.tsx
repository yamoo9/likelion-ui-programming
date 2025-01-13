import React from '../lib/react.js';

interface SwitchProps {
  active?: boolean;
  disabled?: boolean;
  showOnOffText?: boolean;
  children?: React.ReactNode;
  onToggle?: () => void;
}

type SwitchText = 'ON' | 'OFF' | null;

function Switch({
  active = false,
  disabled = false,
  showOnOffText = false,
  children,
  onToggle,
}: SwitchProps) {
  let switchText: SwitchText = !showOnOffText ? null : active ? 'ON' : 'OFF';

  // let switchTextNode = null;

  // if (switchText) {
  //   switchTextNode = (
  //     <span className="Switch--text" aria-hidden={true}>
  //       {switchText}
  //     </span>
  //   );
  // }

  const handleToggle = () => {
    if (disabled) return;
    onToggle?.();
  };

  const handleKeyControl = (e: any) => {
    const key = e.code;
    const shiftKey = !!e.shiftKey;

    if (!disabled && !shiftKey && (key === 'Space' || key === 'Enter')) {
      onToggle?.();
    }
  };

  // JSX 구문 (XML과 유사한 구문 확장, HTML 아님!!, 실상은 JavaScript 코드)
  return (
    <div
      role="switch"
      className="Switch"
      tabIndex={0}
      aria-checked={active}
      aria-disabled={disabled}
      onClick={handleToggle}
      onKeyDown={handleKeyControl}
    >
      <span className="Switch--label">{children}</span>
      <span className="Switch--info">
        <span className="Switch--knob" />
        {/* 인터폴레이션(interpolation): 보간(사이 채움)법 */}

        {/* 함수 컴포넌트 바디(몸체) 내부에 변수를 설정해 데이터 연결 */}
        {/* {switchTextNode} */}

        {/* JSX 구문 내부에 인라인 삽입 */}
        {switchText && (
          <span className="Switch--text" aria-hidden={true}>
            {switchText}
          </span>
        )}
      </span>
    </div>
  );
}

export default Switch;
