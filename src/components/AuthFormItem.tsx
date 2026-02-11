import type { FC } from 'react';

interface AuthFormType {
  label: string;
  text: 'text' | 'password' | 'email';
  name: string;
  placeholder: string;
  type: string;
  extraClass?: string;
}
const AuthFormItem: FC<AuthFormType> = ({
  label,
  type,
  name,
  placeholder,
  extraClass,
}) => {
  return (
    <label className="block text-sm text-gray-300">
      <span className="mb-1.5 block font-medium tracking-wide text-gray-400">
        {label}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`
      ${extraClass ?? ''}
      w-full px-4 py-3 rounded-xl
      bg-gray-800/80
      border border-gray-700
      text-white placeholder-gray-500
      outline-none
      transition-all duration-200
      
      focus:border-green-500
      focus:ring-2 focus:ring-green-500/40
      focus:bg-gray-800
      
      hover:border-gray-500
    `}
      />
    </label>
  );
};

export default AuthFormItem;
