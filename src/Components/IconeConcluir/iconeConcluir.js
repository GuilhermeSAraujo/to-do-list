import React from "react";
import IconeCheck from "https://guilhermesaraujo.github.io/to-do-list/src/Components/IconeConcluir/iconeConcluir.svg"; // Path to your icons.svg

const IconeConcluir = ({ concluirTask, taskId, tamanho }) => (
  <>
    <button onClick={() => concluirTask(taskId)}>
      <img src={IconeCheck} alt="mySvgImage" width={tamanho} height={tamanho} />
    </button>
  </>
);

export default IconeConcluir; //
