import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'solid-black';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', href, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#E4B801] text-[#010101] hover:bg-[#c9a200] focus:ring-[#E4B801]",
    outline: "border-2 border-[#E4B801] text-[#E4B801] hover:bg-[#E4B801] hover:text-[#010101] focus:ring-[#E4B801]",
    "solid-black": "bg-[#010101] text-white hover:bg-gray-800 focus:ring-black"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};