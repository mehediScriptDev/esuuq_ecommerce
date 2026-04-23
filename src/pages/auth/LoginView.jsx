import React, { useState } from 'react';
import { Heart, Package, Rocket, ShieldCheck } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { login } from '../../services/authService';
import AuthLayout from './components/AuthLayout';
import {
  AuthButton,
  AuthDivider,
  AuthInput,
  CheckboxField,
  SocialButton,
} from './components/AuthFormComponents';

const loginPerks = [
  { icon: Package, text: 'Track all your orders in real-time' },
  { icon: Heart, text: 'Access your saved wishlist anytime' },
  { icon: Rocket, text: 'Faster checkout with saved addresses' },
  { icon: ShieldCheck, text: 'Secure, encrypted account protection' },
];

const LoginView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { token, user } = await login(email, password);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.removeItem('pendingToken');
      localStorage.removeItem('pendingUser');

      if (remember) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      // If user was redirected to login from a protected route, go back there
      const returnTo = location.state?.from?.pathname;
      if (returnTo) {
        navigate(returnTo);
      } else if (user?.role === 'admin') {
        navigate('/admin');
      } else if (user?.role === 'subadmin') {
        navigate('/subadmin');
      } else if (user?.role === 'merchant') {
        navigate('/merchant');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      mode="login"
      title="Sign In"
      subtitle="Don't have an account?"
      subtitleLink="/auth/register"
      subtitleLinkText="Create one free"
      leftTagline="Welcome back to your marketplace"
      leftTaglineEmphasis=""
      leftDescription="Sign in to track orders, manage your wishlist, save addresses, and enjoy a personalized shopping experience."
      leftPerks={loginPerks}
    >
      <div className="mb-6 flex overflow-hidden rounded-md border border-white/10">
        <button
          type="button"
          className="flex-1 bg-teal px-4 py-2.5 text-[0.82rem] font-semibold tracking-[0.04em] text-navy"
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => navigate('/auth/register')}
          className="text-gray hover:text-teal flex-1 bg-transparent px-4 py-2.5 text-[0.82rem] font-medium tracking-[0.04em] transition-colors"
        >
          Create Account
        </button>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <SocialButton provider="google">Google</SocialButton>
        <SocialButton provider="facebook">Facebook</SocialButton>
      </div>

      <AuthDivider text="or continue with email" />

      <form onSubmit={handleSubmit}>
        <AuthInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="you@email.com"
          icon="mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <AuthInput
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          icon={showPassword ? 'eyeOff' : 'eye'}
          onIconClick={() => setShowPassword((prev) => !prev)}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="mb-4 text-right">
          <Link to="#" className="text-teal text-[0.78rem] no-underline">
            Forgot password?
          </Link>
        </div>

        {error ? <p className="mb-3 text-sm text-red">{error}</p> : null}

        <AuthButton type="submit" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In ->'}
        </AuthButton>

        <CheckboxField
          id="remember"
          checked={remember}
          onChange={(event) => setRemember(event.target.checked)}
        >
          Keep me signed in on this device
        </CheckboxField>

        <p className="text-gray mt-2 text-center text-[0.8rem]">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-teal font-medium no-underline">
            Create one free
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginView;
