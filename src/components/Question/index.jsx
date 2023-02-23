import React from 'react';
import { RadioGroup } from '@headlessui/react';

function Questions({
  valueInitial,
  handleChange,
  handleFinish,
  handleNext,
  questionList,
  initialQuestions,
  questionReducer,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full md:fixed md:bottom-5 md:left-10 md:pb-3 md:w-[50%] lg:w-5/12  md:z-50">
        <div className="w-full flex items-center mt-8">
          <div className="w-[90%] bg-[#747475] h-3 mb rounded-md">
            <div
              className="bg-green-500 h-3 rounded-md"
              style={{
                width: `${
                  ((initialQuestions + 1) / questionReducer.length) * 100
                }%`,
              }}
            ></div>
          </div>
          <p className="ml-[10px]">
            {initialQuestions + 1} / {questionReducer.length}
          </p>
        </div>
      </div>
     

      <div className="text-center mt-[80px]">
        <h1 className="text-2xl font-bold text-blue-900 md:text-4xl">
          {questionList?.question}
        </h1>
      </div>

      <RadioGroup
        className="mt-[50px] mx-auto w-full max-w-[70%]"
        value={valueInitial}
        onChange={handleChange}
      >
        <div>
          {questionList?.option.map(item => (
            <RadioGroup.Option
              key={item.value}
              value={item}
              // disabled={!size.inStock}
              className={({ active }) =>
                classNames(
                  item
                    ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                    : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                  active ? 'ring-2 ring-green-500' : '',
                  'group border rounded-md py-3 px-4 flex items-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 mt-[20px] mb-[20px] w-[100%]',
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label
                    as="div"
                    className="flex flex-row items-center"
                  >
                    <p className="flex mr-[20px] bg-slate-200 rounded-full w-[30px] h-[30px] justify-center items-center">
                      <span className="text-[14px]">{item.letter}</span>
                    </p>
                    <p>{item.value}</p>
                  </RadioGroup.Label>
                  {item ? (
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-green-500' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-md',
                      )}
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                    >
                      <svg
                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                      >
                        <line
                          x1={0}
                          y1={100}
                          x2={100}
                          y2={0}
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </span>
                  )}
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      {initialQuestions + 1 === questionReducer.length ? (
        
         <div className="w-full p-6">
         <div className=" md:z-50 md:fixed md:bottom-0 md:right-0 md:py-6 md:w-5/12">
           <button
             onClick={handleFinish}
             type="submit"
             className="w-full py-3 px-12 text-base font-medium text-center text-white rounded-lg border bg-[#747475] hover:bg-[#31CD63] md:w-3/4"
           >
             CONTINUE
           </button>
         </div>
       </div>
      ) : (
        <div className="w-full p-6">
          <div className=" md:z-50 md:fixed md:bottom-0 md:right-0 md:py-6 md:w-5/12">
            <button
              onClick={handleNext}
              type="submit"
              className="w-full py-3 px-12 text-base font-medium text-center text-white rounded-lg border bg-[#747475] hover:bg-[#31CD63] md:w-3/4"
            >
              CONTINUE
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col space-x-6 space-y-6 justify-between md:bg-white md:fixed md:bottom-0 md:px-8 md:py-12 md:w-full"></div>
    </div>
  );
}

export default Questions;
