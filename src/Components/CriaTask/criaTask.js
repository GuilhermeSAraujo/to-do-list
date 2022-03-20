import React from "react";
import "./criaTask.css";

function CriaTask({ criaTask }) {
    const adicionaTask = () => {
        criaTask("Nova Task");
    };
    return (
        <div className="formulario">
            <h2>Criar Tarefas</h2>
            <form>
                <label className="labelInput" for="textoTarefa">
                    Insira uma tarefa:
                </label>
                <br></br>
                <input placeholder="Tarefa" id="textoTarefa" type="text"></input>
                <button className="botaoAdicionar" onClick={adicionaTask}>
                    Adicionar tarefa
                </button>
            </form>
        </div>
    );
}

export default CriaTask;
