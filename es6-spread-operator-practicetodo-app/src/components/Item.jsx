import React, { useState } from "react";

function Item1(props) {
  const [textDecoration, setTextDecoration] = useState(true);
  function handleClick() {
    setTextDecoration(function (pre) {
      return !pre;
    });
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: textDecoration ? "none" : "line-through" }}>
        {props.name}
      </li>
    </div>
  );
}
export default Item1;
