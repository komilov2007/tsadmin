import type { FC } from 'react';
import { Link } from 'react-router-dom';
import PATH from './Path';

interface AuthPageType {
  title: 'Tizimga' | 'Hisobingiz yoqmi';
}

const AuthPage: FC<AuthPageType> = ({ title }) => {
  return (
    <p className="text-sm text-gray-400">
      <span>{title} </span>

      <Link
        to={title === 'Tizimga' ? PATH.home : PATH.register}
        className="text-green-500 hover:underline font-semibold ml-1"
      >
        {title === 'Tizimga' ? 'Kirish' : "Ro'yxatdan o'tish"}
      </Link>
    </p>
  );
};

export default AuthPage;
