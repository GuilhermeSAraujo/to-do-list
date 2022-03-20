import React, { useState } from "react";
import "./listaTasks.css";

function ListaTasks({ listaTasks }) {
    let [existeTarefa, setExistTarefa] = useState(false);
    console.log(listaTasks);
    return (
        <div className="lista">
            <h2>Tarefas Cadastradas</h2>
        </div>
    );
}

export default ListaTasks;
