import React from "react";
import "./Input.css";

const Input = ({ type = "text", placeholder, ...props }) => (
  <input
    type={type}
    className="custom-input w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
    placeholder={placeholder}
    {...props}
  />
);

export default Input;
