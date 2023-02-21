import React, { useCallback, useEffect, useState } from 'react';
import { Field, Formik } from 'formik';
import { Link } from 'react-router-dom';
import MultiStepsForm, { FormStep } from '../../components/MultiStepsForm';
import ProgressBar from '../../components/ProgressBar';

function Quiz({ loadQuestions, questions, loading, hasError }) {
  const [progress, setProgress] = useState(0)

  const loadData = useCallback(async () => {
    await Promise.resolve([loadQuestions()]);
  }, [loadQuestions]);

  const { data } = questions;

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (hasError) {
    return <h1 data-testid="error">Something went wrong...</h1>;
  }

  

  return (
    <MultiStepsForm
      initialValues={[]}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {data?.data.map(q => (
        <FormStep key={q._id} onSubmit={() => console.log('Person')}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-between w-full p-6 items-center">
              <div className="flex space-x-1 bg-white mb-2 py-1 px-2 rounded-md items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 bg-blue-900 text-green-500 rounded-full p-1 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                  />
                </svg>
                <span className="font-bold text-sx md:text-lg">{q.mark}</span>
              </div>
              <h2 className="font-bold text-lg md:text-xl">
                Fantasy Quiz #156
              </h2>
              <Link to={'/dashboard'}>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 bg-white p-1 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </Link>
            </div>

            <div className="w-full  px-6 space-y-4 md:fixed md:bottom-4 md:left-10 md:px-8  md:ml-10 md:py-6 md:bg-white md:w-5/12 md:z-50">
              <div className="w-full bg-white rounded-full md:bg-orange-50">
                <div
                  className="bg-green-600 text-xs font-semibold text-white text-center leading-none rounded-full md:p-0.5"
                  style={{ width: `20%` }}
                >
                  1/{data.data.length}
                </div>
              </div>
            </div>

            {/* <ProgressBar /> */}

            <div className="px-6 py-4">
              <h2 className="text-xl text-blue-900 font-bold py-8">
                {q.question}
              </h2>

              {q.options.map((opts, i) => (
                <div key={i} className="bg-white w-full mt-6 p-4 rounded-md block">
                  <label className="text-gray-500 font-bold">
                    <input
                      className="mr-2 leading-tight rounded-full "
                      type="checkbox"
                      value={opts}
                    />
                    <span className="text-sm">{opts}</span>
                  </label>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-x-6 space-y-6 justify-between md:bg-white md:fixed md:bottom-0 md:px-8 md:py-12 md:w-full"></div>
          </div>
        </FormStep>
      ))}
    </MultiStepsForm>
  );
}

export default Quiz;
