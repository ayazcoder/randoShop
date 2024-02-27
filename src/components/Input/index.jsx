import React from 'react';

export const Input = ({
  label = '',
  name = '',
  type = 'text',
  className = '',
  inputClassName = '',
  isRequired = true,
  placeholder = '',
  value = '',
  onChange = () => {},
}) => {
  const handleChange = (e) => {
    const inputValue = type === 'file' ? e.target.files[0] : e.target.value;
    onChange({ target: { name, value: inputValue } });
  };

  return (
    <div className={`w-1/2 ${className}`}>
      <label htmlFor={name} className='block mb-2 text-sm font-medium w-full text-color-primary'>
        {label}
      </label>
      {type === 'file' ? (
        <input
          type={type}
          id={name}
          onChange={handleChange}
          className={`border w-full p-2.5 border-gray-300 text-sm rounded-lg ${inputClassName}`}
          required={isRequired}
        />
      ) : (
        <input
          type={type}
          id={name}
          value={value}
          onChange={handleChange}
          className={`border w-full p-2.5 border-gray-300 text-sm rounded-lg ${inputClassName}`}
          placeholder={placeholder}
          required={isRequired}
        />
      )}
    </div>
  );
};
