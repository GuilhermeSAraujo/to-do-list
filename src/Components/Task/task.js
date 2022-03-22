import React, { useState } from "react";
import "./task.css";

function Task({ task, deletaTask }) {
  let [mostraOpcoes, setMostraOpcoes] = useState(false);
  let [taskConcluida, setTaskConcluida] = useState(false);
  const removeTask = (taskId) => deletaTask(taskId);
  const concluiTask = () =>
    setTaskConcluida((statusAnterior) => !statusAnterior);

  var conteudo = <></>;
  if (taskConcluida) {
    conteudo = <s>{task.conteudo}</s>;
  } else {
    conteudo = <>{task.conteudo}</>;
  }
  if (mostraOpcoes) {
    return (
      <div key={task.id}>
        {conteudo}
        <button
          onMouseOut={() => setMostraOpcoes(false)}
          onClick={() => concluiTask()}
        >
          Concluir
        </button>
        <button
          onMouseOut={() => setMostraOpcoes(false)}
          onClick={() => removeTask(task.id)}
        >
          Deletar
        </button>
      </div>
    );
  } else {
    return (
      <div onMouseOver={() => setMostraOpcoes(true)} key={task.id}>
        {conteudo}
      </div>
    );
  }
}

export default Task;
