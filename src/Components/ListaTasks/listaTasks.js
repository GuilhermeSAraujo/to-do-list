import React from "react";
import "./listaTasks.css";

function ListaTasks({ tasks }) {
    if (tasks.length > 0) {
        return (
            <div className="lista">
                <h2>Tarefas Cadastradas</h2>
                {tasks.map((task) => {
                    return <div className="task">{task.conteudo}</div>;
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
