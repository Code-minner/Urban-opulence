"use client";
import React, { MouseEvent, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  outlined?: boolean;
  lightHover?: boolean;
};

function Button({ children, className, outlined, lightHover }: Props) {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const circleRadius = 20; // half of the circle's width/height (w-10 = 40, so 40/2 = 20)
    const x = event.clientX - rect.left - circleRadius; // x position within the element
    const y = event.clientY - rect.top - circleRadius; // y position within the element

    setPosX(x);
    setPosY(y);
  };

  const handleClick = () => {
    setScale(10);
    setTimeout(() => {
      setScale(1);
    }, 300);
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className={`${
        outlined ? "outlined_btn" : "primary_btn"
      } group overflow-hidden relative ${className}`}
    >
      <span
        style={{
          left: posX,
          top: posY,
          scale: scale,
        }}
        className={`absolute scale-0  group-hover:scale-100 duration-100 z-[2] rounded-full    w-10 h-10 ${
          outlined || lightHover ? "bg-purple-100" : "bg-purple-700"
        }`}
      ></span>

      <div
        className={`relative   z-[10] ${
          outlined ? "text-primary  " : "text-white"
        }`}
      >
        {children}
      </div>
    </button>
  );
}

export default Button;
