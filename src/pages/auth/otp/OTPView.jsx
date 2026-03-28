import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OtpInput = ({ otp, setOtp }) => {
  const inputsRef = useRef([]);

  const handleInput = (e, index) => {
    const input = e.target;
    const newOtp = [...otp];
    newOtp[index] = input.value;
    setOtp(newOtp.join(''));

    if (input.value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center gap-3">
      {Array(6).fill(0).map((_, i) => (
        <input
          key={i}
          ref={el => inputsRef.current[i] = el}
          type="text"
          maxLength="1"
          className="w-12 h-14 text-2xl font-bold text-center bg-navy-3 border rounded-lg border-border focus:border-teal focus:ring-1 focus:ring-teal"
          onInput={(e) => handleInput(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
};


const OTPView = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Mock verification
        setTimeout(() => {
            if (otp.length === 6) {
                // In a real app, you would verify the OTP with the backend
                // For now, we'll just log the user in.
                const user = JSON.parse(localStorage.getItem('user'));
                localStorage.setItem('token', 'mock-jwt-token-for-esuuq');
                navigate('/dashboard');
            } else {
                setError('Please enter a valid 6-digit OTP.');
            }
            setLoading(false);
        }, 1000);
    };

  return (
    <div className="min-h-screen bg-navy-2 text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md">
            <div className="text-center">
                <h1 className="text-3xl font-bold font-syne">Verify Your Account</h1>
                <p className="mt-2 text-gray-400">
                    We sent a 6-digit code to your email. Enter it below.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mt-8">
                    <OtpInput otp={otp} setOtp={setOtp} />
                </div>

                {error && <p className="mt-4 text-sm text-center text-red-500">{error}</p>}

                <div className="mt-6 text-center text-gray-400">
                    Didn't receive it? <Link to="#" className="font-semibold text-teal hover:underline">Resend code</Link>
                </div>

                <div className="mt-6">
                    <button type="submit" disabled={loading} className="w-full py-3 font-semibold text-navy bg-teal rounded-md hover:bg-teal-dark focus:outline-none disabled:opacity-50">
                        {loading ? 'Verifying...' : 'Verify & Continue'}
                    </button>
                </div>
            </form>
             <div className="mt-4">
                <Link to="/auth/register">
                    <button className="w-full py-3 font-semibold text-gray-300 bg-transparent border rounded-md border-border hover:border-teal hover:text-teal">
                        &larr; Back
                    </button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default OTPView;
