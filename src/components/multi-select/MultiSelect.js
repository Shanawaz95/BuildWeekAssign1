import React, { useState } from "react";
import Question from "../common/Question";
import Options from "../common/Options";

function MultiSelect(props) {
  return (
    <div>
      <Question></Question>
      <Options qsttype={props.qsttype}></Options>
    </div>
  );
}

export default MultiSelect;
