import React from "react";

const Button = ({ children, onClick, variant = "primary", ...props }) => {
  const base = "w-full py-2 rounded-lg font-semibold text-lg";
  const variants = {
    primary: "bg-pink-500 text-white hover:bg-pink-600",
    secondary: "bg-transparent text-pink-500 hover:underline",
  };
  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
