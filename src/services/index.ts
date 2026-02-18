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
export const CrudFn = (
  URL: string,
  data: any,
  navigate: NavigateFunction,
  setLoading: Dispatch<SetStateAction<boolean>>,
  id: string | undefined
) => {
  if (id) {
    instance
      .put(`${URL}/${id} , data`)
      .then(() => {
        toast.success("Muvaffaqiyatli o'zgartirildi");
        setTimeout(() => navigate(-1), 1000);
      })
      .catch(() => toast.error('Xatolik bor!'))
      .finally(() => setLoading(false));
  } else {
    instance
      .post(URL, data)
      .then(() => {
        toast.success("Muvaffaqiyatli qo'shildi");
        setTimeout(() => navigate(-1), 1000);
      })
      .catch(() => toast.error('Xatolik bor!'))
      .finally(() => setLoading(false));
  }
};
