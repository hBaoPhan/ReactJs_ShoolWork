import React, { useState } from "react";
import BaseModal from "./BaseModal";
import Button from "./Button";

const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
];

const Onboarding = () => {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);

  return (
    <BaseModal open={open} onClose={() => setOpen(false)}>
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-2">Discover Cheffiy</h2>
      <p className="text-center text-gray-500 mb-6 text-sm">
        Easy and delicious cooking instructions right here. Start exploring now!
      </p>
      <div className="flex justify-center mb-6">
        <img
          src={images[step]}
          alt="Onboarding"
          className="rounded-xl w-[400px] h-[200px] object-cover"
        />
      </div>
      <div className="flex justify-center mb-4 space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === step ? "bg-pink-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
      <Button onClick={() => setStep(step < images.length - 1 ? step + 1 : setOpen(false))}>
        {step < images.length - 1 ? "Next" : "Finish"}
      </Button>
      <Button variant="secondary" onClick={() => setOpen(false)}>
        Skip
      </Button>
    </BaseModal>
  );
};

export default Onboarding;
