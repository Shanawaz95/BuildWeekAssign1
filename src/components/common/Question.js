import React, { useState } from "react";
import { ReactComponent as QuestionIcon } from "../../question-solid.svg";

function Question(props) {
  const [inpVal, setInpVal] = useState("");

  function handleChange(e) {
    setInpVal(e.target.value);
  }

  return (
    <div>
      <QuestionIcon className="qstIcon"></QuestionIcon>
      <input
        type="text"
        placeholder="Enter a question"
        value={inpVal}
        onChange={handleChange}
        className="questionTxtBox"
      ></input>
    </div>
  );
}

export default Question;
