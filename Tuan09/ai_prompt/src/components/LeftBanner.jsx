import React from "react";
import "./LeftBanner.css";

const LeftBanner = () => {
  return (
    <div className="left-banner-content flex flex-col items-center justify-center h-full p-8">
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
          alt="food"
          className="rounded-lg shadow-lg w-96 h-96 object-cover"
        />
      </div>
      <div className="text-center">
        <p className="quote text-white text-2xl font-semibold drop-shadow-lg">
          "Embrace the art of cooking, where flavors come alive!"
        </p>
      </div>
    </div>
  );
};

export default LeftBanner;
