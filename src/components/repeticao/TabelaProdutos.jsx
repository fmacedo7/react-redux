import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdudos.css"
export default (props) => {
  function getLinhas() {
    return produtos.map((produto) => {
      return (
        <tr key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.mercadoria}</td>
          <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
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
          <tbody>{getLinhas()}</tbody>
        </thead>
      </table>
    </div>
  );
};
