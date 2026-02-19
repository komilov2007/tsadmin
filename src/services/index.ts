import toast from 'react-hot-toast';
import { instance } from '../hooks';
import type { Dispatch, SetStateAction, SubmitEvent } from 'react';
import { PATH } from '../components';
import type { NavigateFunction } from 'react-router-dom';

export const LoginFn = (
  setLoading: Dispatch<SetStateAction<boolean>>,
  evt: SubmitEvent<HTMLFormElement>,
  setToken: Dispatch<SetStateAction<string>>
) => {
  setLoading(true);
  evt.preventDefault();
  const data = {
    email: evt.target.email.value,
    password: evt.target.password.value,
  };
  instance
    .post('/auth/login', data)
    .then((res) => {
      toast.success('Muvaffaqiyatli kirdinggiz');
      setTimeout(() => {
        setToken(res.data.access_token);
      }, 1500);
    })
    .catch(() => toast.error('Bunday foydalanuvchi topilmadi!'))
    .finally(() => setLoading(false));
};
export const RegisterFn = (
  evt: SubmitEvent<HTMLFormElement>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  evt.preventDefault();
  setLoading(true);
  const data = {
    email: evt.target.email.value,
    password: evt.target.password.value,
    name: `${evt.target.firstname.value} ${evt.target.lastname.value}`,
    role: 'admin',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTboMCClwwuOOgpKUqPvuKApa1AsN2fRUyw&s',
  };
  instance
    .post('/users', data)
    .then((res) => {
      toast.success(`Muvaffaqiyatli ${res.data.name} qo'shildi`);
      setTimeout(() => {
        navigate(PATH.home);
      }, 1500);
    })
    .catch(() => toast.error('Xatolik bor!'))
    .finally(() => setLoading(false));
};

export const CrudFn = async (
  url: string,
  data: any,
  navigate: any,
  setLoading: (e: boolean) => void,
  id?: string
) => {
  try {
    if (id) {
      // UPDATE
      await instance.put(`${url}/${id}`, data);
      toast.success('Updated successfully');
    } else {
      // CREATE
      await instance.post(url, data);
      toast.success('Created successfully');
    }

    navigate(-1);
  } catch (error: any) {
    console.log(error.response?.data);
    toast.error('Xatolik bor');
  } finally {
    setLoading(false);
  }
};
