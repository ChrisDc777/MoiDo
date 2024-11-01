// components/GoToNotesButton.jsx
"use client"; 

import React from 'react';
import { useRouter } from 'next/navigation';

const GoToNotesButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/notes');
  };

  return (
    <button
      className="bg-buttonSolidBg text-buttonSolidText py-2 px-4 rounded shadow hover:bg-buttonOutlinedBg hover:text-buttonOutlinedText transition"
      onClick={handleClick}
    >
      Go to Notes
    </button>
  );
};

export default GoToNotesButton;
