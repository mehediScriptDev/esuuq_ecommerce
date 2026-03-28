import React, { useEffect, useRef, useState } from 'react';
import { RefreshCw, ShieldCheck, Smartphone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { AuthButton } from '../components/AuthFormComponents';

const otpPerks = [
  { icon: ShieldCheck, text: 'OTP expires in 10 minutes' },
  { icon: Smartphone, text: 'Sent to your email and phone' },
  { icon: RefreshCw, text: 'Can resend after 60 seconds' },
];

const OTPView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const inputRefs = useRef([]);

  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const email = location.state?.email || JSON.parse(localStorage.getItem('pendingUser') || 'null')?.email;

  useEffect(() => {
    if (!secondsLeft) return undefined;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handleInput = (index, value) => {
    const cleanValue = value.replace(/\D/g, '').slice(0, 1);
    const nextDigits = [...digits];
    nextDigits[index] = cleanValue;
    setDigits(nextDigits);

    if (cleanValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setSecondsLeft(60);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      const code = digits.join('');
      if (code.length !== 6) {
        setError('Please enter a valid 6-digit code.');
        setLoading(false);
        return;
      }

      const pendingToken = localStorage.getItem('pendingToken');
      const pendingUser = localStorage.getItem('pendingUser');

      let nextPath = '/dashboard';
      if (pendingToken && pendingUser) {
        localStorage.setItem('token', pendingToken);
        localStorage.setItem('user', pendingUser);
        localStorage.removeItem('pendingToken');
        localStorage.removeItem('pendingUser');

        try {
          const u = JSON.parse(pendingUser);
          if (u?.role === 'admin') nextPath = '/admin';
          if (u?.role === 'merchant') nextPath = '/merchant';
        } catch (e) {}
      }

      setLoading(false);
      navigate(nextPath);
    }, 600);
  };

  return (
    <AuthLayout
      mode="otp"
      title="Verify Your Account"
      subtitle={`We sent a 6-digit code to ${email || 'your email'}. Enter it below to continue.`}
      leftTagline="Almost there! Verify your account"
      leftTaglineEmphasis=""
      leftDescription="We sent a 6-digit code to your email and phone. Enter it to confirm your identity and activate your account."
      leftPerks={otpPerks}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-5 flex justify-center gap-2.5 sm:gap-3">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(element) => {
                inputRefs.current[index] = element;
              }}
              value={digit}
              onChange={(event) => handleInput(index, event.target.value)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              className="bg-navy3 border-border focus:border-teal h-14 w-11 rounded-lg border text-center font-['Syne'] text-[1.35rem] font-bold text-white outline-none sm:w-13"
              type="text"
              inputMode="numeric"
              maxLength={1}
            />
          ))}
        </div>

        {error ? <p className="mb-3 text-center text-sm text-red">{error}</p> : null}

        <p className="text-gray mb-5 text-center text-[0.8rem]">
          Didn't receive it?{' '}
          <button
            type="button"
            onClick={handleResend}
            disabled={secondsLeft > 0}
            className="text-teal disabled:text-gray font-medium disabled:cursor-not-allowed"
          >
            Resend code
          </button>{' '}
          {secondsLeft > 0 ? <span>in {secondsLeft}s</span> : null}
        </p>

        <AuthButton type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify and Continue'}
        </AuthButton>

        <AuthButton type="button" variant="outline" onClick={() => navigate('/auth/register')}>
          Back
        </AuthButton>
      </form>
    </AuthLayout>
  );
};

export default OTPView;
