import { Route, Routes } from 'react-router-dom';
import { PATH } from '../components';
import { Category, Home, Products } from '../pages';
import NOtFound from '../pages/NotFound';

const Dashboard = () => {
  return (
    <Routes>
      <Route path={PATH.home} element={<Home />} />
      <Route path={PATH.category} element={<Category />} />
      <Route path={PATH.products} element={<Products />} />
      <Route path={PATH.notFound} element={<NOtFound />} />
    </Routes>
  );
};

export default Dashboard;
