import React, { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

type Props = {
  className?: string;
  icon: ReactNode;
  onClick?: MouseEventHandler;
};

const IconButton: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={` text-gray-700 hover:text-black ${props.className}`}
    >
      {props.icon}
    </button>
  );
};

export default IconButton;
