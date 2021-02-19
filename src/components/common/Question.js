import React, { useState } from "react";
import { ReactComponent as QuestionIcon } from "../../question-solid.svg";

function Question(props) {
  let inpVal = props.inpVal;
  let setInpVal = props.setInpVal;

  function handleChange(e) {
    let newList = [...inpVal];
    newList[newList.length - 1].question = e.target.value;
    setInpVal(newList);
  }

  return (
    <div>
      <QuestionIcon className="qstIcon"></QuestionIcon>
      <input
        type="text"
        placeholder="Enter a question"
        value={inpVal[inpVal.length - 1].question}
        onChange={handleChange}
        className="questionTxtBox"
      ></input>
    </div>
  );
}

export default Question;
