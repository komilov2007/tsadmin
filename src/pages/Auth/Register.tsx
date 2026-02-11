import toast, { Toaster } from 'react-hot-toast';
import type { SubmitEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthFormItem, AuthPage, Button, PATH } from '../../components';

const Register = () => {
  const navigate = useNavigate();

  async function handleRegister(evt: SubmitEvent<HTMLFormElement>) {
    evt.preventDefault();

    const data = {
      name:
        evt.currentTarget.firstname.value +
        ' ' +
        evt.currentTarget.lastname.value,
      email: evt.currentTarget.email.value,
      password: evt.currentTarget.password.value,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJWFSGRVruuQQZVWx5Z-MWx2ogPo6nMz2xw&s',
    };

    try {
      const res = await axios.post(
        'https://api.escuelajs.co/api/v1/users/',
        data
      );

      toast.success(`Qoshildi ${res.data.name}`);
      setTimeout(() => {
        navigate(PATH.home);
      }, 1000);
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      toast.error('Xatolik yuz berdi ❌');
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[380px] bg-gray-800 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome back
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <AuthFormItem
            label="Ism"
            name="firstname"
            placeholder="ism kiriting"
            type="text"
            text="text"
          />
          <AuthFormItem
            label="Familya"
            name="lastname"
            placeholder="familya kiriting"
            type="text"
            text="text"
          />
          <AuthFormItem
            label="Email"
            name="email"
            placeholder="example@gmail.com"
            type="email"
            text="text"
          />
          <AuthFormItem
            label="Password"
            name="password"
            placeholder="********"
            type="password"
            text="text"
          />
          <Button extraClass="!mt-3" type="submit">
            Register
          </Button>
        </form>

        <div className="text-center mt-3">
          <AuthPage title="Tizimga" />
        </div>
      </div>
    </div>
  );
};

export default Register;
