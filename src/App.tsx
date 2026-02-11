import { useContext } from 'react';
import { Context } from './context/Conttext';
import Dashboard from './routes/Dashboard';
import AuthRoute from './routes/AuthRoute';

const App = () => {
  const { token } = useContext(Context);
  return token ? <Dashboard /> : <AuthRoute />;
};

export default App;
