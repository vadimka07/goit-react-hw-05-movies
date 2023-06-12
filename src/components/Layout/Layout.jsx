import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
    </div>
  );
}

export default Layout;
