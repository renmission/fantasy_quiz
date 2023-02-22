import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FcMoneyTransfer, FcApproval, FcDiploma2 } from "react-icons/fc";

function Results({ resultsReducer }) {
  const [resultData, setResultData] = useState();
  const [countAnswer, setCountAnswer] = useState();
  console.log("results", countAnswer);

  useEffect(() => {
    const load = () => {
      return resultsReducer.map((item) => {
        // const score = item.newResults.map((y) => y.score);
        console.log(item.newResults.score);
        const itemIterate = item.compareAnswer.reduce((count, answer) => {
          if (answer.correct) return count + 1;
          return count;
        }, 0);
        setCountAnswer(itemIterate);
        setResultData(item.newResults.score);
      });
    };

    load();
  }, [resultsReducer]);

  return (
    <div className="p-[30px] bg-slate-100 h-screen">
      <div className="mt-[40px] text-center">
        <div className="text-center">
          <FcDiploma2 className="text-[200px] text-center mx-auto" />
        </div>
        <p className="font-bold text-[20px] mt-[20px]">
          Results of Fantasy Quiz #156
        </p>
      </div>

      <div className="shadow border bg-white p-[10px] mb-[10px] mt-[30px] rounded-lg">
        <div className="flex flex-row justify-between items-center">
          <FcMoneyTransfer className="text-[30px]" />
          <p className="font-bold text-[16px]">Score Gained</p>
          <p className="font-bold text-[16px]">{resultData}</p>
        </div>
      </div>

      <div className="shadow border bg-white p-[10px] rounded-lg">
        <div className="flex flex-row justify-between">
          <FcApproval className="text-[30px]" />
          <p className="font-bold text-[16px]">Correct Predictions</p>
          <p className="font-bold text-[16px]">{countAnswer}</p>
        </div>
      </div>

      <button
        type="button"
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#31CD63] py-2 px-4 text-sm font-medium text-white hover:bg-[#15cf50] focus:outline-none focus:ring-2 focus:ring-[#31CD63] focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait mt-[40px]"
      >
        Back
      </button>
    </div>
  );
}

const mapStateToProps = ({ resultsReducer }) => ({
  resultsReducer,
});

export default connect(mapStateToProps, null)(Results);
