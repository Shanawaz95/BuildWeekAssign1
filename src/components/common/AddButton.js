import React, { useState } from "react";

function AddButton(props) {
  const setClicked = props.props;

  function handleAddClick() {
    setClicked(true);
  }

  return (
    <div>
      <button className="addBtn" onClick={handleAddClick}>
        Add Question
      </button>
    </div>
  );
}

export default AddButton;
