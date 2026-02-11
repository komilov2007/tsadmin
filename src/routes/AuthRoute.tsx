import { Route, Routes } from 'react-router-dom';
import { PATH } from '../components';
import { Login, Register } from '../pages';
import NOtFound from '../pages/NotFound';

const AuthRoute = () => {
  return (
    <Routes>
      <Route path={PATH.home} element={<Login />} />
      <Route path={PATH.register} element={<Register />} />
      <Route path={PATH.notFound} element={<NOtFound />} />
    </Routes>
  );
};

export default AuthRoute;
