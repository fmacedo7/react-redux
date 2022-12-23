import React from "react";
import First from "./components/basics/First"; //o nome "First" n precisa ser exatamente o mesmo nome da funcao de origem
import ComParametro from "./components/basics/ComParemetro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";

export default (_) => (
  <div id="app">
    <h1>Fundamentos React</h1>

    <Card titulo="#04 - Aleatorio">
      <Aleatorio min={1} max={60} />
    </Card>

    <Card titulo="#03 - Fragmento">
      <Fragmento />
    </Card>

    <Card titulo="#02 - Com Paramentro">
      <ComParametro titulo="Situcao do aluno" aluno="Ádila" nota={9.9} />
    </Card>

    <Card titulo="#01 - First">
      <First></First>
    </Card>
  </div>
);
