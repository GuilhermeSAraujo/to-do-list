import React, { useState } from "react";
import "./listaTasks.css";

function ListaTasks({ listaTasks }) {
    let [existeTarefa, setExistTarefa] = useState(false);
    if (listaTasks.length > 0) {
        listaTasks.map((task) => {
            return <h1>task.conteudo</h1>;
        });
    }
    console.log(listaTasks);
    return (
        <div className="lista">
            <h2>Tarefas Cadastradas</h2>
        </div>
    );
}

export default ListaTasks;
