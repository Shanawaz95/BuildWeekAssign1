import React from "react";

function TakeSurveyBtn(props) {
  let isClicked = props.click;
  function handleTakeClick() {}
  return (
    <div className="createBtn">
      <button
        className={isClicked ? "clickHide" : ""}
        style={{ width: 250, height: 75 }}
        onClick={handleTakeClick}
      >
        Take Survey
      </button>
    </div>
  );
}

export default TakeSurveyBtn;
