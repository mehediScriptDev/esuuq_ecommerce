import React from 'react';

const PromoCard = ({ tag, title, subtitle, icon, variant = 'big', buttonText = 'Shop Now' }) => {
  const getGradient = () => {
    switch (variant) {
      case 'small':
        return 'bg-gradient-to-br from-purple-950 to-purple-900';
      case 'small2':
        return 'bg-gradient-to-br from-amber-950 to-yellow-900';
      default:
        return 'bg-gradient-to-br from-blue-950 to-teal-950';
    }
  };

  const getBorderColor = () => {
    switch (variant) {
      case 'small':
        return 'border-purple-600/20';
      case 'small2':
        return 'border-yellow-600/20';
      default:
        return 'border-teal/20';
    }
  };

  const getButtonBg = () => {
    switch (variant) {
      case 'small':
        return 'bg-purple-600 hover:bg-purple-700';
      case 'small2':
        return 'bg-yellow text-navy hover:bg-yellow/80';
      default:
        return 'bg-teal text-navy hover:bg-teal2';
    }
  };

  return (
    <div
      className={`rounded overflow-hidden relative p-8 flex flex-col justify-end min-h-40  border ${getGradient()} ${getBorderColor()}`}
    >
      {/* BACKGROUND ICON */}
      <span className="absolute -top-4 -right-2 text-9xl opacity-10">{icon}</span>

      {/* CONTENT */}
      <div className="relative z-10">
        <p className="text-xs font-bold uppercase tracking-widest text-teal mb-2">{tag}</p>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray mb-4">{subtitle}</p>
        <button
          className={`text-xs font-semibold px-4 py-2 rounded transition-all text-white ${getButtonBg()}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
