import { useContext, type SubmitEvent } from 'react';
import { AuthFormItem, AuthPage, Button } from '../../components';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Context } from '../../context/Conttext';

const Login = () => {
  const { setToken } = useContext(Context);
  function handleLoginSubmit(evt: SubmitEvent<HTMLFormElement>) {
    evt.preventDefault();
    const data = {
      email: evt.target.email.value,
      password: evt.target.password.value,
    };
    axios
      .post('https://api.escuelajs.co/api/v1/auth/login', data)
      .then((res) => {
        toast.success('okey jiagr');
        setTimeout(() => {
          setToken(res.data.success_token);
        }, 1500);

        console.log(res.data);
      })
      .catch(() => toast.error('Xatolik bor jigar'));
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[380px] bg-gray-800 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome back
        </h1>
        <form
          onSubmit={handleLoginSubmit}
          autoComplete="off"
          className="space-y-5"
        >
          <AuthFormItem
            label="Email"
            name="email"
            placeholder="example@gmail.com"
            text="text"
            type="email"
          />
          <AuthFormItem
            label="Password"
            name="password"
            placeholder="********"
            text="password"
            type="password"
          />
          <Button extraClass="!mt-3" type="submit">
            Sign in
          </Button>
        </form>
        <div className="flex ml-33 mt-2">
          <AuthPage title="Hisobingiz yoqmi" />
        </div>
      </div>
    </div>
  );
};

export default Login;
