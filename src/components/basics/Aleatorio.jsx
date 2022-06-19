import React from "react";

export default (props) =>  {
    
  const { min, max } = props;
  const numeroSorteado = parseInt(
    Math.random() * (min - max) - min
  );
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor mínimo: </strong> {min}{" "}
      </p>
      <p>
        <strong>Valor máximo: </strong> {max}{" "}
      </p>
      <p>
        <strong>Valor Escolhido: </strong> {numeroSorteado}{" "}
      </p>
    </div>
  );
};
