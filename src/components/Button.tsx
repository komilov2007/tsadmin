import type { FC, MouseEventHandler, ReactNode } from 'react';

interface ButtonType {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  extraClass?: string;
  type: 'submit' | 'button';
}

const Button: FC<ButtonType> = ({ onClick, children, extraClass, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${extraClass} w-full rounded-2xl bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110 active:scale-[0.99]`}
    >
      {children}
    </button>
  );
};

export default Button;
