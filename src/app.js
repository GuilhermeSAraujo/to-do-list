import React, { useState } from "react";
import "./app.css";
import Navbar from "./Components/Navbar/navbar";
import CriaTask from "./Components/CriaTask/criaTask";
import ListaTasks from "./Components/ListaTasks/listaTasks";

let id = 0;
const geraId = () => {
    return id + 1;
};

function App() {
    let [listaTasks, setListaTask] = useState([]);

    const criaTask = (conteudo) => {
        console.log(conteudo);
        const novaTask = {
            id: geraId(),
            conteudo,
        };
        setListaTask((taskssExistentes) => {
            return [...taskssExistentes, novaTask];
        });
    };

    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <CriaTask criaTask={criaTask} />
                <ListaTasks tasks={listaTasks} />
            </div>
        </div>
    );
}

export default App;
