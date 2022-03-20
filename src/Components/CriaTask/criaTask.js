import React, { useState } from "react";
import "./criaTask.css";

function CriaTask({ novaTask }) {
    const [conteudoTask, setConteudoTask] = useState("");
    const adicionaTask = () => {
        novaTask(conteudoTask);
    };
    return (
        <div className="formulario">
            <h2>Criar Tarefas</h2>
            <label className="labelInput">Insira uma tarefa:</label>
            <br></br>
            <input
                placeholder="Tarefa"
                id="textoTarefa"
                type="text"
                onChange={(event) => setConteudoTask(event.target.value)}
            ></input>
            <button className="botaoAdicionar" onClick={adicionaTask}>
                Adicionar tarefa
            </button>
        </div>
    );
}

export default CriaTask;
