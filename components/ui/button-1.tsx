'use client';

import type { HTMLAttributes, CSSProperties } from 'react';

interface GradientButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
  disabled?: boolean;
  dark?: boolean;
}

const GradientButton = ({
  children,
  width = 'auto',
  height = '56px',
  className = '',
  onClick,
  disabled = false,
  dark = false,
  style,
  ...props
}: GradientButtonProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      className={[
        'relative rounded-[14px] cursor-pointer flex items-center justify-center',
        'after:content-[""] after:block after:absolute after:inset-[4px] after:rounded-[10px] after:z-[1]',
        'after:bg-[var(--color-background)]',
        'after:transition-opacity after:duration-300',
        'rotatingGradient',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className,
      ].join(' ')}
      style={{
        '--r': '0deg',
        '--color-text': dark ? '#ffffff' : '#198C94',
        '--color-background': dark ? '#198C94' : '#ffffff',
        minWidth: width,
        height,
        ...style,
      } as CSSProperties}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-3 font-bold px-8 text-[var(--color-text)]">
        {children}
      </span>
    </div>
  );
};

export default GradientButton;
