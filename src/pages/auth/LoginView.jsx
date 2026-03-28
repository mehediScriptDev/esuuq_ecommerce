import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import { AuthInput, AuthButton, SocialButton } from './components/AuthFormComponents';
import { login } from '../../services/authService';

const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { token, user } = await login(email, password);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Sign In"
      subtitle="Don't have an account?"
      subtitleLink="/auth/register"
      subtitleLinkText="Create one free"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <SocialButton icon="google">Google</SocialButton>
            <SocialButton icon="facebook">Facebook</SocialButton>
        </div>

        <div className="flex items-center text-center">
            <hr className="flex-grow border-border"/>
            <span className="px-2 text-sm text-gray-400">or continue with email</span>
            <hr className="flex-grow border-border"/>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-400">Email Address</label>
            <AuthInput id="email" type="email" placeholder="you@email.com" icon="mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-400">Password</label>
            <AuthInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              icon={showPassword ? 'eyeOff' : 'eye'}
              onIconClick={() => setShowPassword(!showPassword)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="text-right">
            <Link to="#" className="text-sm font-medium text-teal hover:underline">
              Forgot password?
            </Link>
          </div>
          <AuthButton type="submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In →'}
          </AuthButton>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginView;

        <div className="">
          <img src="/img/login.png" alt="City skyline" className="h-screen w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default LoginView;
