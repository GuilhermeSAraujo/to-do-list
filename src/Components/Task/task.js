import React, { useState } from 'react';
import './task.css';
import IconeExcluir from '../IconeExcluir/iconeExcluir';
import IconeConcluir from '../IconeConcluir/iconeConcluir';

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
        {/* <button
          onMouseOut={() => setMostraOpcoes(false)}
          onClick={() => concluiTask()}
        >
          Concluir
        </button> */}
        <IconeConcluir
          concluirTask={concluiTask}
          taskId={task.id}
          tamanho="25"
        />
        <IconeExcluir
          excluirTask={removeTask}
          taskId={task.id}
          onMouseOut={() => setMostraOpcoes(false)}
          onClick={() => removeTask(task.id)}
          tamanho="25"
        />
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
