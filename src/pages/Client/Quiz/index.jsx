import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { FcGraduationCap } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import Questions from "./questions";
import Results from "../Results";

function Quiz({ getQuestions, questionReducer }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [initialQuestions, setInitialQuestions] = useState(0);
  const [valueInitial, setInitialValue] = useState(0);
  const [answer, setAnswer] = useState();
  const [resultArray, setResultArray] = useState([]);
  const [viewResult, setViewResult] = useState(false);
  const questionList = questionReducer[initialQuestions];

  console.log("answer", questionReducer);
  const handleChange = (value) => {
    console.log(value);
    setAnswer(value);
  };

  const handeNext = () => {
    if (initialQuestions < questionReducer.length) {
      setInitialQuestions((state) => state + 1);
      setResultArray((state) => [...state, { id: questionList?.id, answer }]);
    }
  };

  const handleFinish = () => {
    if (initialQuestions < questionReducer.length) {
      setResultArray((state) => [...state, { id: questionList?.id, answer }]);
      setViewResult((state) => !state);
      dispatch({
        type: "POST_RESULTS_REQUEST",
        payload: resultArray,
      });
    }
  };

  console.log("result", resultArray);

  useEffect(() => {
    getQuestions();
    handeNext();
  }, []);

  return (
    <div className="p-[30px] bg-slate-100 h-screen">
      {/*Upper Section  */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <FcGraduationCap className="text-[50px]" />
        </div>
        <div className="flex flex-row">
          <p className="text-[30px] font-bold text-[#31CD63]">
            Fantasy Quiz #156
          </p>
        </div>
        <div className="flex flex-row">
          <AiFillCloseCircle
            className="text-[30px] cursor-pointer"
            onClick={() => navigate("/dashboard")}
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
          handeNext={handeNext}
          handleFinish={handleFinish}
        />
      )}
    </div>
  );
}

const mapStateToProps = ({ questionReducer }) => ({
  questionReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: () =>
    dispatch({
      type: "LOAD_QUESTION_REQUEST",
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
