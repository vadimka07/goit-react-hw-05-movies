import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Suspense fallback={<div>Loading ...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default Layout;
