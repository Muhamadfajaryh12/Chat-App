import React from "react";

const Button = ({ title, type }) => {
  return (
    <button
      className="bg-blue-500 p-2 w-72 text-white font-semibold mt-2 hover:bg-blue-600"
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
