import React, { useState } from "react";
import "./task.css";
import IconeExcluir from "../IconeExcluir/iconeExcluir";
import IconeConcluir from "../IconeConcluir/iconeConcluir";
import IconeEditar from "../IconeEditar/iconeEditar";

function Task({ updateTask, removeTask, task }) {
    let [isTaskDone, setTaskDone] = useState(false);
    let [isEditing, setIsEditing] = useState(false);

    const concluiTask = () => setTaskDone((statusAnterior) => !statusAnterior);

    const deleteTask = (taskId) => {
        return removeTask(taskId);
    }

    const startEditing = () => {
        setIsEditing(true);
    }

    var conteudo = <></>;
    if (isTaskDone) {
        conteudo = <s>{task.content}</s>;
    } else {
        conteudo = <>{task.content}</>;
    }

    if (isEditing) {
        return (
            <div>
                <input
                    placeholder={task.content}
                    id="textoTarefa"
                    type="text"
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            let newContent = event.target.value;
                            updateTask({
                                content: newContent,
                                _id: task._id
                            });
                            setIsEditing(false);
                        }
                    }}
                ></input>
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
                <IconeEditar
                    tamanho="10"
                    taskId={task._id}
                    startEditing={startEditing}
                />
            </div>
        );
    } else {
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
                    <IconeEditar
                        tamanho="10"
                        taskId={task._id}
                        startEditing={startEditing}
                    />
                </div>
            </div>
        );
    }
}

export default Task;
