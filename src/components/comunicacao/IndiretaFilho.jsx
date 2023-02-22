import React from "react";

export default (props) => {
  const min = 20;
  const max = 34;
  const random = () => parseInt(Math.random() * (max - min)) + min;
  const call = props.aoClicar; //objeto criado no componente IndiretaFilho dentro do componente IndiretaPai que esperar receber uma funcao
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
