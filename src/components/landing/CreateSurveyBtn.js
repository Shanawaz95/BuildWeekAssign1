import React, { useState } from "react";
import QuestionType from "../common/QuestionType";

function CreateSurveyBtn(props) {
  let isClicked = props.click;
  let setIsClicked = props.set;
  let inpVal = props.inpVal;
  let setInpVal = props.setInpVal;

  function handleCreateClick() {
    setIsClicked({ ...props });
  }
  return (
    <>
      <div className="createBtn">
        <button
          className={isClicked ? "clickHide" : ""}
          style={{ width: 250, height: 75 }}
          onClick={handleCreateClick}
        >
          Create Survey
        </button>
        {isClicked ? (
          <QuestionType inpVal={inpVal} setInpVal={setInpVal}></QuestionType>
        ) : null}
      </div>
    </>
  );
}

export default CreateSurveyBtn;
