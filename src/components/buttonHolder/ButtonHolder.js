import React, { useState } from "react";
import AddButton from "../common/AddButton";
import PublishButton from "../common/PublishButton";
import QuestionType from "../common/QuestionType";

function ButtonHolder(props) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <AddButton props={setClicked}></AddButton>
      <PublishButton></PublishButton>
      <br></br>
      {clicked ? <QuestionType></QuestionType> : null}
    </>
  );
}

export default ButtonHolder;
