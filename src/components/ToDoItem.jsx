import React, { useState } from "react";

const ToDoItem = (props) => {
  const [click, setClick] = useState(false);

  function lineThrough() {
    setClick((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      style={
        click === false
          ? { textDecoration: "" }
          : { textDecoration: "line-through" }
      }
      onClick={lineThrough}
    >
      {props.text}
    </li>
  );
};

export default ToDoItem;
