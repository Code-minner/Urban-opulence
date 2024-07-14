import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  value: string;
  setValue: Function;
  isTextArea?: boolean;
};

const TextInput = ({
  name,
  label,
  type,
  value,
  setValue,
  placeholder,
  isTextArea,
}: InputProps) => {
  return (
    <div className="w-full text-base flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      {isTextArea ? (
        <textarea
          className=" p-2 px-3 focus:border-primary focus:outline-none border-2"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <input
          className=" p-2 px-3 focus:border-primary focus:outline-none border-2"
          type={type}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default TextInput;
