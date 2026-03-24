import { Outlet } from 'react-router-dom';
import NavbarLayout from './NavbarLayout';
import FooterLayout from './FooterLayout';

const RootLayout = () => {
  return (
    <>
      <NavbarLayout />
      <main>
        <Outlet />
      </main>
      <FooterLayout />
    </>
  );
};

export default RootLayout;
