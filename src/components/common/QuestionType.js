import React, { useState } from "react";
import MultiSelect from "../multi-select/MultiSelect";
import SingleSelect from "../single-select/SingleSelect";

function QuestionType(props) {
  const [selectedQstType, setSelectedQstType] = useState("");

  let element;
  switch (selectedQstType) {
    case "multi-select":
      element = <MultiSelect qsttype={selectedQstType}></MultiSelect>;
      break;

    case "single-select":
      element = <SingleSelect qsttype={selectedQstType}></SingleSelect>;
      break;

    default:
      break;
  }

  function qstTypeChange(e) {
    setSelectedQstType(e.target.value);
  }

  return (
    <>
      <select
        className="drop-select"
        onChange={qstTypeChange}
        defaultValue="not-selected"
      >
        <option className="drop-option" value="multi-select">
          multi-select
        </option>
        <option className="drop-option" value="single-select">
          single-select
        </option>
        <option style={{ display: "none" }} disabled value="not-selected">
          Select question type
        </option>
      </select>
      {element}
    </>
  );
}

export default QuestionType;
