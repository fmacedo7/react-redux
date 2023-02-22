import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {

    const [nome, setNome] = useState("?");
    const [numero, setNumero] = useState(0);
    const [bool, setBool] = useState(false)

  function pegarInfo(nome, numero, bool) {

    setNome(nome);
    setNumero(numero);
    setBool(bool);
    
    console.log(nome, numero, bool);
  }
  return (
    <div>
      <div>
        <span>{nome} </span>
        <span><strong>{numero} </strong></span>
        <span> {bool ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho aoClicar={pegarInfo} />
    </div>
  );
};
