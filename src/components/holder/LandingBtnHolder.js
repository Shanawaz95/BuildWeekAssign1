import React, { useState } from "react";
import CreateSurveyBtn from "../landing/CreateSurveyBtn";
import TakeSurveyBtn from "../landing/TakeSurveyBtn";

function LandingBtnHolder(props) {
  const [isClicked, setIsClicked] = useState(false);
  const inpVal = props.inpVal;
  const setInpVal = props.setInpVal;
  return (
    <>
      <CreateSurveyBtn
        inpVal={inpVal}
        setInpVal={setInpVal}
        click={isClicked}
        set={setIsClicked}
      ></CreateSurveyBtn>
      <TakeSurveyBtn click={isClicked}></TakeSurveyBtn>
    </>
  );
}

export default LandingBtnHolder;
