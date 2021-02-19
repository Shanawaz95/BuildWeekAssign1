import React, { useState } from "react";
import ButtonHolder from "../buttonHolder/ButtonHolder";

function Options(props) {
  const [inputList, setInputList] = useState([""]);

  function handleInput(e) {
    let newList = [...inputList];
    newList[e.target.id] = e.target.value;
    setInputList(newList);
  }

  function increment() {
    setInputList([...inputList, ""]);
  }

  function decrement(index) {
    let newList = [...inputList];
    newList.splice(index, 1);
    newList.length != 0 ? setInputList(newList) : setInputList(inputList);
  }

  function conditionalAddBtn() {
    console.log(props.qsttype == "multi-select" && inputList.length >= 4);
    if (props.qsttype == "multi-select" && inputList.length >= 4) {
      return <ButtonHolder></ButtonHolder>;
    } else if (props.qsttype == "single-select") {
      return <ButtonHolder></ButtonHolder>;
    }
  }

  return (
    <div>
      <p className="options">Options</p>
      {props.qsttype == "multi-select" ? (
        inputList.map((val, idx) => {
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
              value={inputList[0]}
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
              value={inputList[1]}
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
