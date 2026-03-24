import { Outlet } from 'react-router-dom';
import NavbarLayout from '../../components/template/public/NavbarLayout';
import FooterLayout from '../../components/template/public/FooterLayout';

const RootLayout = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <NavbarLayout />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </>
  );
};

export default RootLayout;
