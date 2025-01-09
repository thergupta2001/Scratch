"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/cats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `Hello!` }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log(await response.json());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};