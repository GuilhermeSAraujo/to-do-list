import React from "react";
import IconeLixo from "./lixo.svg";
import "./iconeExcluir.css";

const IconeExcluir = ({ deleteTask, taskId, tamanho }) => {
    return (
        <>
            <button onClick={() => deleteTask(taskId)} className="iconeExcluir">
                <img src={IconeLixo} alt="mySvgImage" width={tamanho} height={tamanho} />
            </button>
        </>
    );
}

export default IconeExcluir;
