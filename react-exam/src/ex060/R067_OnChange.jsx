import React from "react";

const R067_OnChange = () => {
  const change = (e) => {
    let val = e.target.value;
    console.log("param: " + val);
  };
  return (
    <>
      <input type="text" onChange={change} />
      <select onChange={change}>
        <option value="react">react</option>
        <option value="200">200</option>
      </select>
    </>
  );
};

export default R067_OnChange;
