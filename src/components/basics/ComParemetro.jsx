import React from "react";

export default function ComParametro(props) {
  const aprovado = props.nota >= 7 ? "Aprovado(a)" : "Reprovado";
  return (
    <div>
      <h2> {props.titulo} </h2>
      <p>
        <strong> {props.aluno} </strong>
        tem nota
        <strong> {props.nota} </strong>e está
        <strong> {aprovado} </strong>
      </p>
    </div>
  );
}
