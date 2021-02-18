import React, { useState } from "react";

function Question(props) {
  const [inpVal, setInpVal] = useState("");

  function handleChange(e) {
    setInpVal(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a question"
        value={inpVal}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Question;
