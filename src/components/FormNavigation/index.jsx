import React from 'react';

const FormNavigation = ({ hasPrevious, isLastStep, onBackClick }) => {
  return (
    <div className="w-full p-6">
      <div className=" md:z-50 md:fixed md:bottom-0 md:right-0 md:py-6 md:w-5/12">
        <button
          type="submit"
          className="w-full py-3 px-12 text-base font-medium text-center text-white rounded-lg border bg-gray-400 md:bg-gray-400 md:w-3/4"
        >
          {isLastStep ? 'FINISH' : 'CONTINUE'}
        </button>
      </div>
    </div>
  );
};

export default FormNavigation;
