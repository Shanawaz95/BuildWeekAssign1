import React from "react";
import MultiSelect from "../multi-select/MultiSelect";
import SingleSelect from "../single-select/SingleSelect";

function QuestionType(props) {
  let inpVal = props.inpVal;
  let setInpVal = props.setInpVal;

  let element;

  switch (inpVal[inpVal.length - 1].quesType) {
    case "multi-select":
      element = (
        <MultiSelect inpVal={inpVal} setInpVal={setInpVal}></MultiSelect>
      );
      break;

    case "single-select":
      element = (
        <SingleSelect inpVal={inpVal} setInpVal={setInpVal}></SingleSelect>
      );
      break;

    default:
      break;
  }

  function qstTypeChange(e) {
    let newList = [...inpVal];
    newList[e.target.id].id = e.target.id;
    newList[e.target.id].quesType = e.target.value;
    setInpVal(newList);
  }

  return (
    <>
      <select
        className="drop-select"
        onChange={qstTypeChange}
        defaultValue="not-selected"
        id={inpVal.length - 1}
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
