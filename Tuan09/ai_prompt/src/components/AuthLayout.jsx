import React from "react";
import "./AuthLayout.css";
import LeftBanner from "./LeftBanner";
import LoginForm from "./LoginForm";

const AuthLayout = () => {
  return (
    <div className="auth-layout flex w-full h-screen">
      <div className="left-banner w-1/2 h-full">
        <LeftBanner />
      </div>
      <div className="right-form w-1/2 h-full flex items-center justify-center bg-white">
        <LoginForm />
      </div>
    </div>
  );
};

export default AuthLayout;
