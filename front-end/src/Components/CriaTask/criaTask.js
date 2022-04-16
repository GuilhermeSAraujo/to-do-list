import React, { useState } from "react";
import "./criaTask.css";

function CriaTask({ createTask }) {
    const [taskContent, setTaskContent] = useState("");

    const addTask = () => {
        let newTaskData = {
            date: new Date(),
            status: false,
            content: taskContent
        };
        createTask(newTaskData);
    }

    return (
        <div className="formulario">
            <h2>Criar Tarefas</h2>
            <label className="labelInput">Insira uma tarefa:</label>
            <br></br>
            <input
                placeholder="Tarefa"
                id="textoTarefa"
                type="text"
                onChange={(event) => setTaskContent(event.target.value)}
            ></input>
            <button className="botaoAdicionar" onClick={() => addTask()}>
                Adicionar tarefa
            </button>
        </div>
    );
}

export default CriaTask;
