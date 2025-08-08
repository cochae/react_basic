import React from "react";
import {} from "reactstrap";
const R066_OnClick = () => {
  const buttonClick = (param) => {
    if (typeof param != "string") param = "Click a";
    console.log("param: " + param);
  };
  return (
    <>
      <button onClick={(e) => buttonClick("Click button")}>Click button</button>
      <div onClick={(E) => buttonClick("Click div")}>Click div</div>
      <a href="#" onClick={buttonClick}>
        Click a
      </a>
    </>
  );
};

export default R066_OnClick;
