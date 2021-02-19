import React, { useState } from "react";
import ButtonHolder from "../holder/ButtonHolder";

function Options(props) {
  let inpVal = props.inpVal;
  let setInpVal = props.setInpVal;

  function handleInput(e) {
    let newList = [...inpVal];
    newList[newList.length - 1].answers[e.target.id] = e.target.value;
    setInpVal(newList);
  }

  function increment() {
    let newList = [...inpVal];
    newList[newList.length - 1].answers.push("");
    setInpVal(newList);
  }

  function decrement(index) {
    let newList = [...inpVal];
    newList[newList.length - 1].answers.splice(index, 1);
    newList[newList.length - 1].answers.length != 0
      ? setInpVal(newList)
      : setInpVal(inpVal);
  }

  function conditionalAddBtn() {
    if (
      inpVal[inpVal.length - 1].quesType == "multi-select" &&
      inpVal[inpVal.length - 1].answers.length >= 4
    ) {
      return (
        <ButtonHolder inpVal={inpVal} setInpVal={setInpVal}></ButtonHolder>
      );
    } else if (inpVal[inpVal.length - 1].quesType == "single-select") {
      return (
        <ButtonHolder inpVal={inpVal} setInpVal={setInpVal}></ButtonHolder>
      );
    }
  }

  return (
    <div>
      <p className="options">Options</p>
      {inpVal[inpVal.length - 1].quesType == "multi-select" ? (
        inpVal[inpVal.length - 1].answers.map((val, idx) => {
          return (
            <div className="optContainer" key={idx}>
              <input
                type="text"
                placeholder="Type answer here"
                id={idx}
                value={val}
                onChange={handleInput}
                className="answerInput"
              ></input>
              <button className="btn-inc" onClick={increment}>
                +
              </button>
              <button className="btn-dec" onClick={() => decrement(idx)}>
                -
              </button>
              <br></br>
            </div>
          );
        })
      ) : (
        <>
          <div className="optContainer">
            <input
              type="text"
              placeholder="Type answer here"
              id={0}
              value={inpVal[inpVal.length - 1].answers[0]}
              onChange={handleInput}
              className="answerInput"
            ></input>
            <button className="btn-inc">+</button>
            <button className="btn-dec">-</button>
            <br></br>
          </div>
          <div className="optContainer">
            <input
              type="text"
              placeholder="Type answer here"
              id={1}
              value={inpVal[inpVal.length - 1].answers[1]}
              onChange={handleInput}
              className="answerInput"
            ></input>
            <button className="btn-inc">+</button>
            <button className="btn-dec">-</button>
            <br></br>
          </div>
        </>
      )}

      {conditionalAddBtn()}

      <br></br>
    </div>
  );
}

export default Options;
