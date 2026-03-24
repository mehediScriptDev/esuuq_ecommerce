import { Outlet } from 'react-router-dom';
import SidebarLayout from './SidebarLayout';

const DashLayout = () => {
  return (
    <main className="flex min-h-screen bg-slate-200">
      <aside className="">
        <SidebarLayout />
      </aside>

      <Outlet />
    </main>
  );
};

export default DashLayout;
