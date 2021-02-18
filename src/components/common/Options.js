import React, { useState } from "react";
import AddButton from "./AddButton";

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

  return (
    <div className="text-center">
      <p className="options">options</p>
      {props.qsttype == "multi-select" ? (
        inputList.map((val, idx) => {
          return (
            <div key={idx}>
              <input
                type="text"
                placeholder="Type answer here"
                id={idx}
                value={val}
                onChange={handleInput}
              ></input>
              <button onClick={increment}>+</button>
              <button onClick={() => decrement(idx)}>-</button>
              <br></br>
            </div>
          );
        })
      ) : (
        <div>
          <input
            type="text"
            placeholder="Type answer here"
            id={0}
            value={inputList[0]}
            onChange={handleInput}
          ></input>
          <button>+</button>
          <button>-</button>
          <br></br>
          <input
            type="text"
            placeholder="Type answer here"
            id={1}
            value={inputList[1]}
            onChange={handleInput}
          ></input>
          <button>+</button>
          <button>-</button>
          <br></br>
        </div>
      )}
      <AddButton></AddButton>
      <br></br>
    </div>
  );
}

export default Options;
