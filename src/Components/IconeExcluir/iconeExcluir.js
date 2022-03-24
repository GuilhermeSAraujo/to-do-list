import React from "react";
import IconeLixeira from "https://guilhermesaraujo.github.io/to-do-list/src/Components/IconeExcluir/lixeira.svg"; // Path to your icons.svg

const IconeExcluir = ({ excluirTask, taskId, tamanho }) => (
  <>
    <button onClick={() => excluirTask(taskId)}>
      <img
        src={IconeLixeira}
        alt="mySvgImage"
        width={tamanho}
        height={tamanho}
      />
    </button>
  </>
);

export default IconeExcluir;
