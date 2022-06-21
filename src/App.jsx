import './App.css';
import React from "react";

import Familia from './components/basics/Familia';
import Card from "./components/layout/Card";
import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";

export default () => (
  <div className="App">
    <userCard></userCard>
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card title="#5 Familia com membros" color="#00C8F8">
        <Familia sobrenome="Montenegro"></Familia>
      </Card>
      <Card title="#4 Exemplo de card" color="#FA6900">
        <Aleatorio min={1} max={9}></Aleatorio>
      </Card>
      <Card title="#3 Fragmento" color="#E94C6F">
        <Fragmento></Fragmento>
      </Card>
      <Card title="#2 ComParametro" color="#E8B71A">
        <ComParametro
          title="Situação do aluno"
          subtitle="Pedro Silva"
          nota={9.3}
        ></ComParametro>
      </Card>
      <Card title="#1 Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
