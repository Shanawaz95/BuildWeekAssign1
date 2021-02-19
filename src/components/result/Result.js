import React from "react";
import { Link } from "react-router-dom";

function Result(props) {
  let inpVal = props.inpVal;
  let newList = [];

  function resultRender(idx) {
    newList = [];
    if (inpVal[idx].quesType == "multi-select") {
      inpVal[idx].answers.map((val) => {
        newList.push(<li>{val}</li>);
        return newList;
      });
    } else {
      inpVal[idx].answers.map((val) => {
        newList.push(<li>{val}</li>);
        return newList;
      });
    }
  }

  return (
    <div>
      {inpVal.map((val, idx) => {
        return (
          <>
            {resultRender(idx)}
            <p>{val.question}</p>
            <ul>{newList}</ul>
          </>
        );
      })}
      <Link
        style={{ textDecoration: "inherit", color: "white" }}
        className="addBtn pubBtn"
        to="/"
      >
        new Survey
      </Link>
    </div>
  );
}

export default Result;
