import React, { useState } from "react";

function AddButton(props) {
  const setClicked = props.set;
  const clicked = props.click;
  const anotherClicked = props.secClick;

  let inpVal = props.inpVal;
  let setInpVal = props.setInpVal;

  function handleAddClick() {
    setClicked(true);
    let newList = [
      ...inpVal,
      { id: "", question: "", quesType: "", answers: [""] },
    ];
    setInpVal(newList);
  }

  return (
    <div>
      {clicked || anotherClicked ? (
        <button
          style={{ display: "none" }}
          className="addBtn"
          onClick={handleAddClick}
        >
          Add Question
        </button>
      ) : (
        <button className="addBtn" onClick={handleAddClick}>
          Add Question
        </button>
      )}
    </div>
  );
}

export default AddButton;
