import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ title, subtitle, subtitleLink, subtitleLinkText, children }) => {
  return (
    <div className="min-h-screen bg-navy-2 text-white grid md:grid-cols-2">
      {/* Left Side */}
      <div className="relative flex-col items-center justify-center hidden p-16 text-white bg-navy md:flex">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-3 to-navy-4 opacity-40"></div>
        <div className="z-10">
          <Link to="/" className="text-4xl font-bold font-syne">ES<span className="text-teal">UUQ</span></Link>
          <p className="mt-4 text-lg text-gray-300">Your one-stop marketplace for everything.</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold font-syne">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-gray-400">
              {subtitle}
              {subtitleLink && <Link to={subtitleLink} className="font-semibold text-teal hover:underline"> {subtitleLinkText}</Link>}
            </p>
          )}
          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
