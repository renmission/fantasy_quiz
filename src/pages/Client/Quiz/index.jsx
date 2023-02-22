import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';
import Questions from './questions';
import Results from '../Results';

function Quiz({ getQuestions, questionReducer }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [initialQuestions, setInitialQuestions] = useState(0);
  const [valueInitial, setInitialValue] = useState(0);
  const [answer, setAnswer] = useState();
  const [resultArray, setResultArray] = useState([]);
  const [viewResult, setViewResult] = useState(false);
  const questionList = questionReducer[initialQuestions];

  console.log('answer', questionReducer);
  const handleChange = value => {
    console.log(value);
    setAnswer(value);
  };

  

  const handleNext = () => {
    if (initialQuestions < questionReducer.length) {
      setInitialQuestions(state => state + 1);
      setResultArray(state => [...state, { id: questionList?.id, answer }]);
    }
  };

  const handleFinish = () => {
    if (initialQuestions < questionReducer.length) {
      setResultArray(state => [...state, { id: questionList?.id, answer }]);
      setViewResult(state => !state);
      dispatch({
        type: 'POST_RESULTS_REQUEST',
        payload: resultArray,
      });
    }
  };

  console.log('result', resultArray);

  console.log("HERE!!!", questionReducer);


  useEffect(() => {
    getQuestions();
    handleNext();
  }, []);

  return (
    <div className="h-screen p-6 overflow-hidden">
      {/*Upper Section  */}
      <div className="flex flex-row justify-between">
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
          <span className="font-bold text-sx md:text-lg">30</span>
          {questionReducer.some(w => (<span className="font-bold text-sx md:text-lg">{w.weight}</span>))}
        </div>
        <div className="flex flex-row">
          <p className="text-xl font-bold text-gray-900">Fantasy Quiz #156</p>
        </div>
        <div className="flex flex-row">
          <GrFormClose
            className="text-2xl cursor-pointer bg-white rounded-full shadow-md"
            onClick={() => navigate('/dashboard')}
          />
        </div>
      </div>

      {viewResult ? (
        <Results />
      ) : (
        <Questions
          valueInitial={valueInitial}
          questionList={questionList}
          initialQuestions={initialQuestions}
          questionReducer={questionReducer}
          handleChange={handleChange}
          handleNext={handleNext}
          handleFinish={handleFinish}
        />
      )}
    </div>
  );
}

const mapStateToProps = ({ questionReducer }) => ({
  questionReducer,
});

const mapDispatchToProps = dispatch => ({
  getQuestions: () =>
    dispatch({
      type: 'LOAD_QUESTION_REQUEST',
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
