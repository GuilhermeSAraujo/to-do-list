import React, { useState } from "react";
import "./task.css";
import IconeExcluir from "../IconeExcluir/iconeExcluir";
import IconeConcluir from "../IconeConcluir/iconeConcluir";

function Task({ task, deletaTask }) {
    let [mostraOpcoes, setMostraOpcoes] = useState(false);
    let [taskConcluida, setTaskConcluida] = useState(false);
    const removeTask = (taskId) => deletaTask(taskId);
    const concluiTask = () => setTaskConcluida((statusAnterior) => !statusAnterior);

    const alteraEstadoComDelay = (estado, delay) => {
        setTimeout(
            setTimeout(() => {
                setMostraOpcoes(estado);
            }, delay)
        );
    };

    var conteudo = <></>;
    console.log(task);
    if (taskConcluida) {
        conteudo = <s>{task.content}</s>;
    } else {
        conteudo = <>{task.content}</>;
    }
    if (mostraOpcoes) {
        return (
            <div key={task._id}>
                <div onMouseOut={() => alteraEstadoComDelay(false, 170)}>
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
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div onMouseOver={() => alteraEstadoComDelay(true, 0)} key={task._id}>
                {conteudo}
            </div>
        );
    }
}

export default Task;
