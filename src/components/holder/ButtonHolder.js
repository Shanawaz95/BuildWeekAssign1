import React, { useState } from "react";
import AddButton from "../common/AddButton";
import PublishButton from "../common/PublishButton";
import QuestionType from "../common/QuestionType";
import Result from "../result/Result";

function ButtonHolder(props) {
  const [clicked, setClicked] = useState(false);
  const [clickedPub, setClickedPub] = useState(false);

  let inpVal = props.inpVal;
  let setInpVal = props.setInpVal;

  function resultRender() {
    if (clickedPub) {
    }
  }

  return (
    <>
      <AddButton
        secClick={clickedPub}
        click={clicked}
        set={setClicked}
        inpVal={inpVal}
        setInpVal={setInpVal}
      ></AddButton>
      <PublishButton
        secClick={clicked}
        click={clickedPub}
        set={setClickedPub}
      ></PublishButton>
      <br></br>
      {clicked ? (
        <QuestionType inpVal={inpVal} setInpVal={setInpVal}></QuestionType>
      ) : null}
      {/* {clickedPub ? <Result></Result> : null} */}
    </>
  );
}

export default ButtonHolder;
