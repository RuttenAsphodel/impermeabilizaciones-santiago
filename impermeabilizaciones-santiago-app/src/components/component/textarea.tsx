import React from 'react';

interface TextareaProps {
  label: string;
  placeholder: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, placeholder }) => {
  return (
    <div>
      <label htmlFor={label.toLowerCase().replace(/\s+/g, '-')}>{label}</label>
      <textarea
        id={label.toLowerCase().replace(/\s+/g, '-')}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Textarea;