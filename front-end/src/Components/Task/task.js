import React, { useState } from "react";
import "./task.css";
import IconeExcluir from "../IconeExcluir/iconeExcluir";
import IconeConcluir from "../IconeConcluir/iconeConcluir";

function Task({ removeTask, task }) {
    let [taskConcluida, setTaskConcluida] = useState(false);

    const concluiTask = () => setTaskConcluida((statusAnterior) => !statusAnterior);

    const deleteTask = (taskId) => {
        return removeTask(taskId);
    }

    var conteudo = <></>;
    if (taskConcluida) {
        conteudo = <s>{task.content}</s>;
    } else {
        conteudo = <>{task.content}</>;
    }
    return (
        <div key={task._id}>
            <div>
                {conteudo}
                <IconeConcluir
                    concluirTask={concluiTask}
                    taskId={task._id}
                    tamanho="10"
                    className="iconeConcluir"
                />
                <IconeExcluir
                    excluirTask={removeTask}
                    taskId={task._id}
                    tamanho="10"
                    className="iconeExcluir"
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    );

}

export default Task;
