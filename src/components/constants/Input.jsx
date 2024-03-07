import React from "react";

const Input = ({ label = "", attributes = {} }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={attributes?.id || label.toLowerCase()}
          className="font-semibold first-letter:uppercase"
        >
          {label}
        </label>
      )}
      <input
        {...attributes}
        className="mb-2 w-full rounded-lg border bg-[#fafafa] px-2 py-2 leading-tight text-gray-700  outline-none placeholder:text-sm placeholder:text-[#737373] focus:border"
      />
    </div>
  );
};

export default Input;
