import React from "react";
import IconeLixo from "./lixo.svg"; // Path to your icons.svg
import "./iconeExcluir.css";

const IconeExcluir = ({ excluirTask, taskId, tamanho }) => (
    <>
        <button onClick={() => excluirTask(taskId)} className="iconeExcluir">
            <img src={IconeLixo} alt="mySvgImage" width={tamanho} height={tamanho} />
        </button>
    </>
);

export default IconeExcluir;
