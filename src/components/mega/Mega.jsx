import React, { useState } from "react";

export default (props) => {
  const min = 1;
  const max = 60;
  const [vetor, setVetor] = useState([]);

  function gerarNumeros() {
    const newVetor = [];
    for (let i = 0; i < 6; i++) {
      const random = () => parseInt(Math.random() * (max - min)) + min;
      newVetor[i] = random();
    }
    setVetor(newVetor);
  }

  return (
    <div>
      Numeros da Megasena
      <button onClick={(_) => gerarNumeros()}>Gerar Numeros</button>
      {vetor.length > 0 && (
        <ul>
          {vetor.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
