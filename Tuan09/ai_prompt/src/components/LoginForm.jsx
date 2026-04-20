import React from "react";
import "./LoginForm.css";
import Input from "./Input";
import SocialButton from "./SocialButton";

const googleIcon = (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.383 0-6.148-2.797-6.148-6.25s2.765-6.25 6.148-6.25c1.93 0 3.227.82 3.969 1.523l2.711-2.633c-1.711-1.57-3.906-2.523-6.68-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.742 0 9.547-4.023 9.547-9.695 0-.652-.07-1.148-.156-1.547z"/></svg>
);
const facebookIcon = (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.322-.593 1.322-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z"/></svg>
);
const appleIcon = (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.664 13.341c-.021-2.144 1.753-3.169 1.832-3.217-1.001-1.463-2.561-1.664-3.111-1.684-1.323-.134-2.583.779-3.254.779-.671 0-1.707-.76-2.812-.74-1.447.021-2.788.842-3.533 2.143-1.509 2.617-.386 6.484 1.084 8.613.717 1.033 1.57 2.191 2.691 2.149 1.084-.042 1.494-.693 2.803-.693 1.309 0 1.672.693 2.813.672 1.166-.021 1.899-1.051 2.613-2.086.822-1.201 1.162-2.367 1.182-2.426-.025-.012-2.271-.871-2.293-3.457zm-2.633-6.341c.594-.721.995-1.721.885-2.721-.855.034-1.888.569-2.504 1.29-.551.637-1.034 1.654-.852 2.627.902.07 1.832-.457 2.471-1.196z"/></svg>
);

const LoginForm = () => {
  return (
    <div className="login-form-container w-[400px] bg-white rounded-lg p-8 shadow-lg">
      <button className="close-btn absolute right-8 top-8 text-2xl font-bold">&times;</button>
      <h2 className="text-3xl font-bold mb-2">Login</h2>
      <p className="mb-4 text-gray-600">Enter your email to log in.</p>
      <form className="mb-4">
        <Input type="email" placeholder="Enter your email" />
        <button type="submit" className="w-full mt-4 py-2 rounded bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">Continue</button>
      </form>
      <div className="flex items-center mb-4">
        <div className="flex-grow h-px bg-gray-300" />
        <span className="mx-2 text-gray-400 text-sm">OR</span>
        <div className="flex-grow h-px bg-gray-300" />
      </div>
      <SocialButton icon={googleIcon} text="Continue with Google" className="google-btn" />
      <SocialButton icon={facebookIcon} text="Continue with Facebook" className="facebook-btn" />
      <SocialButton icon={appleIcon} text="Continue with Apple" className="apple-btn" />
      <p className="mt-4 text-xs text-gray-400 text-center">
        By continuing, you agree to the updated <a href="#" className="underline">Terms of Sale</a>, <a href="#" className="underline">Terms of Service</a>, and <a href="#" className="underline">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default LoginForm;
