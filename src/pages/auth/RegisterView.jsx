import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import { AuthInput, AuthButton, SocialButton } from './components/AuthFormComponents';
import { register } from '../../services/authService';

const RegisterView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await register(formData);
      navigate('/auth/otp');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Already have one?"
      subtitleLink="/auth/login"
      subtitleLinkText="Sign in here"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <SocialButton icon="google">Google</SocialButton>
            <SocialButton icon="facebook">Facebook</SocialButton>
        </div>

        <div className="flex items-center text-center">
            <hr className="flex-grow border-border"/>
            <span className="px-2 text-sm text-gray-400">or sign up with email</span>
            <hr className="flex-grow border-border"/>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-gray-400">First Name</label>
                    <AuthInput id="firstName" type="text" placeholder="John" icon="user" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-400">Last Name</label>
                    <AuthInput id="lastName" type="text" placeholder="Doe" icon="user" value={formData.lastName} onChange={handleChange} />
                </div>
            </div>
          <div>
            <label className="text-sm font-medium text-gray-400">Email Address</label>
            <AuthInput id="email" type="email" placeholder="you@email.com" icon="mail" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-400">Phone Number</label>
            <AuthInput id="phone" type="tel" placeholder="(555) 000-0000" icon="smartphone" hasPrefix={true} prefix="+1" value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-400">Password</label>
            <AuthInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Min 8 characters"
              icon={showPassword ? 'eyeOff' : 'eye'}
              onIconClick={() => setShowPassword(!showPassword)}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="flex items-start">
            <input id="terms" type="checkbox" className="w-4 h-4 mt-1 rounded accent-teal" required />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
              I agree to the <Link to="#" className="text-teal hover:underline">Terms of Service</Link> and <Link to="#" className="text-teal hover:underline">Privacy Policy</Link>
            </label>
          </div>
          <AuthButton type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account →'}
          </AuthButton>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RegisterView;

                type="email"
                placeholder="john.doe@gmail.com"
                value={formData.email}
                onChange={handleChange('email')}
              />
              <TextInput
                label="Phone Number"
                type="tel"
                placeholder="+1 234 567 890"
                value={formData.phoneNumber}
                onChange={handleChange('phoneNumber')}
              />
            </div>

            {/* Password field */}
            <TextInput
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••••"
              value={formData.password}
              onChange={handleChange('password')}
              right={<EyeIcon show={showPassword} onClick={() => setShowPassword(!showPassword)} />}
            />

            {/* Confirm Password field */}
            <TextInput
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="••••••••••"
              value={formData.confirmPassword}
              onChange={handleChange('confirmPassword')}
              right={
                <EyeIcon
                  show={showConfirmPassword}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              }
            />

            {/* Terms and Conditions checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300 text-[#2f66ff] focus:ring-[#2f66ff]"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="terms" className="ml-2 text-[14px] text-[#111b2b]">
                I agree to all the Terms and Privacy Policies
              </label>
            </div>

            {/* Create Account button */}
            <button
              type="submit"
              className="w-full rounded-md bg-[#2f66ff] py-3 font-medium text-white transition hover:bg-[#1f4fe0]"
            >
              Create account
            </button>
          </form>

          {/* Already have an account link */}
          <p className="mt-6 text-center text-[14px] text-[#6b7280]">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-rose-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterView;
