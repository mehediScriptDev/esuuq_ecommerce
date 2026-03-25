import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';

const DashboardShell = ({
  panelLabel,
  navSections,
  user,
  actionButtons = [],
  children,
}) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-navy flex h-screen flex-col overflow-hidden">
      <header className="z-50 flex h-14 shrink-0 items-center justify-between border-b border-white/[0.07] bg-[rgba(10,15,30,0.98)] px-4 min-[700px]:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-gray hover:bg-teal/10 hover:text-teal rounded p-1.5 transition-colors min-[700px]:hidden"
            title="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <Link
            to="/"
            className="font-['Syne'] text-[1.3rem] font-extrabold tracking-tight text-white no-underline"
          >
            ES<span className="text-teal">UUQ</span>
            <sub className="text-gray ml-1 align-middle text-[0.52rem] font-normal tracking-[0.14em] uppercase">
              {panelLabel}
            </sub>
          </Link>
        </div>

        <div className="flex items-center gap-2 min-[700px]:gap-3">
          {actionButtons.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.title}
                type="button"
                onClick={() => action.onClick?.(navigate)}
                className="text-gray hover:bg-teal/10 hover:text-teal relative rounded p-1.5 transition-colors"
                title={action.title}
              >
                <Icon size={18} />
                {action.dot ? <span className="bg-red absolute top-1 right-1 h-2 w-2 rounded-full" /> : null}
              </button>
            );
          })}

          <div className="flex items-center gap-2.5">
            <div className="from-teal text-navy flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br to-blue-500 text-[0.8rem] font-bold">
              {user.initials}
            </div>
            <div className="hidden flex-col min-[700px]:flex">
              <span className="text-[0.78rem] font-medium text-white">{user.name}</span>
              <span className="text-teal text-[0.65rem]">{user.subtitle}</span>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-40 bg-black/60 min-[700px]:hidden"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <aside
          className={`scrollbar-hide fixed top-14 bottom-0 left-0 z-50 w-[230px] overflow-y-auto border-r border-white/[0.07] bg-[#0D1626] transition-transform duration-300 min-[700px]:static min-[700px]:translate-x-0 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {navSections.map((section) => (
            <div key={section.label} className="px-3 pt-4 pb-2">
              <div className="text-gray mb-1.5 px-2 text-[0.6rem] font-medium tracking-[0.18em] uppercase">
                {section.label}
              </div>
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.id}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `mb-0.5 flex items-center gap-2.5 rounded px-3 py-2 text-[0.82rem] no-underline transition-all ${
                        isActive
                          ? 'bg-teal/10 text-teal'
                          : 'text-gray bg-transparent hover:bg-white/[0.04] hover:text-white'
                      }`
                    }
                  >
                    <Icon size={16} className="shrink-0" />
                    {item.label}
                    {item.badge ? (
                      <span
                        className={`ml-auto rounded-full px-1.5 py-0 text-[0.6rem] font-bold ${item.badgeColor || 'bg-red text-white'}`}
                      >
                        {item.badge}
                      </span>
                    ) : null}
                  </NavLink>
                );
              })}
            </div>
          ))}

          <div className="mt-auto border-t border-white/[0.07] p-3">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-red hover:bg-red/10 flex w-full items-center gap-2.5 rounded px-3 py-2 text-left text-[0.82rem] transition-colors"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </aside>

        <main className="bg-navy flex-1 overflow-y-auto min-[700px]:ml-0">
          <div className="min-h-full p-4 min-[700px]:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardShell;