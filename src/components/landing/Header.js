import React from "react";
import { ReactComponent as Paw } from "../../paw-solid.svg";

function Header() {
  return (
    <>
      <h1 className="text-center p-5 m-5 header">
        <Paw className="m-2 paw" /> Survey Tiger
      </h1>
    </>
  );
}

export default Header;
