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
