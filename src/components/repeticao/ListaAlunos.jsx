import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  //lista de objeto do tipo aluno, corresponde a um aluno da lista alunos.
  const nome_alunos = alunos.map((aluno) => {
    return (
        // a propriedade 'key' pode ser omitida, mas ela e importante para detectar eventuais
        // mudancas na lista de alunos de tal maneira que eu queira retornar a mudanca no meu JSX
        <li key={aluno.id}>
        {/* cada aluno tem um id, nome e nota que e um atributo da variavel aluno. */}
        {aluno.id}) {aluno.nome} - {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>{nome_alunos}</ul>
    </div>
  );
};
