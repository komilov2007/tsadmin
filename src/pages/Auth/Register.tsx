import { useState, type SubmitEvent } from 'react';
import {
  AuthFormItem,
  Button,
  ChangeAuthPage,
  SiteLogo,
} from '../../components';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LoadingWhite } from '../../assets/images';
import { RegisterFn } from '../../services';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegisterSubmit = (evt: SubmitEvent<HTMLFormElement>) =>
    RegisterFn(evt, setLoading, navigate);
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="mb-6 text-center">
            <SiteLogo />
            <h1 className="text-2xl font-semibold tracking-tight">
              Ro'yxatdan o'tish
            </h1>
          </div>
          <div className="rounded-3xl bg-white/5 p-6 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur">
            <form onSubmit={handleRegisterSubmit} autoComplete="off">
              <AuthFormItem
                label="Ism"
                name="firstname"
                placeholder="Ism kiriting"
                type="text"
              />
              <AuthFormItem
                labelClass="!mt-4"
                label="Familiya"
                name="lastname"
                placeholder="Familiya kiriting"
                type="text"
              />
              <AuthFormItem
                labelClass="!mt-4"
                label="Email"
                name="email"
                placeholder="example@gmail.com"
                type="email"
              />
              <AuthFormItem
                labelClass="!mt-4"
                label="Parol"
                name="password"
                placeholder="********"
                type="password"
              />
              <Button
                extraClass="!h-[44px] !mt-3 !flex !items-center !justify-center"
                type="submit"
              >
                {loading ? (
                  <img
                    className="scale-[1.2]"
                    src={LoadingWhite}
                    alt="Loading"
                    width={30}
                    height={30}
                  />
                ) : (
                  'Hisob yaratish'
                )}
              </Button>
            </form>
          </div>
          <ChangeAuthPage title="Tizimga" />
        </div>
      </div>
    </div>
  );
};

export default Register;
