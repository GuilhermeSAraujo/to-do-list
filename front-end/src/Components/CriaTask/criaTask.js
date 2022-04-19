import React, { useState } from "react";
import "./criaTask.css";

function CriaTask({ createTask }) {
    const [taskContent, setTaskContent] = useState("");

    const addTask = () => {
        let newTaskData = {
            date: new Date(),
            status: false,
            content: taskContent,
        };
        createTask(newTaskData);
    };

    const cutucarEndpoint = async () => {
        let retornoFetch = fetch("http://localhost:3333/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: "Guilherme",
                lastName: "Araújo",
                email: "guilhermesouzae@hotmail.com",
                password: "12345",
            }),
        });
        retornoFetch = await retornoFetch.json();
        console.log(retornoFetch.id);
        // return retornofetch.id;
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
                onChange={(event) => setTaskContent(event.target.value)}
            ></input>
            {/* <button className="botaoAdicionar" onClick={() => addTask()}> */}
            <button className="botaoAdicionar" onClick={() => cutucarEndpoint()}>
                Adicionar tarefa
            </button>
        </div>
    );
}

export default CriaTask;
