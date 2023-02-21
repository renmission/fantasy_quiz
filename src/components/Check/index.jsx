/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Field } from 'formik';
import React, {useState} from 'react';

function Check({
  field: { name, value, onChange }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, setFieldTouched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  label,
  className,
  options,
  ...props
}) {

  const [clicked, setClicked] = useState(false);

  const handleChange = () => {
    setClicked(!clicked);
  };

  return (
    <fieldset>
      {/* <div id="checkbox-group">{name}</div> */}
      <div role="group" aria-labelledby="checkbox-group">
        {options.map(x => (
          <div key={x.id} className={`${clicked ? " bg-green-500 text-white" : 'flex align-middle space-x-2 p-6 bg-white rounded-md '}`}>
            <Field
              className="w-6 h-6 rounded-full"
              type="checkbox"
              name={name}
              id={x.id}
              //   checked={() => onCheck(value, x.id)}
              checked={value.some(v => v === x.id)}
                // onChange={() => toggleCheck(name, value, x.id)}
              onChange={(e) => {
                const index = value.findIndex(v => v === x.id);
                if (index === -1) {
                  setFieldValue(name, [...value, x.id]);
                  handleChange(e)
                } else {
                  setFieldValue(name, [
                    ...value.slice(0, index),
                    ...value.slice(index + 1),
                  ]);
                }
              }}
            />
            
            <label className='inline-block pl-[0.15rem] hover:cursor-pointer' htmlFor={x.id}>{x.text}</label>
          </div>
        ))}
      </div>
      {touched[name] && errors[name] && (
        <p className="text-red-500 text-sm font-medium">{errors[name]}</p>
      )}
    </fieldset>
  );
}

export default Check;
