import React, { useState } from "react";
import QuestionType from "./QuestionType";
import Result from "../result/Result";

function PublishButton(props) {
  const [clicked, setClicked] = useState(false);
  function handleAddClick() {
    setClicked(true);
  }
  return (
    <div>
      <button className="addBtn pubBtn" onClick={handleAddClick}>
        Publish
      </button>

      {clicked ? <Result></Result> : null}
    </div>
  );
}

export default PublishButton;
