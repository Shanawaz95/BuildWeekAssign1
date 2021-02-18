import React, { useState, useEffect } from "react";
import QuestionType from "./QuestionType";

function AddButton(props) {
  const [clicked, setClicked] = useState(false);

  function handleAddClick() {
    setClicked(true);
  }

  return (
    <div>
      <button onClick={handleAddClick}>Add Question</button>
      <br></br>
      {clicked ? <QuestionType></QuestionType> : null}
    </div>
  );
}

export default AddButton;
