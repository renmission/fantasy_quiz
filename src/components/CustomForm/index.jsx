/* eslint-disable react/prop-types */
import { Field, Form, Formik } from 'formik';
import React from 'react';

function CustomForm({ fields, btnText, children, ...props }) {
  return (
    <Formik {...props}>
      {({ isValid, dirty, isSubmitting, errors }) => (
        <Form className="mt-8 space-y-6">
          {errors.serverError && (
            <p className="text-red-500 text-center text-base font-medium">
              {errors.serverError}
            </p>
          )}
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            {fields.map(item => (
              <Field key={item.name} {...item} />
            ))}
          </div>
          {children}
          <div>
            <button
              type="submit"
              disabled={!(dirty && isValid) || isSubmitting}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
            >
              {btnText}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CustomForm;
