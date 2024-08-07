import React from "react";

const Input = ({ type, placeholder, name, required, error, register }) => {
  return (
    <div className="flex flex-col">
      {error ? (
        <label htmlFor={name} className="text-red-600 text-xs font-semibold">
          Required*
        </label>
      ) : (
        ""
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-72 border-2 p-1 "
        name={name}
        {...register(name, { required: required })}
      />
    </div>
  );
};

export default Input;
