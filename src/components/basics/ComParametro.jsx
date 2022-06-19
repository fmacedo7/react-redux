import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <strong>
        <h2>{props.title}</h2>
      </strong>
      <p>
        <strong> {props.subtitle} </strong>
        tem nota
        <strong> {props.nota} </strong>
        e está
        <strong> {status} </strong>
      </p>
    </div>
  );
}
