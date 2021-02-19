import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function PublishButton(props) {
  const setClicked = props.set;
  const clicked = props.click;
  const anotherClicked = props.secClick;

  function handleAddClick() {
    setClicked(true);
  }
  return (
    <div>
      {clicked || anotherClicked ? (
        <Link
          to="/result"
          style={{ display: "none" }}
          className="addBtn pubBtn"
          onClick={handleAddClick}
        >
          Publish
        </Link>
      ) : (
        <Link
          to="/result"
          style={{ textDecoration: "inherit", color: "white" }}
          className="addBtn pubBtn"
          onClick={handleAddClick}
        >
          Publish
        </Link>
      )}
    </div>
  );
}

export default PublishButton;
