import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdudos.css";
export default (props) => {
  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className = {i % 2 === 0 ? "Par" : "Impar"}>
          <td>{produto.id}</td>
          <td>{produto.mercadoria}</td>
          <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="tabela_produtos">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Produto</th>
            <th>preco</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};
