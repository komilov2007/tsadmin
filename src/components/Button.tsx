import type { FC, MouseEventHandler, ReactNode } from 'react';

interface BUttonType {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: 'submit' | 'button';
  extraClass?: string;
  children: ReactNode;
}
const Button: FC<BUttonType> = ({ onClick, type, children, extraClass }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${extraClass} w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg font-semibold mt-2`}
    >
      {children}
    </button>
  );
};

export default Button;
