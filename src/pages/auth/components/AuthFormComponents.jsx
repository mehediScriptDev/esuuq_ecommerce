import { Mail, Lock, Eye, EyeOff, User, Smartphone } from 'lucide-react';

export const AuthInput = ({ id, type, placeholder, icon, hasPrefix, prefix, onIconClick, onChange }) => {
  const Icon = {
    mail: Mail,
    lock: Lock,
    eye: Eye,
    eyeOff: EyeOff,
    user: User,
    smartphone: Smartphone,
  }[icon];

  return (
    <div className="relative">
      {hasPrefix && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">{prefix}</span>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full bg-navy-3 border border-border text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal ${hasPrefix ? 'pl-10' : ''} ${Icon ? 'pr-10' : ''}`}
      />
      {Icon && (
        <button type="button" onClick={onIconClick} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-teal">
          <Icon size={20} />
        </button>
      )}
    </div>
  );
};

export const AuthButton = ({ children, onClick, disabled, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="w-full py-3 font-semibold text-navy bg-teal rounded-md hover:bg-teal-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-2 focus:ring-teal disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {children}
  </button>
);

export const SocialButton = ({ children, icon }) => {
    const Icon = {
        google: 'G',
        facebook: 'f'
    }[icon];
  return (
    <button className="flex items-center justify-center w-full gap-2 py-3 font-semibold text-white transition-colors duration-200 bg-navy-3 border rounded-md border-border hover:bg-navy-4 hover:border-teal">
      <span className="text-xl">{Icon}</span>
      {children}
    </button>
  );
};
