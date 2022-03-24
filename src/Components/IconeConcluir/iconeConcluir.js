import React from "react";
import IconeCheck from "./iconeConcluir.svg"; // Path to your icons.svg

const IconeConcluir = ({ concluirTask, taskId, tamanho }) => (
  <>
    <button onClick={() => concluirTask(taskId)}>
      <img src={IconeCheck} alt="mySvgImage" width={tamanho} height={tamanho} />
    </button>
  </>
);

export default IconeConcluir; //
