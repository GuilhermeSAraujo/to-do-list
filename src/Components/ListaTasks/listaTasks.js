import React from "react";
import "./listaTasks.css";

function ListaTasks({ tasks, removeTask }) {
  const deletaTask = (taskId) => {
    removeTask(taskId);
  };
  if (tasks.length > 0) {
    return (
      <div className="lista">
        <h2>Tarefas Cadastradas</h2>
        {tasks.map((task) => {
          return (
            <div key={task.id} className="task">
              {task.conteudo}
              <button onClick={() => deletaTask(task.id)}>Deletar</button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="lista">
        <h2>Tarefas Cadastradas</h2>
        <p>Nenhuma tarefa foi cadastrada ainda!</p>
      </div>
    );
  }
}

export default ListaTasks;
