import React from "react";

export default (props) => {
  return (
    <div>
      <button onClick={props.incrementa}>+</button>
      <button onClick={props.decrementa}>-</button>
    </div>
  );
};
