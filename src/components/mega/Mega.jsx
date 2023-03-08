import React, { useState } from "react";

export default (props) => {
  const min = 1;
  const max = 60;
  const [vetor, setVetor] = useState([]);

  const random = () => parseInt(Math.random() * (max - min + 1)) + min;

  function gerarNumeros() {
    const newVetor = [];
    while (newVetor.length < 6) {
      const num = random();
      if (newVetor.indexOf(num) === -1) {
        newVetor.push(num);
      }
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
