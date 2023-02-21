import React from 'react';

const ProgressBar = ({ stepNumber }) => {
  return (
    <div className="w-full  px-6 space-y-4 md:fixed md:bottom-4 md:left-10 md:px-8  md:ml-10 md:py-6 md:bg-white md:w-5/12 md:z-50">
      <div className="w-full bg-white rounded-full md:bg-orange-50">
        <div
          className="bg-green-600 text-xs font-semibold text-white text-center leading-none rounded-full md:p-0.5"
          style={{ width: `20%` }}
        >
          1/5
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
