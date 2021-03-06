import React from "react";
import Question from "../common/Question";
import Options from "../common/Options";

function SingleSelect(props) {
  let inpVal = props.inpVal;
  let setInpVal = props.setInpVal;
  return (
    <div>
      <Question inpVal={inpVal} setInpVal={setInpVal}></Question>
      <Options inpVal={inpVal} setInpVal={setInpVal}></Options>
    </div>
  );
}

export default SingleSelect;
