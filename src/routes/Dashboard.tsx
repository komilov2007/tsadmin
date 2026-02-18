import { Route, Routes } from 'react-router-dom';
import { PATH } from '../components';
import { Category, Home, ProductCrud, ProductMore, Products } from '../pages';
import NotFound from '../pages/NotFound';
import SiteBar from '../modules/SiteBar';
import Header from '../modules/Header';

const DashboardRoute = () => {
  const dashboardList = [
    { id: 1, path: PATH.home, element: <Home /> },
    { id: 2, path: PATH.products, element: <Products /> },
    { id: 3, path: PATH.category, element: <Category /> },
    { id: 4, path: PATH.notFound, element: <NotFound /> },
    { id: 5, path: PATH.productsCreate, element: <ProductCrud /> },
    { id: 6, path: PATH.productsMore, element: <ProductMore /> },
    { id: 7, path: PATH.productsUpdate, element: <ProductCrud /> },
  ];
  return (
    <div className="flex">
      <SiteBar />
      <div className="w-[78%] h-screen overflow-y-auto">
        <Header />
        <Routes>
          {dashboardList.map((item) => (
            <Route key={item.id} path={item.path} element={item.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default DashboardRoute;
