import React from "react";
import "./SocialButton.css";

const SocialButton = ({ icon, text, onClick, className }) => (
  <button
    className={`social-btn flex items-center justify-center w-full py-2 mb-3 rounded font-medium transition ${className}`}
    onClick={onClick}
    type="button"
  >
    <span className="mr-2">{icon}</span>
    {text}
  </button>
);

export default SocialButton;
