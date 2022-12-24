import React from "react";
import "./App.css";
import First from "./components/basics/First"; //o nome "First" n precisa ser exatamente o mesmo nome da funcao de origem
import ComParametro from "./components/basics/ComParemetro";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#05 - Familia" color="#CD7F32">
        <Familia sobrenome="Novachronos">
          <FamiliaMembro nome="Alice" />
          <FamiliaMembro nome="Felizberto" />
          <FamiliaMembro nome="Licht" />
        </Familia>
      </Card>

      <Card titulo="#04 - Aleatório" color="#CD7F32">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#954535">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Paramentro" color="#A52A2A">
        <ComParametro titulo="Situação do aluno" aluno="Ádila" nota={9.9} />
      </Card>

      <Card titulo="#01 - First" color="#D27D2D">
        <First></First>
      </Card>
    </div>
  </div>
);
