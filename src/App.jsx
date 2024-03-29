import React from "react";
import "./App.css";
import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/fomulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import Usuario from "./components/condicional/Usuario";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
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
      <Card titulo="#13 - Mega" color="#424242">
        <Mega />
      </Card>
      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={100}></Contador>
      </Card>
      <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
        <Input></Input>
      </Card>
      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>
      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="#08 - Renderizacao condicional" color="#982395">
        <ParOuImpar numero={21} />
        <Usuario usuario={{ nome: "Jesus" }} />
      </Card>
      <Card id="test" titulo="#07 - Desafio Repeticao" color="#3A9AD9">
        <TabelaProdutos />
      </Card>
      <Card titulo="#06 - Lista de Repeticao" color="#FF4C65">
        <ListaAlunos />
      </Card>
      <Card titulo="#05 - Familia" color="#CD7F32">
        <Familia sobrenome="Novachronos">
          <FamiliaMembro nome="Alice" />
          <FamiliaMembro nome="Julius" />
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
