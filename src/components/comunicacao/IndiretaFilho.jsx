import React from "react";

export default (props) => {
  const min = 20;
  const max = 34;
  const random = () => parseInt(Math.random() * (max - min)) + min;
  const call = props.aoClicar;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => {
          call("Artix", random, true);
        }}
      >
        Send
      </button>
    </div>
  );
};
