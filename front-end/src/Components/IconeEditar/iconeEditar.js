import React from "react";
import EditarIcone from "./iconeEditar.svg"; // Path to your icons.svg
import "./iconeEditar.css";

const IconeEditar = ({ startEditing, taskId, tamanho }) => (
    <>
        <button onClick={() => startEditing()} className="iconeEditar">
            <img src={EditarIcone} alt="mySvgImage" width={tamanho} height={tamanho} />
        </button>
    </>
);

export default IconeEditar;
