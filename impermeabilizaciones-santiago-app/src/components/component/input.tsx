import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder }) => {
  return (
    <div>
      <label htmlFor={label.toLowerCase().replace(/\s+/g, '-')}>{label}</label>
      <input
        type="text"
        id={label.toLowerCase().replace(/\s+/g, '-')}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input