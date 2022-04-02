import React from "react";
import IconeCheck from "./iconeConcluir.svg"; // Path to your icons.svg
import "./iconeConcluir.css";

const IconeConcluir = ({ concluirTask, taskId, tamanho }) => (
    <>
        <button onClick={() => concluirTask(taskId)} className="iconeConcluir">
            <img src={IconeCheck} alt="mySvgImage" width={tamanho} height={tamanho} />
        </button>
    </>
);

export default IconeConcluir;
