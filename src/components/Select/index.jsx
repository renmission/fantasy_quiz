/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';

function Select({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  className,
  options,
  ...props
}) {
  return (
    <div>
      <select
        id={props.id}
        {...field}
        {...props}
        className={clsx(
          'relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-gray-500',
          {
            [className || '']: !!className,
          },
        )}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {touched[field.name] && errors[field.name] && (
        <p className="text-red-500 text-sm font-medium">{errors[field.name]}</p>
      )}
    </div>
  );
}

export default Select;
