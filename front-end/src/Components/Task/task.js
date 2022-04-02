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
    if (taskConcluida) {
        conteudo = <s>{task.conteudo}</s>;
    } else {
        conteudo = <>{task.conteudo}</>;
    }
    if (mostraOpcoes) {
        return (
            <div key={task.id}>
                <div onMouseOut={() => alteraEstadoComDelay(false, 170)}>
                    <a>{conteudo}</a>
                    <IconeConcluir
                        concluirTask={concluiTask}
                        taskId={task.id}
                        tamanho="10"
                        className="iconeConcluir"
                    />
                    <IconeExcluir
                        excluirTask={removeTask}
                        taskId={task.id}
                        tamanho="10"
                        className="iconeExcluir"
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div onMouseOver={() => alteraEstadoComDelay(true, 0)} key={task.id}>
                {conteudo}
            </div>
        );
    }
}

export default Task;
