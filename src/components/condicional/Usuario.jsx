import React from "react";
import If from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        You're welcome, <strong>{usuario.nome}</strong>!
      </If>
    </div>
  );
};