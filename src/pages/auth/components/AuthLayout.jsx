import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({
  mode,
  title,
  subtitle,
  subtitleLink,
  subtitleLinkText,
  leftTagline,
  leftTaglineEmphasis,
  leftDescription,
  leftPerks,
  children,
}) => {
  const isLogin = mode === 'login';
  const isRegister = mode === 'register';

  return (
    <div className="min-h-screen bg-navy text-white">
      <nav className="border-border fixed top-0 right-0 left-0 z-50 flex h-15 items-center justify-between border-b bg-[rgba(10,15,30,0.97)] px-4 backdrop-blur-xl sm:px-8">
        <Link to="/" className="font-syne text-[1.45rem] font-extrabold tracking-[-0.02em] text-white no-underline">
          ES<span className="text-teal">UUQ</span>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <Link
            to="/auth/login"
            className={`text-[0.82rem] no-underline transition-colors ${
              isLogin ? 'font-medium text-teal' : 'text-gray hover:text-teal'
            }`}
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className={`text-[0.82rem] no-underline transition-colors ${
              isRegister ? 'font-medium text-teal' : 'text-gray hover:text-teal'
            }`}
          >
            Register
          </Link>
          <Link to="/dashboard" className="text-gray hover:text-teal text-[0.82rem] no-underline transition-colors">
            My Account
          </Link>
          <Link to="/" className="text-gray hover:text-teal text-[0.82rem] no-underline transition-colors">
            Back to Store
          </Link>
        </div>
      </nav>

      <div className="grid min-h-screen pt-15 lg:grid-cols-2">
        <section className="relative hidden overflow-hidden bg-[linear-gradient(140deg,#0A1628_0%,#0D2137_50%,#091520_100%)] px-16 py-24 lg:flex lg:flex-col lg:justify-center">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(0,201,167,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(59,130,246,0.08) 0%, transparent 60%)',
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, #F8FAFC 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative z-10">
            <div className="font-syne mb-8 text-[2rem] font-extrabold text-white">
              ES<span className="text-teal">UUQ</span>
            </div>
            <h2 className="font-syne mb-4 text-[2.2rem] leading-[1.2] font-bold text-white">
              {leftTagline} <em className="text-teal not-italic">{leftTaglineEmphasis}</em>
            </h2>
            <p className="text-gray mb-10 max-w-95 text-[1rem] leading-[1.75]">{leftDescription}</p>

            <div className="flex flex-col gap-3.5">
              {leftPerks.map((perk) => (
                <div key={perk.text} className="flex items-center gap-3 text-[0.85rem] text-gray2">
                  <span className="bg-teal/12 border-teal/25 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-teal">
                    <perk.icon size={15} />
                  </span>
                  <span>{perk.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy2 flex items-center justify-center px-4 py-12 sm:px-8 lg:px-12">
          <div className="w-full max-w-105">
            <h1 className="font-syne text-[1.6rem] font-extrabold text-white">{title}</h1>

            {subtitle && (
              <p className="text-gray mt-2 text-[0.88rem] leading-[1.6]">
                {subtitle}{' '}
                {subtitleLink ? (
                  <Link to={subtitleLink} className="text-teal font-medium no-underline">
                    {subtitleLinkText}
                  </Link>
                ) : null}
              </p>
            )}

            <div className="mt-7">{children}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuthLayout;
